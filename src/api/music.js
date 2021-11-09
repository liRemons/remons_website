import { service } from "@axios";

// 获取歌手列表
const getSingerList = ({ name }) => {
  return service({
    method: "get",
    url: "/music/querySingerList",
    params: {
      name,
    },
  });
};

// 获取专辑
const getCollectionList = ({ name }) => {
  return service({
    method: "get",
    url: "/music/queryCollectionList",
    params: {
      name,
    },
  });
};

// 获取歌曲列表
const getMusicList = ({ page, name }) => {
  return service({
    method: "get",
    url: "/music/querySongList",
    params: {
      page,
      name,
    },
  });
};

export default {
  getMusicList,
  getSingerList,
  getCollectionList,
};
