# crossrel-official-site

公式サイト（Astro + Tailwind）リポジトリです。開発者向けの詳細なガイドは `AGENTS.md` を参照してください。

## 必要要件
- Node `22.14.0`（`.node-version` 準拠）
- パッケージマネージャ: `pnpm`

## よく使うコマンド
- `pnpm dev` 開発サーバー起動（HMR）
- `pnpm build` 本番ビルドを `dist/` に生成
- `pnpm preview` 生成物のローカルプレビュー
- `pnpm astro check` Astro/TypeScript の型・診断チェック

## プロジェクト構成（抜粋）
- `src/pages/` ルーティング（`index.astro`, `events.astro` など）
- `src/features/` 機能/ページ単位のレイアウト・部品
- `src/components/` 共有コンポーネント
- `src/libs/` 便利関数（フォーマッタ等）
- `src/content/` コンテンツコレクション（events/staff/sponsors）
- `public/` 静的ファイル

## 開発の流れ（推奨）
1. ブランチ作成 → 変更 → `pnpm astro check` で診断
2. `pnpm dev` で見た目確認（PC/モバイル）
3. `pnpm build` が警告/エラーなく完了することを確認
4. PR 作成（スクリーンショット/概要/関連Issue を添付）
