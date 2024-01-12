import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
import { isUserAdmin, isUserLoggedIn } from "./api/user";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/", "/login", "/register"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (isUserLoggedIn() === true) {
    if (to.path === "/login" || to.path === "/register") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
      NProgress.done();
    }
  }

  if (isUserAdmin() === false && to.path.indexOf("/dashboard") != -1) {
    next({ path: "/" });
    NProgress.done();
  }

  if (whiteList.indexOf(to.path) !== -1 || to.path.indexOf("/article/" === 0)) {
    // in the free login whitelist, go directly
    next();
    NProgress.done();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
