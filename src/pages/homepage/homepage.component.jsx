import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignOut from '../../components/sign-out/sign-out.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import FirebaseContext from '../../firebase/context';

import './homepage.styles.scss';
import useFormValidation from '../../redux/form-validation';
import validateForm from '../../redux/validateForm';

const INITIAL_STATE = {
    jobNumber: '18109',
    isSigningIn: 'sign-in',
    firstName: '',
    lastName: '',
    protocols: ''
}

function HomePage(props) {
    const { firebase } = React.useContext(FirebaseContext)
    const { handleSubmit, handleChange, values, errors } = useFormValidation(
        INITIAL_STATE,
        validateForm,
        handleCreateLink
    );

    function handleCreateLink() {
        console.log('submitted!')
        const { jobNumber, isSigningIn, firstName, lastName, protocols } = values
        const newSignIn = {
            jobNumber,
            isSigningIn,
            firstName,
            lastName,
            time: Date.now(),
            protocols
        }
        firebase.db.collection('log').add(newSignIn)
        props.history.push('/');
    }             

    return(
        <div className='sign-in'>
                <h1>Sign In Form</h1>
                <h2>Please read through and answer all questions daily</h2>

                <form onSubmit={handleSubmit}>
                    <label className='title'>
                        1. Job Number
                        <select 
                            className='job-number' 
                            id="jobNumber" 
                            name="jobNumber" 
                            value="18109"
                            onChange={handleChange}
                            label='Job Number'
                            required 
                        >
                            <option value="18109">18109</option>
                        </select>   
                    </label>
<br></br>
                    <label className='title'>
                        2. I am 
                        
                    <CustomButton 
                        name='isSigningIn'
                        onChange={handleChange}
                        label='Job Number'
                        value='sign-in'
                        inverted
                        required 
                    > Signing In
                    </CustomButton>
                        for the day. 
                    </label>
<br></br>
                    <label className='title'>
                    3. First Name
                    <FormInput 
                        name='firstName'
                        type='firstName' 
                        onChange={handleChange}
                        value={values.firstName}
                        label='First Name'
                        required 
                        />   
                    </label>
                    <label className='title'>
                    4. Last Name
                        <FormInput 
                        name='lastName'
                        type='lastName' 
                        onChange={handleChange}
                        value={values.lastName}
                        label='Last Name'
                        required 
                        />
                    </label>
                    <label className='title'>
                    5. Confirmation
                    <div>
                    <p>Please read through and answer all questions daily. You must sign in at the beginning of your work day.</p>
                    <p>Did you complete all necessary COVID-19 protocols to enter the job-site?</p>
                        <div className='choices'>
                            <div>
                                <input 
                                    name='protocols'
                                    type='radio' 
                                    value='YES'
                                    label='YES'
                                    onChange={handleChange}
                                    id='protocols' 
                                    required 
                                    >
                                </input>
                                <label for="yes">Yes</label>
                            </div>
                            <div>
                                <input 
                                    name='protocols'
                                    type='radio' 
                                    value='NO'
                                    label='NO'
                                    onChange={handleChange}
                                    id='protocols' >
                                </input>
                                <label for="yes">No</label>
                            </div>
                        </div>
                </div>
                    </label>

                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
    );
};

 
export default HomePage;