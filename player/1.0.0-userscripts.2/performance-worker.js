"use strict";
(() => {
  // src/performance-calculation.ts
  function supportedFinalMods(mods) {
    if (typeof mods === "number") {
      const supported = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 256 | 512 | 1024 | 4096 | 16384 | 536870912;
      return Number.isSafeInteger(mods) && mods >= 0 && mods <= 4294967295 && !(mods & ~supported);
    }
    const booleanSettings = {
      NF: [],
      EZ: [],
      TD: [],
      HD: ["only_fade_approach_circles"],
      HR: [],
      SD: ["fail_on_slider_tail", "restart"],
      DT: ["adjust_pitch"],
      HT: ["adjust_pitch"],
      NC: [],
      DC: [],
      FL: [],
      PF: ["restart"],
      SO: [],
      CL: ["no_slider_head_accuracy", "classic_note_lock", "always_play_tail_sample", "fade_hit_circle_early", "classic_health"],
      DA: ["extended_limits"],
      MR: []
    };
    const seen = /* @__PURE__ */ new Set();
    let speedMods = 0;
    for (const mod of mods) {
      if (!Object.hasOwn(booleanSettings, mod.acronym) || seen.has(mod.acronym)) return false;
      seen.add(mod.acronym);
      const rate = ["DT", "NC", "HT", "DC"].includes(mod.acronym);
      if (rate && ++speedMods > 1) return false;
      for (const [key, value] of Object.entries(mod.settings ?? {})) {
        if (booleanSettings[mod.acronym].includes(key)) {
          if (value !== null && typeof value !== "boolean") return false;
          continue;
        }
        if (rate && key === "speed_change") {
          if (value !== null && (typeof value !== "number" || !Number.isFinite(value) || value < 0.01 || value > 100)) return false;
          continue;
        }
        if (mod.acronym === "DA" && ["approach_rate", "circle_size", "overall_difficulty", "drain_rate"].includes(key)) {
          if (value !== null && (typeof value !== "number" || !Number.isFinite(value) || value < (key === "approach_rate" ? -10 : 0) || value > 11)) return false;
          continue;
        }
        if (mod.acronym === "EZ" && key === "retries") {
          if (value !== null && (!Number.isSafeInteger(value) || Number(value) < 0)) return false;
          continue;
        }
        if (mod.acronym === "MR" && key === "reflection") {
          if (value !== null && (typeof value !== "string" || !["0", "1", "2"].includes(value))) return false;
          continue;
        }
        return false;
      }
    }
    return true;
  }
  function calculateFinalPerformance(rosu, request) {
    if (!request.finalScore || !supportedFinalMods(request.mods)) return null;
    let map, difficulty, performance;
    try {
      map = new rosu.Beatmap(request.sourceText);
      if (map.mode !== 0 || map.isSuspicious()) throw new Error("Beatmap failed the PP safety check.");
      const state = request.finalScore, counts = [state.counts.great, state.counts.good, state.counts.meh, state.counts.miss];
      if (counts.some((n) => !Number.isSafeInteger(n) || n < 0) || counts.reduce((sum, n) => sum + n, 0) !== map.nObjects || !Number.isSafeInteger(state.maxCombo) || state.maxCombo < 0) throw new Error("Invalid PP score state.");
      const statistics = state.statistics ?? request.statistics;
      if (Object.values(statistics ?? {}).some((n) => n !== void 0 && (!Number.isSafeInteger(n) || n < 0))) throw new Error("Invalid PP slider statistics.");
      difficulty = new rosu.Difficulty({ mods: request.mods, lazer: request.lazer, ...request.difficulty });
      const attributes = difficulty.calculate(map);
      const maxCombo = attributes.maxCombo, maxTicks = attributes.nLargeTicks ?? 0, maxTails = attributes.nSliders ?? 0;
      attributes.free();
      if (state.maxCombo > maxCombo) throw new Error("PP combo exceeds the beatmap maximum.");
      const classic = request.lazer && Array.isArray(request.mods) && request.mods.some((mod) => mod.acronym === "CL" && mod.settings?.no_slider_head_accuracy !== false);
      const required = request.lazer ? [[statistics?.largeTickHits, maxTicks + (classic ? maxTails : 0)], [classic ? statistics?.smallTickHits : statistics?.sliderEndHits, maxTails]] : [];
      for (const [hits, max] of required) {
        if (max > 0 && hits === void 0) return null;
        if (hits !== void 0 && hits > max) throw new Error("PP nested hits exceed the beatmap maximum.");
      }
      performance = new rosu.Performance({
        mods: request.mods,
        lazer: request.lazer,
        ...request.difficulty,
        n300: state.counts.great,
        n100: state.counts.good,
        n50: state.counts.meh,
        misses: state.counts.miss,
        combo: state.maxCombo,
        largeTickHits: statistics?.largeTickHits ?? 0,
        smallTickHits: statistics?.smallTickHits ?? 0,
        sliderEndHits: statistics?.sliderEndHits ?? 0,
        legacyTotalScore: statistics?.legacyTotalScore
      });
      const result = performance.calculate(map);
      const pp = result.pp;
      result.free();
      if (!Number.isFinite(pp) || pp < 0) throw new Error("Invalid PP result.");
      return pp;
    } finally {
      performance?.free();
      difficulty?.free();
      map?.free();
    }
  }
  function calculateTrajectory(rosu, request) {
    let map, difficulty, performance, gradual;
    try {
      map = new rosu.Beatmap(request.sourceText);
      if (map.isSuspicious()) throw new Error("Beatmap failed the PP safety check.");
      if (request.snapshots.length !== map.nObjects) throw new Error("PP snapshots do not match the beatmap.");
      const validateState = (snapshot, objects) => {
        const counts = Object.values(snapshot.counts);
        if (counts.some((n) => !Number.isSafeInteger(n) || n < 0) || counts.reduce((sum, n) => sum + n, 0) !== objects || !Number.isSafeInteger(snapshot.maxCombo) || snapshot.maxCombo < 0) throw new Error("Invalid PP score state.");
        if (Object.values(snapshot.statistics ?? {}).some((n) => n !== void 0 && (!Number.isSafeInteger(n) || n < 0))) throw new Error("Invalid PP slider statistics.");
      };
      request.snapshots.forEach((snapshot, index) => validateState(snapshot, index + 1));
      if (request.finalScore) validateState(request.finalScore, map.nObjects);
      difficulty = new rosu.Difficulty({ mods: request.mods, lazer: request.lazer, ...request.difficulty });
      const full = difficulty.calculate(map);
      const maxTicks = full.nLargeTicks ?? 0, maxTails = full.nSliders ?? 0;
      full.free();
      const final = request.finalScore?.statistics ?? request.statistics ?? request.snapshots.at(-1)?.statistics;
      const ticks = final?.largeTickHits, tails = final?.sliderEndHits;
      const known = (hits, max) => max === 0 || hits === 0 || hits === max;
      const liveKnown = !request.lazer || known(ticks, maxTicks) && known(tails, maxTails);
      performance = difficulty.gradualPerformance(map);
      gradual = difficulty.gradualDifficulty(map);
      return request.snapshots.map((snapshot, index) => {
        const attrs = gradual.next();
        if (!attrs) throw new Error("Missing partial difficulty.");
        const prefixTicks = attrs.nLargeTicks ?? 0, prefixTails = attrs.nSliders ?? 0;
        attrs.free();
        const last = index === request.snapshots.length - 1;
        const state = last && request.finalScore ? request.finalScore : snapshot;
        const statistics = last ? final : snapshot.statistics;
        const prefixKnown = snapshot.statistics?.largeTickHits !== void 0 && snapshot.statistics?.sliderEndHits !== void 0;
        const estimatedHits = (hits, max, prefix) => hits === void 0 ? prefix : max ? Math.round(hits * prefix / max) : 0;
        const result = performance.next({
          maxCombo: state.maxCombo,
          n300: state.counts.great,
          n100: state.counts.good,
          n50: state.counts.meh,
          misses: state.counts.miss,
          osuLargeTickHits: statistics?.largeTickHits ?? (request.estimateNested ? estimatedHits(ticks, maxTicks, prefixTicks) : ticks === 0 ? 0 : prefixTicks),
          osuSmallTickHits: statistics?.smallTickHits ?? 0,
          sliderEndHits: statistics?.sliderEndHits ?? (request.estimateNested ? estimatedHits(tails, maxTails, prefixTails) : tails === 0 ? 0 : prefixTails),
          legacyTotalScore: statistics?.legacyTotalScore
        });
        if (!result) throw new Error("Missing partial performance.");
        const pp = result.pp;
        result.free();
        if (!Number.isFinite(pp) || pp < 0) throw new Error("Invalid PP result.");
        const finalKnown = !request.lazer || (maxTicks === 0 || ticks !== void 0) && (maxTails === 0 || tails !== void 0);
        return (last ? finalKnown : prefixKnown || liveKnown || request.estimateNested && finalKnown) ? pp : null;
      });
    } finally {
      gradual?.free();
      performance?.free();
      difficulty?.free();
      map?.free();
    }
  }

  // src/performance-worker.ts
  var scope = self;
  var library = null;
  async function loadRosu() {
    library ??= (async () => {
      const url = new URL("vendor/rosu-pp-js/rosu_pp_js.js", self.location.href).href;
      const rosu = await import(
        /* @vite-ignore */
        url
      );
      await rosu.default({ module_or_path: new URL("vendor/rosu-pp-js/rosu_pp_js_bg.wasm", self.location.href) });
      return rosu;
    })();
    return library;
  }
  scope.onmessage = async (event) => {
    const request = event.data;
    let finalPp = null;
    try {
      const rosu = await loadRosu();
      finalPp = calculateFinalPerformance(rosu, request);
      const values = request.snapshots.length ? calculateTrajectory(rosu, request) : [];
      scope.postMessage({ id: request.id, ok: true, values, finalPp });
    } catch (error) {
      scope.postMessage({ id: request.id, ok: false, finalPp, error: error instanceof Error ? error.message : String(error) });
    }
  };
})();
