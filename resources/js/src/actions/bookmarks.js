import axios from "axios";

import { ROOT_URL } from "./index"

export const READ_BOOKMARKS = "READ_BOOKMARKS";

export const readBookmarks = (userId, accessToken) => async dispatch => {
  const response = await axios.get(
    `${ROOT_URL}api/bookmarks/${userId}`,
    {
      headers: {
        ContentType: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  dispatch({ type: READ_BOOKMARKS, response });
};
