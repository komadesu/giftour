import { READ_USER } from "../actions/user";

const defaultUser = {
  id: 2,
  name: "Taro",
  age: 20,
  gender: "male",
  email: "xxx@xxx.com",
  isLoggedIn: true
};

export default (user = defaultUser, action) => {
  switch (action.type) {
    case READ_USER:
      return user;
    default:
      return user;
  }
};
