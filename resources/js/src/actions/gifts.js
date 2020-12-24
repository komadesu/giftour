import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_GIFTS = "READ_GIFTS";

export const readGifts = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}api/gifts`)

  dispatch({ type: READ_GIFTS, response });
}
