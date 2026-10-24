# Pinned 2026 PP engine

This is an MIT-licensed browser WebAssembly build, not the published
rosu-pp-js 4.0.1 binary. No original osu! executable or private game data is used.

- Engine: [MaxOhn/rosu-pp `072ed255fa043aba495212c441030dc7a5e61469`](https://github.com/MaxOhn/rosu-pp/tree/072ed255fa043aba495212c441030dc7a5e61469), upstream `pp-update` branch, including the 2026 osu!standard changes. This branch is unreleased.
- Wrapper: [MaxOhn/rosu-pp-js `62a9e765636a70eddd799596ccdb9475fbcd31d6`](https://github.com/MaxOhn/rosu-pp-js/tree/62a9e765636a70eddd799596ccdb9475fbcd31d6), adapted from its 4.0.1 API.
- Local wrapper adapters: `scripts/pp-engine/wrapper/` exposes reading and new difficulty/performance fields, preserves stable legacy-score attributes through the JS boundary, and updates strain mapping. The pinned Cargo.lock fixes transitive versions. No performance formula is fitted to this project's scores.
- Toolchain: Rust 1.90.0 (`1159e78c4`), target `wasm32-unknown-unknown`; wasm-bindgen 0.2.100, `--target web`. Release settings: LTO, panic abort, one codegen unit, stripped. Windows build used the GNU toolchain with w64devkit; ASCII build/toolchain paths avoid linker encoding failures.
- Built and verified on 2026-10-23. Shipped file SHA-256 values are in `checksums.json`.

The independent oracle is upstream's `tests/data/ext_refs.rs` and
`ext_acc_refs.rs`, copied with `scripts/pp-engine/extract-references.mjs`.
`tests/pp-reference.test.ts` compares the shipped WASM against all 252 C# outputs
(18 beatmaps × 7 mod combinations × perfect/imperfect scores), including PP
components and exposed difficulty attributes. Tolerance: 1e-6 absolute or 1e-10
relative for large legacy-score attributes. These outputs are not regenerated
from this binary. References verify formula parity on that corpus, not arbitrary
replay reconstruction or future server revisions.

Ordinary `npm install`, `npm run build`, and packaging use these vendored files;
no Rust installation, build service, or runtime network fetch is needed.

To rebuild, install/provide Rust 1.90.0 with the WASM target, wasm-bindgen
0.2.100, and a compatible Windows GNU linker. Run
`scripts/pp-engine/rebuild.ps1 -BuildRoot <ASCII build folder> -ToolchainRoot <Rust toolchain folder> -Bindgen <wasm-bindgen.exe>`.
The defaults reuse the task-local tools from this build. The script downloads
SHA-256-pinned upstream archives, overlays the checked-in adapter sources, builds
with `--locked`, and writes `.cache/pp-engine-rebuilt`. `-Install` explicitly
copies the rebuilt wrapper/WASM into this folder. Review updated checksums and
run unit/reference and packaged-browser tests before accepting rebuilt outputs.
The rebuild script was exercised successfully. A different build directory can
change embedded paths and the binary hash; it is not a bit-for-bit reproducible
build. To test a rebuilt binary without replacing the shipped one, set
`PP_ENGINE_WASM` to its absolute path and run
`npx tsx --test tests/pp-reference.test.ts`. The rebuilt output also passed all
252 independent reference cases.
