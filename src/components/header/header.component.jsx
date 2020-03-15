import React from 'react'
import { Link } from 'react-router-dom';
import './header.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CardIcon from '../card-icon/card-icon.component';
import { ReactComponent as Logo } from '../../assest/crown.svg';
import CardDropDown from '../card-dropdown/card-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({ currentUser, hidden }) => {
    return (

        <div className='header'>
            <Link to="/" className='logo-container'>

                <Logo className='logo' />

            </Link>


            <div className='options' >

                <Link to="/shop" className='option' >
                    Shop
           </Link>
               
         
                <Link to="/signin" className='option'>
                    signin
           </Link>

                <Link to="" className='option'>
                    Contact
           </Link>

                <CardIcon />

            </div>
            {

                hidden ? null :

                    <CardDropDown />

            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);
