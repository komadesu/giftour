import axios from "axios";

import { ROOT_URL } from "./index"

export const READ_ARCHIVES = "READ_ARCHIVES";

// export const readArchives = userId => async dispatch => {
//   const response = await axios.get(`${ROOT_URL}/gifts/${userId}`);
//   dispatch({ type: READ_ARCHIVES, response });
// };
export const readArchives = userId => dispatch => {
  dispatch({ type: READ_ARCHIVES });
};
