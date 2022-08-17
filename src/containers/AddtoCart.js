import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAction } from "../redux/actions/deleteitem";
import { RemoveOne } from "../redux/actions/removeone";
import { AddtoCart } from "../redux/actions/addtocart";
import Table from 'react-bootstrap/Table';


const Cart=()=>{
const AddtoCartData= useSelector((state) => state.cartitems.carts);
const[price, setPrice]=useState(0);
const dispatch=useDispatch();
const handleDelete=(id)=>{dispatch(DeleteAction(id)); }
const handleIncrement=()=>{dispatch(AddtoCart(AddtoCartData));} 
const handleRemoveOne=(id)=>{dispatch(RemoveOne(id));
Total();
} 
const Total=()=>{
    let totalprice=0;
    AddtoCartData.map((ele)=>{
    totalprice=ele.price * ele.qnty + totalprice;
    })
    setPrice(totalprice);
}
useEffect(()=>{Total()},[]);
return(
    <>
 {/* //2nd */}
      <div className="c+ontainer mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            AddtoCartData.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                    <p> <strong>Price</strong>  : {ele.price} pkr</p>
                    <p> <strong>Dishes</strong>  : {ele.address} </p>
                    <p> <strong>Total</strong>  :{ele.price * ele.qnty} pkr</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>handleDelete(ele.id) : ()=>handleRemoveOne(ele.id)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={handleIncrement}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  onClick={()=>handleDelete(ele.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>

);

}
export default Cart;