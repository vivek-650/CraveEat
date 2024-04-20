import React from 'react';
import { useSelector } from "react-redux";
import { CDN_URL } from '../utils/Url';
const Cart = () => {
    const cartItem = useSelector((store)=> store.cart.items)
    const totalPrice = cartItem.reduce((total, item) => {
        return total + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100);
    }, 0);
  return (
    <div className='menu-conatiner'>
        <h1 className='title'>Cart Item</h1>
        {cartItem.map((item, itemIndex) => (
            <div className='disc'>
                <div className='leftDis'>
                    <h2 key={itemIndex}>{item.card.info.name}</h2><br></br>
                    <p key={item.card.info.id}>₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100 }</p>
                    <span>{item.card.info.description}</span>
                </div>
                <div className='rightDis'>
                    <img key={item.card.info.id} src={CDN_URL+item.card.info.imageId} />
                </div>
            </div>        
        ))}
        <hr></hr>
        <h2 className='title'>Total Price: ₹ {totalPrice.toFixed(2)}</h2>
    </div>
  )
}

export default Cart
