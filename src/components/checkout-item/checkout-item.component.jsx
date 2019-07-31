import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

function CheckoutItem({addItem, clearItem, cartItem, removeItem}) {
  const {imageUrl, name, price, quantity} = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
          {quantity}
        <span className='arrow' onClick={() => addItem(cartItem)}>&#10095;</span>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);
