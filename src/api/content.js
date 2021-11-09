import { service } from "@axios";

// 查询技术分类
const getTechClassList = ({ name }) => {
  return service({
    method: "get",
    url: "/content/queryTechClassList",
    params: {
      name,
    },
  });
};

// 查询文章列表
const getArticleList = ({ title, techClassId }) => {
  return service({
    method: "get",
    url: "/content/queryArticleList",
    params: {
      title,
      techClassId,
    },
  });
};

export default {
  getTechClassList,
  getArticleList,
};
