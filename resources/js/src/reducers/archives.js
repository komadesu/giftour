import { READ_ARCHIVES, DELETE_ARCHIVE } from "../actions/archives";

const defaultArchives = []

export default (archives = defaultArchives, action) => {
  switch (action.type) {
    case READ_ARCHIVES:
      return action.response.data;
    case DELETE_ARCHIVE:
      archives.forEach((archive, index) => {
        if (archive.id === action.giftId) {
          archives.splice(index)
        }
      })
      return [ ...archives ]
    default:
      return archives;
  }
};
