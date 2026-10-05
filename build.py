#!/usr/bin/env python3
"""dist/ 以下を1ファイルの standalone.html に束ねる。
校務PCなど開発サーバーを立てられない環境で、ファイルをダブルクリックして file:// で遊ぶ用。
app.js は ES module のため file:// では動かないので、engine.mjs/app.js/img を単一HTMLへインラインする。"""
import base64
import json
import pathlib

D = pathlib.Path(__file__).parent / 'dist'

engine = (D / 'engine.mjs').read_text()
app = (D / 'app.js').read_text()

# engine: 先頭の export を剥がしてグローバル定義化
assert 'export ' in engine
engine = engine.replace('export ', '')

# app: 1行目の import 文を除去
first, app = app.split('\n', 1)
assert first.startswith('import ') and 'engine.mjs' in first, first

# dist/img/* を window.SST_IMGS に base64 で埋め込む（app.js の IMG() が参照）
imgs = {
    p.name: 'data:image/webp;base64,' + base64.b64encode(p.read_bytes()).decode()
    for p in sorted((D / 'img').glob('*'))
    if p.is_file()
}
blob = 'window.SST_IMGS=' + json.dumps(imgs, ensure_ascii=False) + ';\n'

html = (D / 'index.html').read_text()
html = html.replace(
    '<link rel="stylesheet" href="style.css">',
    '<style>\n' + (D / 'style.css').read_text() + '\n</style>'
)
html = html.replace('<script type="module" src="app.js"></script>', '')
html = html.replace(
    '</body>',
    '<script>\n' + blob + engine + '\n' + app + '\n</script>\n</body>'
)
assert 'src="app.js"' not in html and 'href="style.css"' not in html and 'SST_IMGS' in html

out = D / 'standalone.html'
out.write_text(html)
print(f'{out} ({out.stat().st_size // 1024}KB, {len(imgs)} images)')
