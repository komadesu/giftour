import { READ_BOOKMARKS } from "../actions/bookmarks";

const defaultBookmarks = [
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

export default (bookmarks = defaultBookmarks, action) => {
  switch (action.type) {
    case READ_BOOKMARKS:
      // console.log(action.response.data);
      return bookmarks;
    default:
      return bookmarks;
  }
};
