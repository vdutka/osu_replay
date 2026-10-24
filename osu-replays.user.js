// ==UserScript==
// @name         osu! Browser Replays — iPhone prototype
// @namespace    https://github.com/vdutka/osu_replay
// @version      1.0.0.1
// @description  Diagnostic iPhone replay player; automatic download support is under device testing.
// @match        https://osu.ppy.sh/users/*
// @inject-into  content
// @run-at       document-idle
// @noframes
// @grant        GM.xmlHttpRequest
// ==/UserScript==
"use strict";
(() => {
  // src/userscript-protocol.ts
  var DOWNLOAD_LIMITS = { json: 5 * 1024 * 1024, replay: 20 * 1024 * 1024, archive: 32 * 1024 * 1024, osu: 5 * 1024 * 1024 };
  function approvedDownload(value, kind) {
    if (typeof value !== "string" || typeof kind !== "string" || !["json", "replay", "archive", "osu"].includes(kind)) return null;
    let url;
    try {
      url = new URL(value);
    } catch {
      return null;
    }
    if (url.origin !== "https://osu.ppy.sh" || url.username || url.password || url.hash) return null;
    const paths = { json: /^\/scores\/[1-9]\d*$/, replay: /^\/scores\/[1-9]\d*\/download$/, archive: /^\/beatmapsets\/[1-9]\d*\/download$/, osu: /^\/osu\/[1-9]\d*$/ };
    if (!paths[kind].test(url.pathname)) return null;
    if (kind === "archive") {
      if (url.search !== "" && url.search !== "?noVideo=1") return null;
    } else if (url.search) return null;
    return url;
  }
  function validEnvelope(value, token) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    const message = value;
    return message.source === "osu-browser-replay" && message.token === token && token.length >= 16;
  }
  function validFetch(value, token) {
    if (!validEnvelope(value, token)) return false;
    return value.type === "fetch" && typeof value.id === "number" && Number.isSafeInteger(value.id) && value.id > 0 && Boolean(approvedDownload(value.url, value.kind));
  }
  var RequestIds = class {
    seen = /* @__PURE__ */ new Set();
    claim(id) {
      if (!Number.isSafeInteger(id) || id <= 0 || this.seen.has(id) || this.seen.size >= 1e3) return false;
      this.seen.add(id);
      return true;
    }
  };

  // src/userscript.ts
  var playerUrl = new URL("https://vdutka.github.io/osu_replay/player/1.0.0-userscripts.1/viewer.html");
  if (playerUrl.protocol !== "https:" && !(playerUrl.protocol === "http:" && ["127.0.0.1", "localhost"].includes(playerUrl.hostname))) throw new Error("Replay player requires HTTPS.");
  var active = null;
  var scanTimer = 0;
  function report(session, message, failed = false) {
    if (active !== session) return;
    session.report.value = message;
    session.report.hidden = !failed;
  }
  function close() {
    const session = active;
    if (!session) return;
    active = null;
    clearTimeout(session.readyTimer);
    for (const abort of session.aborts) abort();
    session.aborts.clear();
    window.visualViewport?.removeEventListener("resize", session.viewport);
    window.visualViewport?.removeEventListener("scroll", session.viewport);
    window.removeEventListener("resize", session.viewport);
    session.overlay.remove();
    document.documentElement.style.overflow = session.overflow;
    window.scrollTo(session.scrollX, session.scrollY);
    session.focus?.focus({ preventScroll: true });
  }
  function open(score) {
    close();
    const overlay = document.createElement("div");
    overlay.id = "osu-browser-replay-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "osu! replay player");
    overlay.setAttribute("aria-modal", "true");
    overlay.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.6);display:grid;place-items:center;box-sizing:border-box;padding:calc(env(safe-area-inset-top) + 12px) calc(env(safe-area-inset-right) + 12px) calc(env(safe-area-inset-bottom) + 12px) calc(env(safe-area-inset-left) + 12px);";
    const panel = document.createElement("div");
    panel.className = "osu-replay-panel";
    panel.style.cssText = "position:relative;display:flex;flex-direction:column;width:min(1200px,100%);height:min(850px,100%);min-width:0;min-height:0;box-sizing:border-box;overflow:hidden;border:1px solid #8d5576;border-radius:16px;background:#18141c;box-shadow:0 24px 90px #0009;";
    const output = document.createElement("output");
    output.setAttribute("aria-live", "polite");
    output.hidden = true;
    output.style.cssText = "position:absolute;bottom:8px;left:8px;right:8px;z-index:20;padding:10px 12px;border-radius:10px;background:#34252fee;color:#ff9cae;font:13px system-ui;overflow-wrap:anywhere;pointer-events:none;";
    const exit = document.createElement("button");
    exit.type = "button";
    exit.textContent = "\u2715";
    exit.setAttribute("aria-label", "Close replay viewer");
    exit.style.cssText = "position:absolute;top:8px;right:8px;z-index:30;width:44px;height:44px;border:1px solid #ff78b655;border-radius:50%;background:#34252fcc;color:#ffadd3;font:20px system-ui;";
    exit.onclick = close;
    const frame = document.createElement("iframe");
    frame.title = "osu! replay player";
    frame.allow = "autoplay; fullscreen";
    frame.style.cssText = "width:100%;flex:1;min-height:0;border:0;background:#18141c;";
    const token = crypto.randomUUID(), url = new URL(playerUrl);
    url.searchParams.set("score", score);
    url.searchParams.set("token", token);
    frame.src = url.href;
    const viewport = () => {
      const vv = window.visualViewport, width = vv?.width ?? window.innerWidth, height = vv?.height ?? window.innerHeight;
      overlay.style.height = `${height}px`;
      overlay.style.width = `${width}px`;
      overlay.style.top = `${vv?.offsetTop ?? 0}px`;
      overlay.style.left = `${vv?.offsetLeft ?? 0}px`;
      const padding = getComputedStyle(overlay), availableHeight = height - parseFloat(padding.paddingTop) - parseFloat(padding.paddingBottom);
      const panelWidth = Math.min(1200, width - parseFloat(padding.paddingLeft) - parseFloat(padding.paddingRight));
      const desiredHeight = width <= 640 && height > width ? panelWidth * 3 / 4 + 254 : 850;
      panel.style.height = `${Math.max(0, Math.min(desiredHeight, availableHeight))}px`;
    };
    const session = { overlay, frame, token, ids: new RequestIds(), inflight: 0, aborts: /* @__PURE__ */ new Set(), report: output, readyTimer: 0, scrollX: window.scrollX, scrollY: window.scrollY, overflow: document.documentElement.style.overflow, focus: document.activeElement instanceof HTMLElement ? document.activeElement : null, viewport };
    active = session;
    document.documentElement.style.overflow = "hidden";
    panel.append(frame, output, exit);
    overlay.append(panel);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    document.body.append(overlay);
    viewport();
    window.visualViewport?.addEventListener("resize", viewport);
    window.visualViewport?.addEventListener("scroll", viewport);
    window.addEventListener("resize", viewport);
    report(session, "Checking hosted player connection\u2026");
    session.readyTimer = window.setTimeout(() => report(session, "Player connection failed. Check internet access, the installed script version, and Safari content restrictions.", true), 2e4);
    exit.focus({ preventScroll: true });
  }
  async function boundedBytes(response, kind, signal) {
    const limit = DOWNLOAD_LIMITS[kind], declared = Number(response.headers.get("Content-Length"));
    if (declared > limit) {
      await response.body?.cancel();
      throw new Error(`Download exceeds the ${limit / 1024 / 1024} MB phone limit.`);
    }
    if (!response.body) {
      const bytes2 = await response.arrayBuffer();
      if (bytes2.byteLength > limit) throw new Error("Download exceeds the phone memory limit.");
      return bytes2;
    }
    const reader = response.body.getReader(), chunks = [];
    let length = 0;
    try {
      while (true) {
        signal.throwIfAborted();
        const item = await reader.read();
        if (item.done) break;
        length += item.value.byteLength;
        if (length > limit) throw new Error(`Download exceeds the ${limit / 1024 / 1024} MB phone limit.`);
        chunks.push(item.value);
      }
    } catch (error) {
      await reader.cancel().catch(() => {
      });
      throw error;
    } finally {
      reader.releaseLock();
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return bytes.buffer;
  }
  async function archiveFallback(session, url, signal) {
    if (typeof GM === "undefined" || typeof GM.xmlHttpRequest !== "function") throw new Error("Userscripts download API is unavailable. Reinstall using content injection.");
    report(session, "Testing alternate archive transport; Safari login access is not assumed\u2026");
    let exceeded = false, task;
    task = GM.xmlHttpRequest({ url: url.href, method: "GET", responseType: "arraybuffer", timeout: 9e4, onprogress: (event) => {
      if (event.loaded > DOWNLOAD_LIMITS.archive || event.total > DOWNLOAD_LIMITS.archive) {
        exceeded = true;
        task.abort();
      }
    } });
    const abort = () => task.abort();
    session.aborts.add(abort);
    signal.addEventListener("abort", abort, { once: true });
    if (signal.aborted) abort();
    try {
      const result = await task;
      if (exceeded) throw new Error("Archive exceeds the 32 MB phone limit.");
      if (result.status < 200 || result.status >= 300) throw new Error(`Alternate archive request failed (${result.status}); Safari login may not be available to this transport.`);
      if (!(result.response instanceof ArrayBuffer)) throw new Error("Alternate archive transport did not return binary data.");
      if (result.response.byteLength > DOWNLOAD_LIMITS.archive) throw new Error("Archive exceeds the 32 MB phone limit.");
      return result.response;
    } catch (error) {
      if (exceeded) throw new Error("Archive exceeds the 32 MB phone limit.");
      throw error;
    } finally {
      session.aborts.delete(abort);
      signal.removeEventListener("abort", abort);
    }
  }
  function verifyBytes(bytes, kind) {
    const prefix = new Uint8Array(bytes, 0, Math.min(bytes.byteLength, 128));
    if (kind === "archive" && (prefix[0] !== 80 || prefix[1] !== 75)) throw new Error("Archive download returned a page instead of an .osz file. Sign in to osu! and retry; automatic music loading has not succeeded.");
    if (kind !== "json" && /^\s*(?:<!doctype html|<html)/i.test(new TextDecoder().decode(prefix))) throw new Error("Download returned a login or error page instead of a file. Sign in to osu! and retry.");
  }
  async function fetchForViewer(session, request) {
    session.inflight++;
    const controller = new AbortController(), abort = () => controller.abort();
    session.aborts.add(abort);
    const timer = window.setTimeout(abort, 9e4);
    const reply = (data, transfer = []) => {
      if (active === session) session.frame.contentWindow?.postMessage({ source: "osu-browser-replay-host", type: "fetch-result", token: session.token, id: request.id, ...data }, playerUrl.origin, transfer);
    };
    try {
      const url = approvedDownload(request.url, request.kind);
      report(session, `Downloading ${request.kind} through your osu! session\u2026`);
      let bytes, contentType = "", response;
      try {
        response = await fetch(url.href, { credentials: "include", redirect: "follow", signal: controller.signal, headers: request.kind === "json" ? { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" } : { Accept: "*/*" } });
      } catch (error) {
        if (!(error instanceof TypeError) || request.kind !== "archive" || controller.signal.aborted || active !== session) throw error;
        bytes = await archiveFallback(session, url, controller.signal);
      }
      if (response) {
        if (!response.ok) throw new Error(response.status === 401 ? "Sign in to osu! and retry." : response.status === 429 ? "osu! download limit reached." : `Download failed (${response.status}).`);
        contentType = response.headers.get("Content-Type") ?? "";
        bytes = await boundedBytes(response, request.kind, controller.signal);
      }
      if (!bytes) throw new Error("Download transport returned no data.");
      verifyBytes(bytes, request.kind);
      controller.signal.throwIfAborted();
      reply({ ok: true, bytes, contentType }, [bytes]);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      report(session, `${request.kind} failed: ${message}`, true);
      reply({ ok: false, error: message });
    } finally {
      clearTimeout(timer);
      session.aborts.delete(abort);
      session.inflight--;
    }
  }
  window.addEventListener("message", (event) => {
    const session = active;
    if (!session || event.source !== session.frame.contentWindow || event.origin !== playerUrl.origin || !validEnvelope(event.data, session.token)) return;
    const message = event.data;
    if (message.type === "ready") {
      clearTimeout(session.readyTimer);
      report(session, "Player connected. Checking automatic downloads\u2026");
    } else if (message.type === "close") close();
    else if (message.type === "diagnostic" && typeof message.stage === "string" && typeof message.ok === "boolean") {
      const text = typeof message.message === "string" ? message.message.slice(0, 400) : "";
      report(session, message.ok ? message.stage === "audio" ? "Playing with audio." : message.stage === "assets" ? "Replay, map and music loaded. Tap Play." : `${message.stage} check passed${text ? `: ${text}` : ""}` : `${message.stage} failed${text ? `: ${text}` : ""}`, !message.ok);
    } else if (message.type === "fetch" && validFetch(message, session.token) && session.ids.claim(message.id)) {
      if (session.inflight >= 2) {
        session.frame.contentWindow?.postMessage({ source: "osu-browser-replay-host", type: "fetch-result", token: session.token, id: message.id, ok: false, error: "Too many simultaneous phone downloads. Retry after the current download completes." }, playerUrl.origin);
        return;
      }
      void fetchForViewer(session, message);
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && active) close();
  });
  function attachButtons() {
    for (const row of document.querySelectorAll(".play-detail")) {
      if (row.querySelector(".osu-browser-replay-button")) continue;
      const link = row.querySelector('.play-detail__bg-link[href*="/scores/"]'), score = link?.pathname.match(/^\/scores\/(?:osu\/)?([1-9]\d*)\/?$/)?.[1];
      if (!score) continue;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "osu-browser-replay-button";
      button.textContent = "\u25B6 Watch replay";
      button.setAttribute("aria-label", "Watch replay in browser");
      button.style.cssText = "position:relative;z-index:10;display:block;min-height:44px;min-width:132px;margin:6px 8px;padding:8px 14px;border:1px solid #ff78b6;border-radius:22px;background:#34252f;color:#ffadd3;font:14px system-ui;touch-action:manipulation;";
      button.addEventListener("pointerdown", (event) => event.stopPropagation());
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        open(score);
      });
      row.append(button);
    }
  }
  new MutationObserver(() => {
    clearTimeout(scanTimer);
    scanTimer = window.setTimeout(attachButtons, 80);
  }).observe(document.documentElement, { childList: true, subtree: true });
  attachButtons();
})();
