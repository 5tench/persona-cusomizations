# Validation

- Node syntax checks passed for scripts/build.mjs and ios-userscript.js.
- Headless installed Microsoft Edge parsed canonical CSS: 25 top-level rules, 31 total rules; DevTools CSS parser reported no syntax exceptions. All selectors were accepted by querySelectorAll.
- On an isolated mock HTTPS chatgpt.com page: double script injection retained exactly one style; simulated SPA navigation retained it; removal was repaired by the head observer.
- Computed styles confirmed translucent blue user messages, transparent assistant messages and opaque navy dialogs.
- A 390px viewport selected the 4px mobile blur.
- SHA-256 of the copied PNG matches both discovered originals: 9D83FF925A845A904C0379288553CE22E1FF91696B97121F9A8CFFD4842EEB22.
- Desktop output contains the exact valid file:///C:/Users/skully/Documents/chatgpt-moonlit-theme/assets/moonlit_mountain_lake_panorama.png URL and that file exists.
- iOS output has HTTPS chatgpt.com match metadata, document-start, grant none; no local file URL or unresolved build token.
- Stylus installation aliases and userscript aliases are byte-identical.
- Documentation reviewed against official Stylus and Userscripts installation documentation.

Limits: no signed-in live ChatGPT visual verification or actual iOS device test was performed. Mock fixtures validate syntax and behavior, not current ChatGPT DOM coverage, image CSP, Safari rendering or GPU smoothness. The hosted image URL is intentionally a placeholder; hosting and installation remain user steps. A local background can still be blocked by browser security even with Stylus file access. Follow the guides' visual smoke checks after installation.
