import { combineReducers } from "redux";
import utils from "./utils/reducer";
import music from "./music/reducer";
import content from "./content/reducer";
// 合并 reducer
const reducer = combineReducers({
  utils,
  music,
  content,
});

export default reducer;
