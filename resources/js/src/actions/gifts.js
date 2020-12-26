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
  image,
  category,
  postFlag,
  opponentGender,
  opponentAge,
  relationship,
  situation,
  userId,
  accessToken
) => async dispatch => {

  const data = new FormData();
  data.append('name', name ? name : '');
  data.append('price', price ? price : '');
  data.append('brand', brand ? brand : '');
  data.append('image', image ? image : '')
  data.append('category', category ? category : '');
  data.append('post_flag', postFlag ? postFlag : '');
  data.append('opponent_gender', opponentGender ? opponentGender : '');
  data.append('opponent_age', opponentAge ? opponentAge : '');
  data.append('relationship', relationship ? relationship : '');
  data.append('situation', situation ? situation : '');
  data.append('user', userId ? userId : '');

  const response = await axios.post(
    `${ROOT_URL}api/gifts`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  dispatch({ type: CREATE_GIFT, response });
};

