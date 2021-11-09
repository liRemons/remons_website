import * as type from "./type";
import { music } from "@api";
const {
  getMusicList,
  getSingerList,
  getCollectionList,
} = music;
const action = {
  
  // 获取歌手列表
  getSingerList: (payload) => async (dispatch) => {
    const res = await getSingerList(payload);
    const action = {
      type: type.SINGER_LIST,
      payload,
      data: res.data,
    };
    dispatch(action);
  },

  // 查询专辑
  getCollectionList: (payload) => async (dispatch) => {
    const res = await getCollectionList(payload);
    const action = {
      type: type.COLLECTION_LIST,
      payload,
      data: res.data,
    };
    dispatch(action);
  },

  // 获取歌曲列表
  getMusicList: (payload) => async (dispatch) => {
    const res = await getMusicList(payload);
    const action = {
      type: type.MUSIC_LIST,
      payload,
      data: res.data,
    };
    dispatch(action);
  },
};

export default action;
