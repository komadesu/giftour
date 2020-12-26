import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_BOOKMARKS = "READ_BOOKMARKS";
export const CREATE_BOOKMARK = "CREATE_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";

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

  const data = new FormData()
  data.append('user_id', userId)
  data.append('gift_id', giftId)

  const response = await axios.post(
    `${ROOT_URL}api/bookmarks`,
    data,
    {
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  dispatch({ type: CREATE_BOOKMARK, response })
};


export const deleteBookmark = (
  giftId,
  userId,
  accessToken
) => async dispatch => {

  const data = new FormData()
  data.append('user_id', userId)
  data.append('gift_id', giftId)
  data.append('_method', 'delete')

  const response = await axios.post(
    `${ROOT_URL}api/bookmarks`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  dispatch({ type: DELETE_BOOKMARK, response })
};
