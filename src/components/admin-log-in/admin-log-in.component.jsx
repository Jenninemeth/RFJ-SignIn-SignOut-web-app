import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth } from '../../firebase/firebase.utils';
import useFormValidation from '../../redux/form-validation';
import firebase from '../../firebase/firebase.utils';
import validateLogin from './validateLogin';

import './admin-log-in.styles.scss';
{/* from new course */}

const INITIAL_STATE = {
    email: '',
    password: ''
}

function LogIn(props) {
    const { handleSubmit, handleBlur, handleChange, values, errors, isSubmitting } = useFormValidation(
        INITIAL_STATE, 
        validateLogin, 
        authenticateUser
    );
    const [login, setLogin] = React.useState(true);
    const [firebaseError, setFirebaseError] = React.useState(null)

    async function authenticateUser() {
        const { email, password } = values;
        try {
            const response = login
            await firebase.login(email, password)
            console.log({ response })
            return (<Redirect to='/logger' />)
        } catch (err) {
            console.error('Authentication Error', err)
            setFirebaseError(err.message)
        }
        
    }

        return(
            <div className='log-in'>
                <h2>ADMIN LOG IN</h2>
                <span className='message'>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'  
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        label='email'
                        required 
                    />
                    {errors.email && <p className='error-text'>{errors.email}</p>}
                    <FormInput  
                        name='password' 
                        type='password'
                        value={values.password} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label='password'
                        required 
                    />
                    {errors.password && <p className='error-text'>{errors.password}</p>}
                    {firebaseError && <p className='error-text'>{firebaseError}</p>}
                    <div className='buttons'>
                        <CustomButton 
                            type="submit" 
                            disabled={isSubmitting}
                            style={{ background: isSubmitting ? 'grey' : 'orange' }}
                        > 
                            Sign in 
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }


export default LogIn;