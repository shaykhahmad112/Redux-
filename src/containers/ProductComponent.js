import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state?.allProducts?.products);
    return (
      <>
      {products?.map((product)=>(<><div className="four wide column" key={product?.id}>
        <Link to={`/product/${product?.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product?.imgdata} alt={product?.rname} />
              </div>
              <div className="content">
                <div className="header">{product?.rname}</div>
                <div className="meta price">$ {product?.price}</div>
                {/* <div className="meta">{product?.category}</div> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
  
      </>))}
   </> )
  
};

export default ProductComponent;
