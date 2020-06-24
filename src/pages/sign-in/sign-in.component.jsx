import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import FirebaseContext from '../../firebase/context';
import useFormValidation from '../../redux/form-validation';
import validateForm from '../../redux/validateForm';
import { v4 as uuidv4 } from 'uuid';
import * as moment from "moment";

import './sign-in.styles.scss';

const INITIAL_STATE = {
    id: uuidv4(),
    jobNumber: '18109',
    isSigningIn: 'sign-in',
    date: '',
    timeIn: '',
    firstName: '',
    lastName: '',
    protocols: ''
}

function SignIn(props) {
    const { firebase } = React.useContext(FirebaseContext)
    const { handleSubmit, handleChange, values } = useFormValidation(
        INITIAL_STATE,
        validateForm,
        handleCreateLink
    );

    function handleCreateLink() {
        const { id, jobNumber, isSigningIn, date, timeIn, firstName, lastName, protocols } = values
        const getDate = new Date();
        const newSignIn = {
            id,
            jobNumber,
            isSigningIn,
            firstName,
            lastName,
            timeIn: moment(getDate).format('h:mm a'),
            date: moment(getDate).format('L'),
            protocols
        }
        firebase.db.collection('log').add(newSignIn)
        props.history.push('/success');
    }             

    return(
        <div className='sign-in'>
                <h1>Sign In Form</h1>
                <h2>Please read through and answer all questions daily</h2>
                <Link className='language' to='/sign-in-es'>Español</Link>

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
                    <p>Please read through and answer all questions daily. You must sign in at the beginning of your workday.</p>
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

export default SignIn;