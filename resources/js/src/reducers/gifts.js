import _ from "lodash";

import { READ_GIFTS, CREATE_GIFT, DELETE_GIFT } from "../actions/gifts";

const defaultGifts = []

export default (gifts = defaultGifts, action) => {
  switch (action.type) {
    case READ_GIFTS:
      return _.mapKeys(action.response.data, "id");
    case CREATE_GIFT:
      return _.mapKeys(gifts, "id");
    case DELETE_GIFT:
      if (gifts[action.giftId]) {
        delete gifts[action.giftId]
      }
      return { ...gifts }
    default:
      return gifts;
  }
};

