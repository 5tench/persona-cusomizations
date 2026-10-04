# Desktop: Chrome / Edge / Brave + Stylus
1. Install **Stylus** using the store links in its [official repository](https://github.com/openstyles/stylus). Pin its toolbar icon.
2. Open https://chatgpt.com/ and choose Dark in ChatGPT Settings > General > Appearance (the label may vary).
3. Open Stylus > Manage > Write new style. Enable **UserCSS** if offered, paste all of **stylus.css**, name it Moonlit Mountain, and Save. Its Mozilla domain wrapper limits it to HTTPS chatgpt.com.
4. Alternatively open **moonlit.user.css** with Ctrl+O and use Stylus's Install style button. These two files contain identical CSS; install only one.
5. For local-file import: open chrome://extensions/ (Chrome) or edge://extensions/ (Edge), find Stylus > Details, and enable **Allow access to file URLs**. You can also right-click Stylus > Manage extension.
6. Reload ChatGPT. The current build uses the repository-hosted HTTPS image. Optional temporary local Windows URL:
   file:///C:/Users/skully/Documents/persona-cusomizations/themes/chatgpt-moonlit/assets/moonlit_mountain_lake_panorama.png

Important: file access allows Stylus to read local style files; it does not guarantee an HTTPS webpage can load a file:// background. Chromium security or page CSP may still block the image. If the glass/colors work but mountains do not, use the hosted HTTPS build below. Do not disable browser security.

## Switch to HTTPS (also required on Linux and other devices)
Put the asset in your public GitHub repository (this project never pushes it). Edit only **imageUrl** in theme.config.json to the real raw HTTPS image URL. In PowerShell:

    cd C:\Users\skully\Documents\persona-cusomizations\themes\chatgpt-moonlit
    node scripts/build.mjs

Replace the installed Stylus code with the newly generated stylus.css, or reinstall moonlit.user.css. Reinstall the iOS script too. Verify the image URL displays an image without login on each device. Other HTTPS image hosts work as well.

To return temporarily to local Windows mode: node scripts/build.mjs --local. iOS always receives the HTTPS URL.

## Troubleshooting and updates
Disable other themes first. Check sidebar, composer, messages, code, menus, settings, uploads, search and mobile layout. ChatGPT markup can change: update the narrow selectors in theme.css and rebuild. No theme can guarantee future DOM compatibility. If an opaque ancestor hides the image, inspect that exact shell and add a specific selector; do not clear all divs/forms/navs. Disable the style to restore ChatGPT immediately.

Source: [Stylus UserCSS installation and local-file access](https://github.com/openstyles/stylus/wiki/Writing-UserCSS).


## Direct hosted installer
After installing Stylus, open https://raw.githubusercontent.com/5tench/persona-cusomizations/main/themes/chatgpt-moonlit/moonlit.user.css and click Install style. This works in Brave as well as Chrome and Edge; no local file access is required.
