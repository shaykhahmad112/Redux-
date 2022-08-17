import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/actions/productsActions";
import { setProducts } from "../redux/actions/setProducts";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
  const response = await axios .get("http://localhost:3003/Cardsdata") .catch((err) => {   console.log("Err: ", err);   });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    
  }, []);
 
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
