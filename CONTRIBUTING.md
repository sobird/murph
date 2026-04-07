# 贡献指南

感谢您考虑为 @sobird/murph 做出贡献！这份文档将帮助您了解如何参与项目。

## 🚀 快速开始

### 设置开发环境

1. Fork 项目到您的 GitHub 账户
2. 克隆您的 fork：

```bash
git clone https://github.com/YOUR-USERNAME/murph.git
cd murph
```

3. 安装依赖：

```bash
pnpm install
```

4. 创建特性分支：

```bash
git checkout -b feat/your-feature-name
```

## 📝 提交规范

本项目严格遵循 [约定式提交](https://www.conventionalcommits.org/) 规范。

### 提交类型

- `feat`: 新功能（会触发 minor 版本号升级）
- `fix`: Bug 修复（会触发 patch 版本号升级）
- `docs`: 文档更新
- `style`: 代码样式调整（不影响功能，如格式化）
- `refactor`: 重构代码（不添加新功能也不修复 bug）
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具的变动
- `perf`: 性能优化
- `ci`: CI/CD 配置文件的变动

### 提交格式

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 示例

```bash
feat: 添加新的配置文件生成器

BREAKING CHANGE: 移除了旧的配置文件模板

Closes #123
```

## 🧪 测试

### 运行测试

```bash
pnpm test
```

### 编写测试

在 `src` 目录下创建测试文件，使用 Vitest：

```typescript
// src/example.test.ts
import { expect, test } from 'vitest';

test('example test', () => {
  expect(1 + 1).toBe(2);
});
```

## 🔧 代码质量

### 代码检查

在提交前请确保代码通过检查：

```bash
# 运行所有检查
pnpm lint

# 自动修复问题
pnpm lint:fix

# TypeScript 类型检查
pnpm typecheck
```

### Git Hooks

项目配置了 Husky Git hooks：

- **pre-commit**: 运行 ESLint 修复
- **commit-msg**: 验证提交信息格式

## 📦 发布流程

### 版本管理

项目使用 Release Please 自动生成版本号和变更日志：

1. 合并 PR 到 `master` 分支
2. Release Please 会自动创建发布 PR
3. 审查发布 PR
4. 合并发布 PR
5. GitHub Actions 自动发布到 NPM

### 手动发布

如果需要手动控制版本，可以：

```bash
# 创建发布 PR
npx release-please --release-as major|minor|patch

# 或直接指定版本
npx release-please --release-as 1.2.3
```

## 🐛 Bug 报告

如果您发现了 bug，请在 GitHub Issues 中报告。请包含：

1. 清晰的问题描述
2. 复现步骤
3. 期望的行为
4. 实际的行为
5. 相关截图（如有）
6. 系统环境信息

## 💡 功能建议

对于新功能建议，请使用 Feature Request 模板，详细描述：

1. 问题的背景
2. 期望的功能
3. 可能的解决方案
4. 其他相关信息

## 🎯 开发原则

- **保持简洁**: 只添加必要的功能
- **向后兼容**: 尽量不破坏现有 API
- **文档优先**: 任何公共 API 都需要文档
- **测试驱动**: 重要功能必须有测试覆盖

## 🤝 行为准则

请参与本项目的每个人都遵守我们的行为准则。通过参与，您就承诺尊重所有人。

## 📄 许可证

通过向本仓库提交，您同意您的贡献将根据项目中指定的 [MIT License](./LICENSE) 进行许可。

---

如有疑问，请随时联系项目维护者或在 Issue 中提问！
