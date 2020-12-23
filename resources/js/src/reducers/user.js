import { READ_USER } from "../actions/user";

const defaultUser = {};

export default (user = defaultUser, action) => {
  switch (action.type) {
    case READ_USER:
      return action.response.data;
    default:
      return user;
  }
};
