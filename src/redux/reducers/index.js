import { combineReducers } from "redux";
import { setproductsReducer } from "./setproductreducer";
import { selectedProductsReducer } from "./selectedProductsReducer";
import { AddtoCartReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: setproductsReducer,
  product: selectedProductsReducer,
  cartitems:AddtoCartReducer,
});
export default reducers;
