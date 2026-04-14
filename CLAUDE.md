# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## スタック

- Astro 5 + Tailwind CSS v4 + TypeScript の静的サイト
- パッケージマネージャ: **pnpm**（`packageManager: pnpm@10.18.0`）。npm/yarn は使わない
- Node: `22.14.0`（`.node-version`）

## 開発コマンド

- `pnpm dev` 開発サーバー
- `pnpm build` 本番ビルド → `dist/`
- `pnpm preview` ビルド結果のローカルプレビュー
- `pnpm astro check` Astro/TS の型・診断チェック（**package.json の scripts には無い**、直接サブコマンド呼び出し）

## 重要な構成上の注意

- **Tailwind v4 は `@tailwindcss/vite` プラグイン経由** で適用している（`astro.config.mjs` の `vite.plugins`）。レガシーの `@astrojs/tailwind` は使わない。`tailwind.config.*` も無く、テーマは CSS 側（`@theme` 等）で設定する
- **画像は `passthroughImageService()`** を使用しており Astro の自動最適化は行わない。画像は投入前に手動最適化すること
- **PartyTown** が GA 用に `dataLayer.push` と `gtag` をフォワード。3rd party スクリプト追加時は `type="text/partytown"` の付与を検討
- `src/features/` は Cursor ルールに無いがこのリポ特有で、ページ単位のレイアウト/部品を置く場所
- コンテンツコレクション（`src/content.config.ts`）は Zod スキーマで検証される。`events` は `date`/`target` (`designer`|`engineer`|`all`)/`thumbnail` 必須、`staff` は `number`/`profile` 必須、`sponsors` は `thumbnail`/`url`/`name` 必須

## コードスタイル

- Prettier: `singleQuote: true`, `printWidth: 100`, `prettier-plugin-astro` 有効。ESLint/Biome は未導入
- `.cursorrules` に `@apply` 禁止の記述あり（Tailwind v4 でも踏襲）

## ワークフロー

1. ブランチ作成 → 変更 → `pnpm astro check` で診断
2. `pnpm dev` で見た目確認（PC/モバイル）
3. `pnpm build` がエラーなく完了することを確認
4. コミットは **Conventional Commits 形式の日本語 1 行**（例: `feat: イベントページにタイトル追加`）
5. PR にはスクリーンショット/概要/関連 Issue を添付

## その他

- デプロイ先: `https://crossrel.jp/`（`astro.config.mjs` の `site`）
- CI ワークフロー（`.github/workflows/`）は `.gitkeep` のみで未設定

## Personality Traits and Quirks

- Always add "ヤー" at the end of every response
