import _ from "lodash";

import { READ_GIFTS } from "../actions";

const defaultGifts = [
  {
    id: 1,
    name: "香水",
    price: 4000,
    brand: "shiro",
    image_file_name: "preview-bg.png",
    category: "香水・フレグランス",
    post_flag: 1,
    opponent_gender: "male",
    opponent_age: 41,
    relationship: "恋人",
    situation: "バレンタインデー",
    created_at: "2020-12-04 16:32:14"
  },
  {
    id: 2,
    name: "マフラー",
    price: null,
    brand: "ユナイテッドアローズ",
    image_file_name: "bg-img.png",
    category: "ファッション",
    post_flag: 2,
    opponent_gender: "male",
    opponent_age: 20,
    relationship: "親子",
    situation: "誕生日",
    created_at: "2020-12-04 16:32:14"
  },
  {
    id: 3,
    name: "アイシャドウパレット",
    price: 12000,
    brand: "Dior",
    image_file_name: "bg-img.png",
    category: "コスメ・健康",
    post_flag: 1,
    opponent_gender: "female",
    opponent_age: 32,
    relationship: "先輩・後輩",
    situation: "その他",
    created_at: "2020-12-04 16:32:14"
  }
];

export default (gifts = defaultGifts, action) => {
  switch (action.type) {
    case READ_GIFTS:
      console.log("Hi");
      return _.mapKeys(gifts, "id");
      // return _.mapKeys(action.response.data, "id");
    default:
      return gifts;
  }
};
