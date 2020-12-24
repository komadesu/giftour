import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_GIFTS = "READ_GIFTS";
export const CREATE_GIFT = "CREATE_GIFT";

export const readGifts = () => ({ type: READ_GIFTS });

export const createGift = (
  name,
  price,
  brand,
  imageData,
  category,
  postFlag,
  opponentGender,
  age,
  relationship,
  situation,
  userId
) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}api/gifts`, {
    name,
    price,
    brand,
    image: imageData,
    category,
    post_flag: postFlag,
    opponent_gender: opponentGender,
    opponent_age: age,
    relationship,
    situation,
    user: userId
  });

  dispatch({ type: CREATE_GIFT, response });
};
