import _ from "lodash";

import { READ_GIFTS } from "../actions/gifts";

const defaultGifts = []

export default (gifts = defaultGifts, action) => {
  switch (action.type) {
    case READ_GIFTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return gifts;
  }
};

