import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import FirebaseContext from '../../firebase/context';

import '../../pages/homepage/homepage.styles.scss';
import useFormValidation from '../../redux/form-validation';
import validateForm from '../../redux/validateForm';

const INITIAL_STATE = {
    jobNumber: '18109',
    isSigningIn: 'sign-out',
    firstName: '',
    lastName: '',
    injury: '',
    breaks: 'YES'
}

function SignOut(props) {
    const { firebase } = React.useContext(FirebaseContext)
    const { handleSubmit, handleChange, values, errors } = useFormValidation(
        INITIAL_STATE,
        validateForm,
        handleCreateLink
    );

    function handleCreateLink() {
        console.log('submitted!')
        const { jobNumber, isSigningIn, firstName, lastName, injury, breaks } = values
        const newSignOut = {
            jobNumber,
            isSigningIn,
            firstName,
            lastName,
            timeOut: Date.now(),
            injury,
            breaks
        }
        firebase.db.collection('log').add(newSignOut)
        props.history.push('/');
    } 

    return(
        <div className='sign-in'>
                <h1>Sign Out Form</h1>
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
                        value='sign-out'
                        inverted
                        required 
                    > Signing Out
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
                    <p>You must sign out and confirm you have not been injured at the end of your work day. Failure to do so will involve disciplinary actions by your supervisor.</p>
                    <p>Were you injured at all during work hours?</p>
                        <div className='choices'>
                            <div>
                                <input 
                                    name='injury'
                                    type='radio' 
                                    value='YES'
                                    label='YES'
                                    onChange={handleChange}
                                    id='injury' 
                                    required 
                                    >
                                </input>
                                <label for="yes">Yes</label>
                            </div>
                            <div>
                                <input 
                                    name='injury'
                                    type='radio' 
                                    value='NO'
                                    label='NO'
                                    onChange={handleChange}
                                    id='injury' >
                                </input>
                                <label for="yes">No</label>
                            </div>
                        </div>
                    </div>
                    <p>By submitting, I acknowledge that I have taken all of my breaks, lunch, and rest periods. I also acknowledge that I am injury free, if I was able to be injured while working for RFJ Meiswinkle I have reported such injury to my supervisor.</p>
                    </label>

                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
    );
};

export default SignOut;