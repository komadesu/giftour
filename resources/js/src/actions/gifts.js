import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_GIFTS = "READ_GIFTS";
export const CREATE_GIFT = "CREATE_GIFT";


export const readGifts = (
  opponentGender,
  opponentAge,
  price,
  relationship,
  situation
) => async dispatch => {
  const searchParams = new URLSearchParams()
  if (opponentGender) {
    switch (opponentGender) {
      case '1':
        opponentGender = 'male'
      break
      case '2':
        opponentGender = 'female'
      break
      case '3':
        opponentGender = 'others'
      break
    }
    searchParams.append('opponent_gender', opponentGender)
  }
  if (opponentAge) {
    searchParams.append('opponent_age', opponentAge)
  }
  if (price) {
    searchParams.append('price', price)
  }
  if (relationship) {
    searchParams.append('relationship', relationship)
  }
  if (situation) {
    searchParams.append('situation', situation)
  }
  const searchParamString = searchParams.toString()

  const response = await axios.get(`${ROOT_URL}api/gifts?${searchParamString}`)

  dispatch({ type: READ_GIFTS, response });
}


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


