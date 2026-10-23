# osu! Browser Replays

Watch osu!standard replays directly on osu! profile pages. This unofficial extension adds a pink play button beside profile scores and opens a replay player without launching the game.

**Version 1.0.0 · Chrome, Microsoft Edge and Opera GX · Manifest V3**

## Install

1. Choose **Code → Download ZIP** on this repository and extract it. Tagged versions are available from [Releases](https://github.com/vdutka/osu_replay/releases).
2. Open `chrome://extensions`, `edge://extensions` or `opera://extensions`.
3. Enable **Developer mode**, choose **Load unpacked**, and select the extracted **extension** folder containing `manifest.json`.
4. Sign in at [osu!](https://osu.ppy.sh), open a player's profile and **Records** section, then press the pink play button beside a score.

No build tools, Node.js, API key or server are needed. Keep the extracted folder in place. Chromium 114 or later is required; Firefox and Safari are not supported.

## Features

- In-page osu!standard playback with replay cursor, circles, sliders, spinners, hit feedback, key indicators and hitsounds.
- Score, accuracy, combo, hit totals, timing-error meter and local WebAssembly PP calculation.
- Stable and lazer replay parsing, supported replay mod settings, recorded clock rates, Hidden and Hard Rock rendering.
- Seeking, fullscreen, volume, remembered background dimming and **0.5×–3×** playback speed relative to the recorded rate.
- Auto-hiding player controls, beatmap backgrounds and a settings panel.
- Local **.osr** replay and matching **.osz** beatmap import. Lazer replays with embedded online score IDs can recover public score/map data when available.
- Browser-only processing: no backend, analytics or telemetry. Downloads stay in tab memory; **Clear cache** releases them.

## Controls

| Action | Control |
| --- | --- |
| Play / pause | Space, playback button or one playfield click |
| Seek | Timeline or left/right arrows (5 seconds) |
| Fullscreen | F or double-click the playfield |
| Speed, dimming, imports | Settings |
| Volume / mute | Bottom playback controls |
| Close | Close button beside the title |

## Limits and troubleshooting

Only **osu!standard** is supported. Intermediate judgement reconstruction and local/live PP can be estimates; they are not universally identical to the game. Recorded final totals and official online PP, when available, remain authoritative at completion. Unsupported settings or calculation failures can leave PP unavailable while playback continues. The bundled PP engine uses a pinned unreleased upstream 2026 update; see [engine provenance](extension/vendor/rosu-pp-js/PROVENANCE.md).

osu! may restrict replay downloads, require login, limit beatmap downloads or redirect archives to an HTTPS mirror. The extension can request permission for that mirror. If automatic loading fails, use local imports in Settings. The replay and map must match the exact difficulty. Playback using public map text alone may have no music. Authenticated automatic downloads have not been fully verified across all account/download conditions.

If buttons are missing, refresh the profile page. To update, download the new version, replace the installed extension files, press **Reload** on the extensions page and refresh osu!.

## Privacy and permissions

The extension accesses osu! profile/score data, replay and beatmap downloads, and official cover images for playback. `webRequest` supports redirect handling; optional HTTPS host access supports osu!-selected download mirrors. Background dimming is stored locally. Read [PRIVACY.md](PRIVACY.md).

## Releases and feedback

This repository contains the ready-to-load extension and user documentation. Development caches, personal replay fixtures, internal plans and full working logs are excluded. [CHANGELOG.md](CHANGELOG.md) records published versions only.

Report problems through [GitHub Issues](https://github.com/vdutka/osu_replay/issues), including extension/browser versions, score/map link, active mods and reproduction steps. Do not include credentials or private replay files.

## Credits and licensing

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), [skin attribution](THIRD_PARTY_SKIN.md), and bundled dependency licenses in `extension/licenses/`. No blanket license is granted over third-party artwork.

This project is unofficial and is not affiliated with osu! or ppy Pty Ltd.

