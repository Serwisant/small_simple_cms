import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/Demo"),
    hidden: true,
  },

  {
    path: "/article/:id",
    component: () => import("@/views/article/index"),
    hidden: true,
  },

  {
    path: "/page/:id",
    component: () => import("@/views/page/index"),
    hidden: true,
  },

  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },

  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "/",
        meta: { title: "Main page", icon: "link" },
      },
    ],
  },

  {
    path: "/dashboard/showAllPosts",
    component: Layout,
    children: [
      {
        path: "showAllPosts",
        name: "Show all posts",
        component: () => import("@/views/showAllPosts/index"),
        meta: { title: "Show all posts", icon: "form" },
      },
    ],
  },

  {
    path: "/dashboard/createPost",
    component: Layout,
    children: [
      {
        path: "createPost",
        name: "Create a new post",
        component: () => import("@/views/createPost/index"),
        meta: { title: "Create a new post", icon: "form" },
      },
    ],
  },

  {
    path: "/dashboard/editPost/:id",
    component: Layout,
    children: [
      {
        path: "editPost",
        name: "Edit a post",
        component: () => import("@/views/editPost/index"),
        meta: { title: "Edit a post", icon: "form" },
      },
    ],
    hidden: true,
  },

  {
    path: "/dashboard/showAllPages",
    component: Layout,
    children: [
      {
        path: "showAllPages",
        name: "Show all pages",
        component: () => import("@/views/showAllPages/index"),
        meta: { title: "Show all pages", icon: "form" },
      },
    ],
    hidden: false,
  },

  {
    path: "/dashboard/createPage",
    component: Layout,
    children: [
      {
        path: "createPage",
        name: "Create a new page",
        component: () => import("@/views/createPage/index"),
        meta: { title: "Create a new page", icon: "form" },
      },
    ],
    hidden: false,
  },

  {
    path: "/dashboard/editPage/:id",
    component: Layout,
    children: [
      {
        path: "editPage",
        name: "Edit post",
        component: () => import("@/views/editPage/index"),
        meta: { title: "Edit page", icon: "form" },
      },
    ],
    hidden: true,
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
