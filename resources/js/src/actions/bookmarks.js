import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_BOOKMARKS = "READ_BOOKMARKS";
export const CREATE_BOOKMARK = "CREATE_BOOKMARK";

export const readBookmarks = (userId, accessToken) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}api/bookmarks/${userId}`, {
    headers: {
      'Content-Type': "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  });

  dispatch({ type: READ_BOOKMARKS, response });
};

export const createBookmark = (
  giftId,
  userId,
  accessToken
) => async dispatch => {

  const searchParams = new URLSearchParams()
  searchParams.append('user_id', userId)
  searchParams.append('gift_id', giftId)
  const searchParamString = searchParams.toString()

  const response = await axios.post(
    `${ROOT_URL}api/bookmarks?${searchParamString}`,
    null,
    {
      headers: {
        'Conten-Type': "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  dispatch({ type: CREATE_BOOKMARK, response })
};
