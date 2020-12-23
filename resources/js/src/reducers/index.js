import { combineReducers } from "redux";

import gifts from "./gifts";
import archives from "./archives";
import bookmarks from "./bookmarks";
import auth from "./auth";
import user from "./user";

export default combineReducers({ gifts, archives, bookmarks, auth, user });
