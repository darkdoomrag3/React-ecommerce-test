import React from 'react';
import ForomInput from '../form-input/forom-input.component';
import './sign.scss'
import CustomButton from '../custom-button/custom-button.component';
import { singInWithGoogle } from '../../firebase/firebase';



class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: 'email',
            password: 'password'

        }

    }

    handelSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })

    }

    handelChange = (event) => {

        const { value, name } = event.target;
        this.setState({ [name]: value })

    }


    render() {

        return (

            <div className='sign-in'>

                <h2>I alredy have an account</h2>
                <span>sign in with your email and your password</span>

                <form onSubmit={this.handelSubmit}>
                    <ForomInput name="email" type="email" value={this.state.email} handelChange={this.handelChange} required label="email" />

                    <ForomInput name="password" type="password" value={this.state.password} handelChange={this.handelChange} required label="password" />

                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSingIn>
                            {''}
                            Sign In with google {''}</CustomButton>

                    </div>



                </form>
            </div>

        )


    }


}


export default SignIn;
