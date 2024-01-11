import request from "@/utils/request";

export function getArticles(params) {
  return request({
    url: "/page/getArticles/",
    method: "get",
    params,
  });
}
