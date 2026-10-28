# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 工具链

- 使用 Bun 1.3.13（`packageManager` 固定）；不要用 npm/pnpm/yarn 安装依赖。
- Node 必须满足 `^22.18.0 || ^24.11.0 || >=26.0.0`（tsup 9 的要求）。
- TypeScript 固定 6.x。不要升级到 7：TS 7 不再提供编译器 API，tsup 的 dts 生成会失败。
- 依赖源是 npmmirror，`bun.lock` 记录的是镜像地址；不要手改锁文件，用 `bun install` 重新生成。

## 命令

- `bun install`；CI 使用 `bun install --frozen-lockfile`。
- `bun run typecheck` / `bun run lint` / `bun run fmt:check` / `bun run build` / `bun run test`。
- 运行单个测试文件：`bun run test -- src/index.test.ts`。
- 完成任务前默认运行完整校验：typecheck、lint、fmt:check、build、test（覆盖率阈值 80%）。
- 格式化失败先跑 `bun run fmt`；不要用 `--no-verify` 绕过钩子。

## 约定

- 直接提交到 master；提交信息遵循 Conventional Commits（commitlint 校验）。
- oxfmt 负责格式化与导入、package.json 脚本排序，不要手工调整顺序。
- `@murph/core` 必须留在 devDependencies（workspace），tsup 才会把它打进 dist；移到 dependencies 会被外部化，发布后无法解析。
- 版本号在构建时被打进产物，改版本后需重新 `bun run build`。
- NPM 发布使用 `npm publish` + OIDC，不要改成 `bun publish`。

## 发布流程

- Release Please 根据 master 上的提交生成发布 PR；合并后且 `release_created` 为真时才触发 `publish.yml`。
