import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth } from '../../firebase/firebase.utils';

import './admin-log-in.styles.scss';

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='log-in'>
                <h2>Admin Log In</h2>
                <span className='message'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'  
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required 
                    />
                    <FormInput  
                        name='password' 
                        type='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" > 
                            Sign in 
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default LogIn;