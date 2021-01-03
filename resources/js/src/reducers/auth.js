import { CREATE_USER, JUDGE_USER, DELETE_AUTH } from "../actions/auth";

const defaultAuth = {};

export default (auth = defaultAuth, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.response.data;
    case JUDGE_USER:
      return action.response.data;
    case DELETE_AUTH:
      return {};
    default:
      return auth;
  }
};
