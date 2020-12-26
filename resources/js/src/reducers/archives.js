import { READ_ARCHIVES, DELETE_ARCHIVE } from "../actions/archives";

const defaultArchives = []

export default (archives = defaultArchives, action) => {
  switch (action.type) {
    case READ_ARCHIVES:
      return action.response.data;
    case DELETE_ARCHIVE:
      archives.filter(archive => archive.id !== action.giftId)
      return [ ...archives ]
    default:
      return archives;
  }
};
