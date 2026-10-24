# Privacy description

osu! Browser Replays reads visible score links on `osu.ppy.sh` user profiles and requests score data, replay files, beatmap archives, beatmap text and official beatmap cover images when a user presses Play. Cover images are read from `assets.ppy.sh`. Beatmap archives can be delivered by osu!'s chosen HTTPS mirror. The extension requests permission for that mirror before reading its file.

Replay and beatmap bytes are held in browser memory for the current tab and can be cleared with the viewer's **Clear cache** button. The selected background tint percentage is stored locally by the browser and applies to future replays. These values are not sent to our servers; this extension has no server, analytics, advertising or account database. The extension does not read or store account passwords or OAuth tokens.

## iPhone Userscripts prototype

The optional Userscripts build downloads a versioned player, workers, WebAssembly and skin from the project's static HTTPS host (by default GitHub Pages). This hosting provider receives normal asset requests; it is not a replay-processing backend. Replay and map data pass locally from the osu! tab to the player frame for browser-side processing. The script does not export login cookies or credentials. Authenticated requests first use the existing osu! session; an experimental archive-only Userscripts request fallback may not share that session. Its redirects use osu!'s selected download host. Enable only the site access required for osu! and any download origin Safari explicitly requests.

The prototype does not retain a download cache. Closing its overlay aborts downloads and releases the player; its cache action is unnecessary for imported data. The static player stores background dimming locally where Safari permits it. Diagnostics are displayed locally and are not uploaded. Real iPhone cookie, redirect, memory and audio behavior remains under verification.

The userscript starts across osu.ppy.sh so it can handle navigation into profiles without a full page load; score-link scanning and replay controls are restricted to profiles. An optional installation-check URL displays the running script version locally. No diagnostic report is sent automatically.
