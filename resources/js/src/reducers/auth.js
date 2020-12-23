import { CREATE_USER } from "../actions/auth";

const defaultAuth = {};

export default (auth = defaultAuth, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log(action);
      return auth;
    default:
      return auth;
  }
};
