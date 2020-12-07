import { combineReducers } from "redux";

import gifts from "./gifts";
import bookmarks from "./bookmarks";

export default combineReducers({ gifts: gifts, bookmarks: bookmarks });
