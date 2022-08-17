import { ActionTypes } from "../constants/action-types";

export const RemoveOne=(id)=>{
return{type:ActionTypes.Remove_ONE,
payload:id,}
}