import _ from "lodash";

import { READ_GIFTS } from "../actions/gifts";
import { CREATE_GIFT } from "../actions/gifts";

const defaultGifts = [
  {
    id: 1,
    name: "香水",
    price: 4000,
    brand: "shiro",
    imageFileName: "preview-bg.png",
    category: "香水・フレグランス",
    postFlag: 1,
    opponentGender: "male",
    opponentAge: 41,
    relationship: "恋人",
    situation: "バレンタインデー",
    createdAt: "2020-12-04 16:32:14"
  },
  {
    id: 2,
    name: "マフラー",
    price: null,
    brand: "ユナイテッドアローズ",
    imageFileName: "bg-img.png",
    category: "ファッション",
    postFlag: 2,
    opponentGender: "male",
    opponentAge: 20,
    relationship: "親子",
    situation: "誕生日",
    createdAt: "2020-12-04 16:32:14"
  },
  {
    id: 3,
    name: "アイシャドウパレット",
    price: 12000,
    brand: "Dior",
    imageFileName: "bg-img.png",
    category: "コスメ・健康",
    postFlag: 1,
    opponentGender: "female",
    opponentAge: 32,
    relationship: "先輩・後輩",
    situation: "その他",
    createdAt: "2020-12-04 16:32:14"
  }
];

export default (gifts = defaultGifts, action) => {
  switch (action.type) {
    case READ_GIFTS:
      return _.mapKeys(gifts, "id");
    // return _.mapKeys(action.response.data, "id");
    case CREATE_GIFT:
      return _.mapKeys(gifts, "id");
    default:
      return gifts;
  }
};
