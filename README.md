# React + TypeScript (Webpack) — Minimal Template

最小構成の React + TypeScript + Webpack テンプレートです。学習・拡張の出発点として使えます。

## 前提
- Node.js 18 以上を推奨
- パッケージマネージャは `npm` を想定（`pnpm`/`yarn` でも可）

## セットアップ
```bash
npm install
```

## 開発サーバー起動（webpack-dev-server）
```bash
npm run dev
```
ブラウザで自動オープンされます（デフォルト: http://localhost:5173）。

## ビルド（本番）
```bash
npm run build
```
`dist/` に成果物が出力されます。ローカルで確認する場合:
```bash
npm run preview
```

## 構成
- `index.html`: ルート HTML（HtmlWebpackPlugin がスクリプトを注入）
- `src/main.tsx`: エントリーポイント（React ルート）
- `src/App.tsx`: サンプルコンポーネント
- `src/index.css`: 簡単なスタイル
- `webpack.config.cjs`: Webpack 設定
- `tsconfig.json`: TypeScript 設定

必要に応じて ESLint/Prettier、テスト環境（Jest/Vitest/RTL など）を追加してください。
