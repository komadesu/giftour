import { READ_USER } from "../actions/user";

const defaultUser = {
  id: 1,
  name: "Taro",
  age: 20,
  gender: "male",
  email: "xxx@xxx.com"
};

export default (user = defaultUser, action) => {
  switch (action.type) {
    case READ_USER:
      return user;
    default:
      return user;
  }
};
