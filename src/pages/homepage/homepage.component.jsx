import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignOut from '../../components/sign-out/sign-out.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import './homepage.styles.scss';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobNumber: '',
            isSigningIn: true,
            firstName: '',
            lastName: '',
            protocols: '',
            injured: '',
            breaksInjuryFree: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            jobNumber: '',
            isSigningIn: '',
            firstName: '',
            lastName: '',
            protocols: '',
            injured: '',
            breaksInjuryFree: ''
        });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
        console.log({ [name]: value });
    }

    handleToggle = (event) => {
        this.setState = ({
            isSigningIn: !this.state.isSigningIn
        })
    }
    
    render() {
        const signInButton = this.state.isSigningIn ? "Signing in" : "Signing Out";
        
        const confimationMessage = this.state.isSigningIn ? (
            <SignIn />
        ) : (
            <SignOut />
        );  
                        

        return(
        <div className='sign-in'>
                <h2>Please read through and answer all questions daily</h2>

                <form onSubmit={this.handleSubmit}>
                    <label className='title'>
                        1. Job Number
                        <select className='job-number' id="jobNumber" name="jobNumber" handleChange={this.handleChange}>
                            <option value="18109">18109</option>
                            <option value="23165">23165</option>
                            <option value="49255">49255</option>
                        </select>   
                    </label>
<br></br>
                    <label className='title'>
                        2. I am 
                        
                            <CustomButton isSigningIn={this.state.isSigningIn}
                                name='isSigningIn'
                                onChange={
                                    this.handleToggle,
                                console.log("worked")
                            }
                                onClick={() => {
                                    this.setState({ isSigningIn: !this.state.isSigningIn });
                                }}
                                inverted
                            >
                                {signInButton}
                            </CustomButton>
                        for the day. 
                    </label>
<br></br>
                    <label className='title'>
                    3. First Name
                        <FormInput 
                        name='firstName'
                        type='firstName' 
                        handleChange={this.handleChange}
                        value={this.state.firstName}
                        label='First Name'
                        required 
                        />   
                    </label>
                    <label className='title'>
                    4. Last Name
                        <FormInput 
                        name='lastName'
                        type='lastName' 
                        handleChange={this.handleChange}
                        value={this.state.lastName}
                        label='Last Name'
                        required 
                        />
                    </label>
                    <label className='title'>
                    5. Confirmation
                        {confimationMessage}
                        
                       
                    </label>
<br></br>

                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        );
        };
};
 
export default HomePage;