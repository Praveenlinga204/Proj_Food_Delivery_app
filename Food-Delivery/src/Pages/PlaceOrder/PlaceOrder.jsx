import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/Storecontext'


function PlaceOrder() {

    const{getTotalCartAmount} = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='title'> Delivery Info</p>
                <div className='multi-Fields'>
                    <input type="text" placeholder='FirstName'/>
                    <input type="text" placeholder='LastName'/>
                </div>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Street'/>
                <div className='multi-Fields'>
                    <input type="text" placeholder='City'/>
                    <input type="text" placeholder='State'/>
                </div>
                <div className='multi-Fields'>
                    <input type="text" placeholder='Zip-Code'/>
                    <input type="text" placeholder='Country'/>
                </div>
                <input type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
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
                    <button>Proceed To Payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
