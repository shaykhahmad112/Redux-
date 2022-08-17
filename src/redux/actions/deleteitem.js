import { ActionTypes } from "../constants/action-types"

export const DeleteAction=(id)=>{
return{
type:ActionTypes.DELETE_ITEM,
payload:id,
};
};