import axios from "axios";

import { ROOT_URL } from "./index";

export const CREATE_USER = "CREATE_USER";
export const JUDGE_USER = "JUDGE_USER";

export const createUser = (
  name,
  gender,
  age,
  email,
  password,
  confirmPassword
) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}api/users`, {
    name,
    gender,
    age,
    email,
    password,
    password_confirm: confirmPassword,
    grant_type: process.env.MIX_GRANT_TYPE,
    client_id: process.env.MIX_CLIENT_ID,
    client_secret: process.env.MIX_CLIENT_SECRET,
    scope: process.env.MIX_SCOPE
  });

  dispatch({ type: CREATE_USER, response });
};

export const judgeUser = (
  email,
  password
) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}oauth/token`, {
    username: email,
    password,
    grant_type: process.env.MIX_GRANT_TYPE,
    client_id: process.env.MIX_CLIENT_ID,
    client_secret: process.env.MIX_CLIENT_SECRET,
    scope: process.env.MIX_SCOPE
  });

  dispatch({ type: JUDGE_USER, response });
};
