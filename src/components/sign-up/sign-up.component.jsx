import React from 'react';
import ForomInput from '../form-input/forom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss'



class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {

            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''


        }
        //this.handelChange = this.handelChange.bind(this)
    }


    handelSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmpassword } = this.state;
        if (password != confirmpassword) {
            console.log("password is not match")
            return;
        }

    

    }



    handelChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        
    }


    render() {

        const { displayName, email, password, confirmpassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <span>sign up with your email and your password</span>
                <form className='sign-up-form' onClick={this.handelSubmit}>
                             <ForomInput
                        type='email' name='displayName' value={displayName} onChange={this.handelChange} label='display name' required   >


                    </ForomInput>


                    <ForomInput
                        type='email' name='email' value={email} onChange={this.handelChange} label='display email' required   >


                    </ForomInput>

                    <ForomInput
                        type='password' name='password' value={password} onChange={this.handelChange} label='password' required   >


                    </ForomInput>

                    <ForomInput
                        type='password' name='confirmpassword' value={confirmpassword} onChange={this.handelChange} label='confirmpassword' required   >


                    </ForomInput>

                    <CustomButton stype='submit' > sign up</CustomButton>

                </form>



            </div>


        )

    }


}


export default SignUp;