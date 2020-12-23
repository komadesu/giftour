import { CREATE_USER, JUDGE_USER } from "../actions/auth";

const defaultAuth = {};

export default (auth = defaultAuth, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.response.data;
    case JUDGE_USER:
      return action.response.data;
    default:
      return auth;
  }
};
