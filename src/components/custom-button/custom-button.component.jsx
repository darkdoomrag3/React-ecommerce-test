import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherprops }) => {
    return (

        <button className={
            `${inverted ? 'inverted' : ''}`,
            `${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`}
            {...otherprops}>
            {children}
        </button>

    )
}

export default CustomButton;
