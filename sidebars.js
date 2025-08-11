/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "页面配置",
      items: [
        {
          type: "category",
          label: "公式配置",
          items: ["page-config/formula-config/affiliation","page-config/formula-config/find"],
        },
      ],
    },
    {
      type: "category",
      label: "UDC平台",
      items: [
        {
          type: "category",
          label: "后端",
          items: [
            "udc/backend/annotations",
            "udc/backend/gen-call",
            "udc/backend/common-services",
          ],
        },
        {
          type: "category",
          label: "前端",
          items: ["udc/frontend/dev-env"],
        },
      ],
    },
    {
      type: "category",
      label: "应用配置",
      items: [
        {
          type: "category",
          label: "用印管理",
          items: ["app/seal/use", "app/seal/update"],
        },
      ],
    },
  ],
};
