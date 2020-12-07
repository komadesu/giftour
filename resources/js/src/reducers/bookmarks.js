import _ from "lodash";
import { READ_BOOKMARKS } from "../actions/bookmarks";

const defaultBookmarks = [
  {
    userId: 2,
    giftId: 1,
  },
  {
    userId: 2,
    giftId: 3,
  }
];

export default (bookmarks = defaultBookmarks, action) => {
  switch (action.type) {
    case READ_BOOKMARKS:
      // console.log(action.response.data);
      return bookmarks;
      // return _.mapKeys(action.response.data, "id");
    default:
      return bookmarks;
  }
};
