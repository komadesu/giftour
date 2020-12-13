import axios from "axios";

import { ROOT_URL } from "./index"

export const READ_POSTS = "READ_POSTS";

// export const readPosts = userId => async dispatch => {
//   const response = await axios.get(`${ROOT_URL}/gifts/${userId}`);
//   dispatch({ type: READ_POSTS, response });
// };
export const readPosts = userId => dispatch => {
  dispatch({ type: READ_POSTS });
};
