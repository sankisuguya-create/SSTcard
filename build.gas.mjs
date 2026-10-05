// GAS(HtmlService)向けファイルを生成する。
// 使い方: node build.gas.mjs
// 生成物（Apps Scriptエディタに同名ファイルとして貼る）:
//   gas/index.html   … UI + 束ねたJS
//   gas/img.html     … window.SST_IMGS に全画像をdataURIで内蔵（校外依存なし）
//   gas/Code.gs      … doGet 配信 + include() ヘルパ
//   gas/appsscript.json
import {readFileSync,writeFileSync,mkdirSync,readdirSync} from 'fs';

const engine=readFileSync('dist/engine.mjs','utf8').replace(/^export /gm,'');
const app=readFileSync('dist/app.js','utf8')
 .replace(/^import \{[^}]+\} from '\.\/engine\.mjs';$/m,'');
const css=readFileSync('dist/style.css','utf8');
const html=readFileSync('dist/index.html','utf8');

let out=html
 .replace(/<link rel="stylesheet" href="[^"]*">/,`<style>\n${css}\n</style>\n<?!= include('img') ?>`)
 .replace(/<script type="module" src="[^"]*"><\/script>/,`<script type="module">\n${engine}\n${app}\n</script>`);
if(!out.includes('<style>')||!out.includes("include('img')"))throw new Error('bundle failed: placeholders not replaced');

// 全画像をdataURIマップに（img/xxx.webp → "data:image/webp;base64,..."）
const imgs={};
for(const f of readdirSync('dist/img')){
 if(!f.endsWith('.webp'))continue;
 imgs[f]='data:image/webp;base64,'+readFileSync('dist/img/'+f).toString('base64');
}
const imgHtml=`<script>window.SST_IMGS=${JSON.stringify(imgs)};</script>`;

mkdirSync('gas',{recursive:true});
writeFileSync('gas/index.html',out);
writeFileSync('gas/img.html',imgHtml);
writeFileSync('gas/Code.gs',
`function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('こころの作戦カード')
    .addMetaTag('viewport','width=device-width,initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
`);
writeFileSync('gas/appsscript.json',
`{
  "timeZone": "Asia/Tokyo",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "webapp": { "executeAs": "USER_DEPLOYING", "access": "ANYONE_ANONYMOUS" }
}
`);
console.log('gas/index.html:',Math.round(out.length/1024),'KB / gas/img.html:',Math.round(imgHtml.length/1024/1024*10)/10,'MB / images:',Object.keys(imgs).length);
