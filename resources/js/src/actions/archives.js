import axios from "axios";

import { ROOT_URL } from "./index"

export const READ_ARCHIVES = "READ_ARCHIVES";
export const DELETE_ARCHIVE = "DELETE_ARCHIVE";

export const readArchives = (userId, accessToken) => async dispatch => {
  const response = await axios.get(
    `${ROOT_URL}api/gifts/${userId}`,
    {
      headers: {
        ContentType: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  dispatch({ type: READ_ARCHIVES, response });
};

export const deleteArchive = (giftId) => dispatch => {
  dispatch({ type: DELETE_ARCHIVE, giftId });
};