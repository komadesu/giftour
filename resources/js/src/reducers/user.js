import { READ_USER, DELETE_USER } from "../actions/user";

const defaultUser = {};

export default (user = defaultUser, action) => {
  switch (action.type) {
    case READ_USER:
      return action.response.data;
    case DELETE_USER:
      return {};
    default:
      return user;
  }
};
