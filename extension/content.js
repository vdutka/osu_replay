"use strict";
(() => {
  // src/content.ts
  var extensionOrigin = new URL(chrome.runtime.getURL("/")).origin;
  var cache = /* @__PURE__ */ new Map();
  var overlay = null;
  var frame = null;
  var previousFocus = null;
  var debounce;
  function scoreId(row) {
    const link = row.querySelector('.play-detail__bg-link[href*="/scores/"]');
    const id = link?.pathname.match(/\/scores\/(?:osu\/)?(\d+)(?:\/)?$/)?.[1];
    return id ?? null;
  }
  function openViewer(id) {
    if (overlay) overlay.remove();
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    overlay = document.createElement("div");
    overlay.id = "osu-browser-replay-overlay";
    Object.assign(overlay.style, { position: "fixed", inset: "0", zIndex: "2147483647", background: "rgba(0,0,0,.82)", display: "grid", placeItems: "center", padding: "min(3vw,24px)" });
    frame = document.createElement("iframe");
    frame.src = chrome.runtime.getURL(`viewer.html?score=${encodeURIComponent(id)}`);
    frame.title = "osu! replay viewer";
    frame.setAttribute("allow", "fullscreen");
    Object.assign(frame.style, { border: "1px solid #8d5576", borderRadius: "12px", boxShadow: "0 24px 90px #000", width: "min(1200px,100%)", height: "min(850px,100%)", background: "#18141c" });
    overlay.append(frame);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeViewer();
    });
    document.body.append(overlay);
    document.documentElement.style.setProperty("--osu-browser-replay-open", "1");
  }
  function closeViewer() {
    overlay?.remove();
    overlay = null;
    frame = null;
    document.documentElement.style.removeProperty("--osu-browser-replay-open");
    previousFocus?.focus();
  }
  function attachButtons() {
    for (const row of document.querySelectorAll(".play-detail")) {
      const id = scoreId(row);
      if (!id || row.querySelector(".osu-browser-replay-button")) continue;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "osu-browser-replay-button";
      button.textContent = "\u25B6";
      button.setAttribute("aria-label", "Watch replay in browser");
      button.title = "Watch replay in browser";
      Object.assign(button.style, { position: "absolute", left: "6px", top: "50%", transform: "translateY(-50%)", width: "28px", height: "28px", zIndex: "10", border: "1px solid #ff78b6", borderRadius: "50%", background: "#34252f", color: "#ff91c4", cursor: "pointer", fontSize: "12px", lineHeight: "24px", textAlign: "center", padding: "0" });
      row.style.position = "relative";
      row.style.paddingLeft = "36px";
      button.addEventListener("pointerdown", (e) => e.stopPropagation());
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openViewer(id);
      });
      row.insertBefore(button, row.firstChild);
    }
  }
  function scheduleScan() {
    window.clearTimeout(debounce);
    debounce = window.setTimeout(attachButtons, 80);
  }
  async function fetchForViewer(request) {
    if (!frame || !request.url || !request.kind || typeof request.id !== "number") return;
    const id = request.id;
    try {
      const url = new URL(request.url, location.origin);
      if (url.origin !== location.origin) throw new Error("Only osu! website URLs are allowed.");
      if (!(/^\/scores\/\d+(?:\/download)?$/.test(url.pathname) || /^\/beatmapsets\/\d+\/download$/.test(url.pathname) || /^\/osu\/\d+$/.test(url.pathname))) throw new Error("Unsupported download URL.");
      const key = url.toString();
      let bytes = cache.get(key);
      let contentType = "";
      if (!bytes) {
        const response = await fetch(url.toString(), { credentials: "include", redirect: request.kind === "archive" ? "manual" : "follow", headers: { Accept: request.kind === "json" ? "application/json" : "*/*", "X-Requested-With": "XMLHttpRequest" } });
        if (request.kind === "archive" && response.type === "opaqueredirect") throw new Error("osu! redirected this beatmap download to a mirror.");
        contentType = response.headers.get("Content-Type") ?? "";
        if (!response.ok) throw new Error(response.status === 401 ? "Please sign in to osu! and retry." : response.status === 404 ? "Replay or beatmap is unavailable." : response.status === 429 ? "osu! download limit reached." : `Download failed (${response.status}).`);
        bytes = await response.arrayBuffer();
        const max = request.kind === "archive" ? 150 * 1024 * 1024 : request.kind === "replay" ? 20 * 1024 * 1024 : 5 * 1024 * 1024;
        if (bytes.byteLength > max) throw new Error("Downloaded file is too large.");
        if (request.kind !== "json" && (/text\/html/.test(contentType) || new TextDecoder().decode(bytes.slice(0, 80)).toLowerCase().includes("<!doctype html"))) throw new Error("osu! returned a web page instead of a file. Please sign in.");
        cache.set(key, bytes);
        while (cache.size > 3 || [...cache.values()].reduce((sum, item) => sum + item.byteLength, 0) > 200 * 1024 * 1024) cache.delete(cache.keys().next().value);
      }
      const copy = bytes.slice(0);
      frame?.contentWindow?.postMessage({ source: "osu-browser-replay-host", type: "fetch-result", id, ok: true, bytes: copy, contentType }, extensionOrigin, [copy]);
    } catch (error) {
      frame?.contentWindow?.postMessage({ source: "osu-browser-replay-host", type: "fetch-result", id, ok: false, error: error instanceof Error ? error.message : String(error) }, extensionOrigin);
    }
  }
  window.addEventListener("message", (event) => {
    if (event.source !== frame?.contentWindow || event.origin !== extensionOrigin) return;
    const message = event.data;
    if (message?.source !== "osu-browser-replay") return;
    if (message.type === "close") closeViewer();
    else if (message.type === "clear-cache") cache.clear();
    else if (message.type === "fetch") void fetchForViewer(message);
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay) closeViewer();
  }, true);
  new MutationObserver(scheduleScan).observe(document.documentElement, { childList: true, subtree: true });
  attachButtons();
})();
