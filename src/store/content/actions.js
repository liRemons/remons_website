import * as type from "./type";
import { content } from "@api";
const {
  getTechClassList,
  getArticleList,
} = content;
const action = {
  
  // 获取技术分类
  getTechClassList: (payload) => async (dispatch) => {
    const res = await getTechClassList(payload);
    const action = {
      type: type.TECH_CLASS_LIST,
      payload,
      data: res.data,
    };
    dispatch(action);
  },

  // 获取技术文章列表
  getArticleList: (payload) => async (dispatch) => {
    const res = await getArticleList(payload);
    const action = {
      type: type.TECT_ARTICLE_LIST,
      payload,
      data: res.data,
    };
    dispatch(action);
  },
};

export default action;
