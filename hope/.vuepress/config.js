const { config } = require("vuepress-theme-hope");
module.exports = config({
  title: "Sean",
  description: "A demo for vuepress-theme-hope",

  dest: "./dist",
  
  base: '/blog/',

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      // 设置需要的语言
      lang: "zh-CN",
    },
    // "/zh/": {
    //   title: "Sean",
    //   description: "copyright by Sean",
    // },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Sean",
    // repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    nav: [
      { text: "Blog Home", link: "/", icon: "home" },
      { text: "Project Home", link: "/home/", icon: "home" },
      {
        text: "Guide",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "Docs",
        link: "https://vuepress-theme-hope.github.io/",
        icon: "note",
      },
    ],

    sidebar: {
      "/": [
        "",
        "home",
        "slides",
        "layout",
        // {
        //   title: "Guide",
        //   icon: "creative",
        //   prefix: "guide/",
        //   children: ["", "page", "markdown", "disable", "encrypt"],
        // },
      ],
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        // Zhihu: "https://zhihu.com",
        // Baidu: "https://baidu.com",
        // Github: "https://github.com",
      },
      perPage: 20,
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    nav: [
      { text: "博客主页", link: "/", icon: "home" },
      // { text: "项目主页", link: "/home/", icon: "home" },
      { text: "算法", link: "/algorithmhome", icon: "home"},
      // {
      //   text: "主题文档",
      //   icon: "note",
      //   link: "https://vuepress-theme-hope.github.io/zh/",
      // },
    ],
  },
});
