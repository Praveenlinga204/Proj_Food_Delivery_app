import React, { useContext } from 'react'
import"./Cart.css"
import { StoreContext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const navigate = useNavigate()

    const {cartItems,food_list,removeFromCart,getTotalCartAmount}  = useContext(StoreContext);
    return (
        <div className='Cart' >
            <div className='Cart-items'>
                <div className="Cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item)=>{
                    if(cartItems[item._id]>0){
                            return <div>
                                    <div className='Cart-items-title cart-items-item' >
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price*cartItems[item._id]}</p>
                                <p className='cross' onClick={()=>removeFromCart(item._id)}> x</p>
                            </div>
                            <hr />
                            </div>
                              
                                
                            
                    }
                })
                }
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount() }</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivary Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                        </div>
                        
                    </div>
                    <button onClick={()=>{navigate("/Order")}}>Proceed To Check-Out</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it Here</p>
                        <div className="promocode-input">
                            <input type="text" placeholder='Promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
