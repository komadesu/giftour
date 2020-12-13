import { combineReducers } from "redux";

import gifts from "./gifts";
import posts from "./posts";
import bookmarks from "./bookmarks";
import user from "./user";

export default combineReducers({ gifts, posts, bookmarks, user });
