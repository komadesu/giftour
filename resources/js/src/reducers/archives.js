import { READ_ARCHIVES } from "../actions/archives";
import _ from "lodash";

const defaultArchives = []

export default (archives = defaultArchives, action) => {
  switch (action.type) {
    case READ_ARCHIVES:
      return action.response.data;
    default:
      return archives;
  }
};
