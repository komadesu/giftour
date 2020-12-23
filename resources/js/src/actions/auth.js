import axios from "axios";

import { ROOT_URL } from "./index";

export const CREATE_USER = "CREATE_USER";

export const createUser = (
  name,
  gender,
  age,
  email,
  password,
  confirmPassword
) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/users`, {
    name,
    gender,
    age,
    email,
    password,
    confirmPassword,
    grant_type: process.env.MIX_GRANT_TYPE,
    client_id: process.env.MIX_CLIENT_ID,
    client_secret: process.env.MIX_CLIENT_SECRET,
    scope: process.env.MIX_SCOPE
  });
  console.log(response);
  dispatch({ type: CREATE_USER, response });
};
