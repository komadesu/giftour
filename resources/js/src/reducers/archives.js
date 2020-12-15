import { READ_ARCHIVES } from "../actions/archives";
import _ from "lodash";

const defaultArchives = [
  {
    id: 1,
    name: "香水(archives)",
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
    id: 3,
    name: "アイシャドウパレット(archives)",
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

export default (archives = defaultArchives, action) => {
  switch (action.type) {
    case READ_ARCHIVES:
      // console.log(action.response.data);
      return archives;
    default:
      return archives;
  }
};
