import React from 'react';

import CustomButton from '../custom-button/custom-buttom';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Checkout</CustomButton>
    </div>
)

export default CartDropdown;