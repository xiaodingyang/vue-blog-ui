export default [
  {
    path: "/",
    name: "/",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/index",
    name: "index",
    meta: {
      icon: "el-icon-s-home",
      title: "首页",
    },
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/",
    name: "/",
    component: () => import("@/views/Dashboard/index.vue"),
    children: [
      {
        path: "/blog",
        name: "blog",
        meta: {
          icon: "el-icon-s-platform",
          title: "博客",
        },
        component: () => import("@/views/Dashboard/Home/index.vue"),
      },
      {
        path: "/resume",
        name: "resume",
        meta: {
          icon: "el-icon-s-order",
          title: "简历",
        },
        component: () => import("@/views/resume/index.vue"),
      },
      {
        path: "/blog/detail",
        name: "detail",
        component: () => import("@/views/Dashboard/detail/index.vue"),
      },
      {
        path: "/blog/tags",
        name: "tags",
        component: () => import("@/views/tags/index.vue"),
      },
      {
        path: "*",
        name: "404",
        component: () => import("@/components/error/404.vue"),
      },
    ],
  },
];
