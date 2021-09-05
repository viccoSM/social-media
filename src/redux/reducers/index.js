import { combineReducers } from "redux";
import userReducer from "./users";
import postsReducer from "./posts";
import albumReducer from "./album";
import photosReducer from "./Photo";
import commentsReducer from "./comments";

const reducer = combineReducers({
  userReducer,
  postsReducer,
  albumReducer,
  photosReducer,
  commentsReducer,
});

export default reducer;
