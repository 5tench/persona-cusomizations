import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const config=JSON.parse(fs.readFileSync(path.join(root,'theme.config.json'),'utf8'));
const image=new URL(config.imageUrl);
if(image.protocol!=='https:' || /["\\\n\r]/.test(config.imageUrl)) throw new Error('imageUrl must be a safe HTTPS URL');
const source=fs.readFileSync(path.join(root,'theme.css'),'utf8');
if(source.split('__MOONLIT_IMAGE_URL__').length!==2) throw new Error('Expected one image placeholder');
const hosted=source.replace('__MOONLIT_IMAGE_URL__',config.imageUrl);
const local=new URL('../assets/moonlit_mountain_lake_panorama.png',import.meta.url).href;
const desktop=source.replace('__MOONLIT_IMAGE_URL__',process.argv.includes('--local')?local:config.imageUrl);
const stylus='/* ==UserStyle==\n@name Moonlit Mountain ChatGPT\n@namespace moonlit-mountain.local\n@version 1.0.0\n@description Understated moonlit glass theme for ChatGPT\n==/UserStyle== */\n/* Generated; edit theme.css. --local uses a TEMPORARY file URL. */\n@-moz-document url-prefix("https://chatgpt.com/") {\n'+desktop+'\n}\n';
fs.writeFileSync(path.join(root,'stylus.css'),stylus);
fs.writeFileSync(path.join(root,'moonlit.user.css'),stylus);
const script='// ==UserScript==\n// @name Moonlit Mountain ChatGPT\n// @namespace moonlit-mountain.local\n// @version 1.0.0\n// @description Moonlit Mountain CSS, generated from theme.css\n// @match https://chatgpt.com/*\n// @run-at document-start\n// @grant none\n// ==/UserScript==\n'+
'(() => {\n  "use strict";\n  if (location.hostname !== "chatgpt.com" || location.protocol !== "https:") return;\n  const id = "moonlit-mountain-theme";\n  const css = '+JSON.stringify(hosted)+';\n'+
'  function ensureStyle() {\n    if (!document.head) return;\n    let style = document.getElementById(id);\n    if (!style) { style = document.createElement("style"); style.id = id; document.head.appendChild(style); }\n    if (style.textContent !== css) style.textContent = css;\n  }\n'+
'  // Observe only head children. Chat body/streaming changes need no work.\n  function start() {\n    ensureStyle();\n    const key = "__moonlitMountainObserver";\n    if (window[key]) window[key].disconnect();\n    const observer = new MutationObserver(ensureStyle);\n    observer.observe(document.head, {childList: true});\n    window[key] = observer;\n  }\n'+
'  if (document.head) start();\n  else {\n    const boot = new MutationObserver(() => { if (document.head) { boot.disconnect(); start(); } });\n    boot.observe(document.documentElement || document, {childList: true, subtree: true});\n  }\n})();\n';
fs.writeFileSync(path.join(root,'ios-userscript.js'),script);
fs.writeFileSync(path.join(root,'moonlit.user.js'),script);
console.log('Built Stylus and iOS from theme.css. Desktop image:',process.argv.includes('--local')?local:config.imageUrl);

