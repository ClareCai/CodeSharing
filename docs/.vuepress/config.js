import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/CodeSharing/",
  lang: "zh-CN",
  title: "CaiCai 的分享库",
  description: "这是我的一个 代码分享 站点",
  theme: defaultTheme({
    // 默认主题配置
    sidebar: ["穿梭框优化改造", "选择器的虚拟渲染"],
  }),
});
