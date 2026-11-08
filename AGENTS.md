# AGENTS.md

## 项目定位
- 纯静态单页个人主页，基于 HTML5 UP「Dimension」模板；无构建、无后端、无依赖安装。
- 页面由首屏 + `#intro` / `#work` / `#about` / `#contact` 四个弹层文章组成。
- `previous/` 为旧版存档，不作为当前视觉参考，不修改。
- 保持模板结构、视觉与交互。内容只改 `index.html`；不改 `assets/css/main.css`、`assets/js/main.js`。不可避免的微调写在 `index.html` 的 `<style>` 内。
- 保留 HTML5 UP 署名、`LICENSE.txt` 与 Font Awesome / jQuery 等模板依赖。

## 视觉规范
- 关键词：深色单色、极简、半透明、细白线框、宽字距、强留白、居中。
- 色板：
  - 底色/文章底：`#1b1f22`
  - 文字/描边：`#ffffff`
  - 文章半透明层：`rgba(27, 31, 34, 0.85)`
  - Hover / Active：`rgba(255, 255, 255, 0.075)` / `rgba(255, 255, 255, 0.175)`
  - 图片与背景遮罩：`rgba(19, 21, 25, 0.5)`
  - 次级文字：`rgba(255, 255, 255, 0.5)`
- 背景：`images/bg.jpg` + `images/overlay.png` 固定铺满；文章打开时背景放大至 `scale(1.0825)` 并 `blur(0.2rem)`。
- 字体：Source Sans Pro 300（正文）/ 600（标题），fallback sans-serif；中文走系统无衬线回退，不新增字体。
- 字号：根字号 16pt；≤1680px 为 12pt，≤736px 为 11pt，≤360px 为 10pt。
- 正文：1rem / 1.65 / 300；标题：600、uppercase、letter-spacing `.2rem`；h1 `2.25rem/.5rem`，h2 `1.5rem/.5rem`。
- 小标签：`.8rem`，uppercase，letter-spacing `.2rem`；页脚 `.6rem`、75% 不透明度。
- 圆角 4px（文章、图片、导航、按钮、输入框）；logo 为 1px 白色圆框。
- 文章：宽 40rem、max-width 100%；内边距 `4.5rem 2.5rem 1.5rem`；移动端 `3.5rem 2rem .5rem` / `3rem 1.5rem .5rem`。
- 标题 `.major`：底部 1px 白线，宽度 max-content，下边距 2rem。
- 导航：4 项，共用 1px 白框、4px 圆角，项高 2.75rem；`use-middle` 中线布局不得破坏。
- 按钮：透明底 + 1px 白色 inset 描边，4px 圆角，uppercase，`.8rem`，字距 `.2rem`，高 2.75rem；hover/active 用上方白色透明层。
- 图片：4px 圆角 + `image:before` 半透明遮罩；正文主图 960×320；占位图统一放 `images/`。
- 引用：左侧 4px 白色实线，斜体。

## 动效
- 只用模板自带动效，不新增滚动入场、弹跳或彩色效果。
- 弹层：`.325s ease-in-out` 透明度/位移；内容展开 `.75s`；链接/按钮/导航 `.2s`。
- 必须保留 `is-preload`、`is-article-visible`、`is-switching`、`.active` 状态及背景缩放/模糊的景深效果。

## 交互
- hash 驱动：点击导航打开对应文章；支持直接访问 `#about` 等。
- 关闭方式：右上 X、点击文章外部、`Esc`；不得破坏 `history`、滚动恢复和 `is-article-visible` 状态。
- 保留 4 个导航项与 `#intro/#work/#about/#contact` 的 ID。
- 不把文章改为常驻显示；`#main` 初始隐藏由 `main.js` 控制。

## 内容
- 中文、第一人称、克制，不写营销套话。
- 只使用用户提供的个人信息；缺失信息统一写「待补充」，不编造作品、联系方式、图片、经历。
- 当前作品、联系方式、文章图片为「待补充」；以后补齐时只替换占位内容，不改模板结构。
- 保持导航文案：简介 / 作品 / 关于 / 联系。
- 修改个人信息时同步更新 `<title>`、description、OG/Twitter meta。
- 页脚保留「Design: HTML5 UP」。

## 响应式与验证
- 断点：≤360 / 361–480 / 481–736 / 737–980 / 981–1280 / 1281–1680 / >1680；≤980 隐藏首屏 `<br>`，≤736 导航转纵向。
- 至少验证 320、390、768、1440 宽度；确保无横向滚动。
- 验证四项：弹层打开、X 关闭、点击外部关闭、Esc/直接 hash 打开；控制台无报错、图片可加载。

## 文件
- `index.html`：全部可见文案、meta、页内微调。
- `assets/css/main.css`：已编译模板样式，避免直接修改；`assets/sass/` 为源文件。
- `assets/js/main.js`：弹层与 hash 交互，避免修改。
- `images/`：背景、遮罩、`*-pending.svg` 占位图。
- `previous/`：旧版存档，不改。
