import { combineReducers } from "redux";

import gifts from "./gifts";
import bookmarks from "./bookmarks";
import user from "./user";

export default combineReducers({ gifts: gifts, bookmarks: bookmarks, user: user });
