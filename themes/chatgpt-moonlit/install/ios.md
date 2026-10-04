# iPhone / iPad: Safari only
This themes ChatGPT in **Safari**. It cannot alter the native ChatGPT iOS app.

1. First set a real public HTTPS imageUrl in theme.config.json and run node scripts/build.mjs on Windows. The USERNAME URL is a placeholder and will not display your image.
2. Install [Userscripts for Safari](https://apps.apple.com/app/userscripts/id1463298887) or a compatible userscript extension. Open Userscripts and locate/set its scripts directory in Files.
3. Enable Userscripts under Settings > Apps > Safari > Extensions (older iOS: Settings > Safari > Extensions). Grant website access to chatgpt.com; allow it when Safari prompts.
4. Transfer **moonlit.user.js** to the extension's scripts directory via Files/iCloud Drive. It is an installation-ready identical copy of **ios-userscript.js**. If your extension has an editor/import action, paste/import ios-userscript.js there. Userscripts recognizes the **.user.js** suffix for direct file installation.
5. If you later host the script, open its raw .user.js URL in Safari, open the Userscripts extension popup, and accept its installation prompt.
6. Visit https://chatgpt.com/ in Safari, select Dark appearance, open the extension menu and verify Moonlit Mountain is enabled. Reload. Check the mountain, composer, sidebar, keyboard, landscape orientation and bottom safe area.

Updates: edit theme.css or the one imageUrl setting on Windows, rebuild, replace the file in the Userscripts directory, then reload Safari. CSS is embedded: no cross-origin fetch, external JS or automatic remote code updates. SPA navigation keeps the style; a lightweight head-only observer repairs a removed style. Re-running the script replaces its observer instead of creating duplicates.

If the mountain is absent, open the configured HTTPS image URL directly in Safari, check extension access and disable competing themes. If colors remain unchanged, check script activation. Restrictive page CSP or future UI markup changes may require a selector update. Disable the script for instant rollback.

Source: [Userscripts official installation instructions](https://github.com/quoid/userscripts/blob/main/README.md).

