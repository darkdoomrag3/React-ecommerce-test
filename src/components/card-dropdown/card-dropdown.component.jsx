import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './card-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItemCount, selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';


const CardDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/chekout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
        </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)


})


export default withRouter(connect(mapStateToProps)(CardDropDown));
