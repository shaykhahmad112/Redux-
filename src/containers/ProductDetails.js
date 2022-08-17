import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/selectedProduct";
import { removeSelectedProduct } from "../redux/actions/removeSelectedProduct";
import { AddtoCart } from "../redux/actions/addtocart";

const ProductDetails = () => {
const { productId } = useParams();
let product = useSelector((state) => state.product);

  const { rname, imgdata, price, description} = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") 
      dispatch(selectedProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const handleClick=()=>{
  // console.log("calling");
  dispatch(AddtoCart(product));
}
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={imgdata} />
              </div>
              <div className="column rp">
                <h1>{rname}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <p>{description}</p>
                <div >
                  {/* <div className="hidden content">
                    <i className="shop icon"></i>
                  </div> */}
                  <div><button className="btn btn-primary" onClick={handleClick}>Add to Cart</button></div>
                 {/* <button  className="visible content" onClick={Addcartitem(qty.Qty)}>Add to Cart</button> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
