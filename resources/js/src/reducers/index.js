import { combineReducers } from "redux";

import gifts from "./gifts";
import archives from "./archives";
import bookmarks from "./bookmarks";
import user from "./user";

export default combineReducers({ gifts, archives, bookmarks, user });
