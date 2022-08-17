import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,

  };
};

  // export const setProducts = dispatch => {

  // const fetchProducts = async () => {
  // const response = await axios .get("http://localhost:3003/Cardsdata") .catch((err) => {   console.log("Err: ", err);   });
  // dispatch({
  //   type: ActionTypes.SET_PRODUCTS,
  //   payload: response,
  // })
  // // localStorage.setItem("jwtAdmin", response.data.access_token);
  //   };
  //   fetchProducts ();
  // }

 
