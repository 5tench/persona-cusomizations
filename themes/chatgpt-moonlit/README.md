# Moonlit Mountain for ChatGPT
Deep navy, translucent sidebar/composer, muted blue user messages, transparent assistant replies, readable code and solid menus. Desktop and mobile Safari share one source.

## Files and architecture
- theme.css: canonical CSS; edit palette, darkness, blur and message opacity here.
- theme.config.json: **imageUrl** is the ONE hosted-image setting.
- scripts/build.mjs: dependency-free Node builder; embeds CSS safely with JSON.stringify.
- stylus.css: generated desktop CSS to paste into Stylus.
- moonlit.user.css: identical desktop file with Stylus's installable suffix.
- ios-userscript.js: generated Safari injection script.
- moonlit.user.js: identical script with Userscripts' installable suffix.
- assets/moonlit_mountain_lake_panorama.png: unmodified image copy.
- install/desktop.md and install/ios.md: exact install/update instructions.
- .gitignore: local tooling/OS exclusions.
- VALIDATION.md: checks and practical verification limits.

## Install
Follow [desktop instructions](install/desktop.md) for Chrome/Edge + Stylus or [iOS instructions](install/ios.md) for Safari + Userscripts. The initial desktop output uses the temporary Windows file URL. iOS requires hosting; its placeholder deliberately uses HTTPS.

## One-value hosted switch
Change imageUrl in theme.config.json from:

    https://raw.githubusercontent.com/USERNAME/persona-cusomizations/main/themes/chatgpt-moonlit/assets/moonlit_mountain_lake_panorama.png

to your actual public raw image URL, then run:

    node scripts/build.mjs

Reinstall generated outputs on every device. Use node scripts/build.mjs --local only for temporary desktop testing. Do not edit generated files: rebuilding overwrites them. The token in theme.css is build-time only; install generated files rather than raw theme.css. Generated copies are committed for easy installation without Node on a phone. No remote push or hosting is performed.

## Readability and performance
Change --mm-darkness to increase/decrease image darkness, --mm-blur for glass, --mm-text for brightness, --mm-accent for blue, and the alpha in --mm-user for bubble opacity. Desktop blur touches only the sidebar and composer; mobile lowers blur and avoids fixed-background painting. Reduced motion/transparency and no-backdrop-filter fallback are included. Image is cover-cropped on narrow screens. Choose ChatGPT Dark appearance for consistent default surfaces and syntax highlighting.

Semantic message roles and specific composer/sidebar IDs avoid generated classes. ChatGPT design tokens provide conservative fallbacks. No blanket nav, form, main > div or content-substring clearing. Future ChatGPT changes may require adjusting exact shell selectors after browser inspection.

## Image provenance
The requested source path was missing. Two byte-identical copies were found; this project copied C:\Users\skully\Documents\moonlit_mountain_lake_panorama (1).png. SHA-256: 9D83FF925A845A904C0379288553CE22E1FF91696B97121F9A8CFFD4842EEB22. Both existing originals remain untouched.

