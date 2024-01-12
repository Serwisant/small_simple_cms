import request from "@/utils/request";
import jsCookie from "js-cookie";

export function login(data) {
  return request({
    url: "/vue-admin-template/user/login",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  jsCookie.remove("username");
  jsCookie.remove("id");
  jsCookie.remove("roles");
}

export function isUserLoggedIn() {
  return (
    jsCookie.get("username") !== undefined ||
    jsCookie.get("id") !== undefined ||
    jsCookie.get("roles") !== undefined
  );
}

export function getUsername() {
  if (isUserLoggedIn() === false) return "";

  return jsCookie.get("username");
}

export function isUserAdmin() {
  if (isUserLoggedIn() === false) return false;

  return jsCookie.get("roles").includes("Administrator") === true;
}
