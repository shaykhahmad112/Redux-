import { ActionTypes } from "../constants/action-types";

const INIT_STATE={
carts:[],
}
export const AddtoCartReducer=(state= INIT_STATE,{type,payload})=>{
    switch(type){
    case ActionTypes.ADD_TO_CART:{
     const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === payload.id);  
             if(IteamIndex >= 0){
           state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
               }
           
        }
    // else{ return{...state,carts:payload }}

else{
           const temp = {...payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
                     }

    // return{...state,carts:payload }
}
    }

//Delete Item From Cart
    case ActionTypes.DELETE_ITEM:
    const delitem=state.carts.filter((ele)=>ele.id!=payload);
    console.log("DELETE Reducer");   
    return{...state,carts:delitem}  

    

//Remove One Item From Cart
case ActionTypes.Remove_ONE:
const IteamIndex=state.carts.findIndex((item)=>item.id===payload)   
if(state.carts[IteamIndex].qnty >=1){
    const decrement = state.carts[IteamIndex].qnty -= 1
    return{...state,carts:[...state.carts]}
}
else if(state.carts[IteamIndex].qnty==1)
{
    const delitem=state.carts.filter((ele)=>ele.id!=payload.id);
    return{...state,carts:delitem} 
}

default:{ return state;}

};
}
