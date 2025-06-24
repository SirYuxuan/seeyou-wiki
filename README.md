# 致远互联 V8 操作手册

本项目基于 [Docusaurus 2](https://docusaurus.io/) 构建，旨在为致远互联 V8 平台用户和开发者提供全面、系统的操作手册与知识库。

### 安装依赖

```bash
yarn
```

### 本地开发

```bash
yarn start
```

此命令将启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，无需重启服务器。

### 构建

```bash
yarn build
```

此命令将静态内容生成到 `build` 目录中，可以使用任何静态内容托管服务进行部署。

### 部署

```bash
GIT_USER=<你的GitHub用户名> USE_SSH=true yarn deploy
```

如果你使用 GitHub Pages 进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式。

## 目录结构

- `docs/` - 文档内容
- `src/` - 自定义组件与页面
- `static/` - 静态资源

## 贡献指南

欢迎提交 Issue 或 PR 参与完善文档。
