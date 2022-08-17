import { ActionTypes } from "../constants/action-types";
import axios from "axios";

  export const selectedProduct =  (id) => async dispatch => {
  const response = await axios.get(`http://localhost:3003/Cardsdata/${id}`) .catch((err) => { console.log("Err: ", err);});
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  })
  // console.log(response.data.description);
  }
