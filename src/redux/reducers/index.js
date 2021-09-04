import { combineReducers } from "redux";
import userReducer from "./users";
import postsReducer from "./posts";
import albumReducer from "./album";
import photosReducer from "./Photo";

const reducer = combineReducers({
  userReducer,
  postsReducer,
  albumReducer,
  photosReducer,
});

export default reducer;
