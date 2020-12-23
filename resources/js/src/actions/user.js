import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_USER = "READ_USER";

export const readUser = (accessToken) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}api/user`, {
    headers: {
      ContentType: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })

  dispatch({ type: READ_USER, response });
}