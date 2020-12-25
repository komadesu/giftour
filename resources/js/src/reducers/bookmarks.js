import { READ_BOOKMARKS, CREATE_BOOKMARK } from "../actions/bookmarks";

const defaultBookmarks = [];

export default (bookmarks = defaultBookmarks, action) => {
  switch (action.type) {
    case READ_BOOKMARKS:
      return action.response.data;
    case CREATE_BOOKMARK:
      return action.response.data;
    default:
      return bookmarks;
  }
};
