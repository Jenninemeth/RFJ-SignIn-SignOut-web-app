import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignOut from '../../components/sign-out/sign-out.component';



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
                <span>Page 1 of 2</span>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Job Number:
                        <select id="jobNumber" name="jobNumber" handleChange={this.handleChange}>
                            <option value="18109">18109</option>
                            <option value="23165">23165</option>
                            <option value="49255">49255</option>
                        </select>   
                    </label>
<br></br>
                    <label>
                        I am 
                        
                            <button 
                                name='isSigningIn'
                                onClick={() => {
                                    this.setState({ isSigningIn: !this.state.isSigningIn });
                                    console.log("it was clicked");
                                }}
                            >
                                {signInButton}
                            </button>
                        for the day.
                            {/* <select onChange={this.handleTime} id="time" name="time">
                                    <option value="true">Sign In</option>
                                    <option value="false">Sign Out</option>
                                </select> */}    
                    </label>
<br></br>
                    <label>
                        First Name:
                        <input type="text" name="firstName" />   
                    </label>
<br></br>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" />   
                    </label>
<br></br>
                    <label>
                        Confirmation:
                        {confimationMessage}
                        
                       
                    </label>
<br></br>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
        };
};
 
export default HomePage;