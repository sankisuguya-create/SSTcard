# Scripts

このディレクトリは、他AIや別担当者がモックの作業を引き継ぐための補助スクリプト置き場です。

秘密情報やアクセストークンは含めていません。

## open-source.py

Sites の source repository credential JSON を標準入力から受け取り、既存のリモートソースをローカルに反映するためのスクリプトです。

入力は非表示になります。

用途:

```bash
python scripts/open-source.py
```

その後、credential JSON を貼り付けます。

## publish-source.py

Sites の source repository credential JSON を標準入力から受け取り、現在のローカルファイルをGitコミット・プッシュし、Sites用のtar.gzを作るスクリプトです。

入力は非表示になります。

用途:

```bash
python scripts/publish-source.py
```

出力されるJSONには以下が含まれます。

- `project_id`
- `commit_sha`
- `archive`

この値を使って、Sites のバージョン保存・private deployment を行います。

## revise-kokoro.py

前回の改善案を `dist/engine.mjs` に反映するための作業途中スクリプトです。

入れる予定だった要素:

- 場面ごとに手札を配り直す
- 「自分に問い直す」で仮の目的を設定する
- 仮の目的は正解ではなく、見直せる仮説として扱う
- 「話す」「立ち向かう」「逃げる」「考える」「愚痴る」「情報収集」のカード分類
- うまくいきにくいカードの追加

注意:

このスクリプトは `dist/engine.mjs` を大きく書き換えます。実行前に、元の `dist/engine.mjs` を退避してください。

```bash
cp dist/engine.mjs /tmp/kokoro-engine-before-revise.mjs
python scripts/revise-kokoro.py
node --check dist/engine.mjs
```

`node --check` が通らない場合は、生成された `dist/engine.mjs` の文字列改行や重複定義を確認してください。

## 推奨の引き継ぎ順

1. `MOCK_BRIEF_FOR_AI.md` を読む
2. `README.md` を読む
3. `node --check dist/engine.mjs` で現状確認
4. 必要なら `scripts/revise-kokoro.py` を修正してから実行
5. `node test.mjs`
6. `python -m http.server 4173 --directory dist`
7. Playwrightまたはブラウザで2ストーリーを最後まで確認
8. `scripts/publish-source.py` で公開準備

