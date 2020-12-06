import axios from "axios";

import { ROOT_URL } from "./index"

export const READ_BOOKMARKS = "READ_BOOKMARKS";

export const readBookmarks = userId => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/bookmarks/${userId}`);
  dispatch({ type: READ_BOOKMARKS, response });
};
