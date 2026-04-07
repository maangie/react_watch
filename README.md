# React Watch

React と Vite で動くシンプルな時計アプリです。画面上に現在日時を表示します。

## 必要環境

- Node.js
- Yarn

## セットアップ

```bash
yarn install
```

## 開発コマンド

### 開発サーバーを起動する

```bash
yarn dev
```

通常は `http://localhost:5173` で確認できます。

### テストを実行する

```bash
yarn test
```

ウォッチモードで実行する場合:

```bash
yarn test:watch
```

### 本番ビルドを作成する

```bash
yarn build
```

生成物は `dist/` に出力されます。

### 本番ビルドをローカル確認する

```bash
yarn preview
```

## 主な構成

- `src/App.jsx`: アプリ全体のレイアウト
- `src/Timer.jsx`: 日時表示コンポーネント
- `src/index.jsx`: エントリポイント
- `src/App.test.jsx`: App コンポーネントのテスト
- `src/Timer.test.jsx`: Timer コンポーネントのテスト（レンダリング・表示・時刻更新）
- `public/`: favicon や manifest などの静的ファイル

## 補足

- ビルドツールは Create React App ではなく Vite を使用しています。
- テストは Vitest + jsdom で実行します。
