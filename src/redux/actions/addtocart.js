import React from "react";
import { ActionTypes } from "../constants/action-types";

export const AddtoCart=(item)=>{   
return{
type:ActionTypes.ADD_TO_CART,
payload:item,
};
};