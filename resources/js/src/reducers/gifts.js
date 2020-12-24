import _ from "lodash";

import { READ_GIFTS } from "../actions/gifts";
import { CREATE_GIFT } from "../actions/gifts";

const defaultGifts = []

export default (gifts = defaultGifts, action) => {
  switch (action.type) {
    case READ_GIFTS:
      return _.mapKeys(action.response.data, "id");
    case CREATE_GIFT:
      return _.mapKeys(gifts, "id");
    default:
      return gifts;
  }
};

