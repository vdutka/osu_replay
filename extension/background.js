"use strict";
(() => {
  // src/background.ts
  var pending = /* @__PURE__ */ new Map();
  var key = (tabId, beatmapsetId) => `${tabId}:${beatmapsetId}`;
  chrome.webRequest.onBeforeRedirect.addListener((details) => {
    const match = new URL(details.url).pathname.match(/^\/beatmapsets\/(\d+)\/download$/);
    if (!match) return;
    const item = pending.get(key(details.tabId, match[1]));
    if (!item || Date.now() - item.started > 3e4) return;
    item.url = details.redirectUrl;
  }, { urls: ["https://osu.ppy.sh/beatmapsets/*/download*"] });
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!/^(arm-archive|get-archive-redirect|clear-archive)$/.test(message?.type ?? "") || !/^[1-9]\d*$/.test(message.beatmapsetId)) return false;
    const tabId = sender.tab?.id;
    if (tabId === void 0) {
      sendResponse({ ok: false, error: "Could not identify the osu! profile tab." });
      return false;
    }
    const id = key(tabId, message.beatmapsetId);
    if (message.type === "clear-archive") {
      pending.delete(id);
      sendResponse({ ok: true });
      return false;
    }
    if (message.type === "arm-archive") {
      for (const [oldId, item2] of pending) if (Date.now() - item2.started > 3e4) pending.delete(oldId);
      pending.set(id, { started: Date.now() });
      sendResponse({ ok: true });
      return false;
    }
    const item = pending.get(id);
    pending.delete(id);
    if (!item?.url) {
      sendResponse({ ok: false, error: "osu! did not provide a beatmap mirror redirect. The download may be unavailable or limited." });
      return false;
    }
    let mirror;
    try {
      mirror = new URL(item.url);
    } catch {
      sendResponse({ ok: false, error: "osu! returned an invalid beatmap mirror URL." });
      return false;
    }
    if (mirror.protocol !== "https:" || mirror.origin === "https://osu.ppy.sh") {
      sendResponse({ ok: false, error: "osu! did not grant a beatmap archive download. Check your login or download limit." });
      return false;
    }
    sendResponse({ ok: true, mirrorUrl: mirror.toString(), permissionOrigin: mirror.origin });
    return false;
  });
})();
