import request from "@/utils/request";

export function getArticles(params) {
  const articles = request({
    url: "http://localhost:3000/page/getArticles",
    method: "get",
    params,
  });

  return articles;
}
