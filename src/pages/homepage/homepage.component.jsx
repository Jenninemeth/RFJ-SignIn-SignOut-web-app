import React from 'react';
import { Route, Link } from 'react-router-dom';

import Success from '../success/success-page.component';
import SignIn from '../../components/sign-in/sign-in.component';

function HomePage() {
    return(
        <div className='sign-in'>
                <h2>Please read through and answer all questions daily</h2>
                <span>Page 1 of 2</span>

                <form onSubmit={<Link to="/success">Test</Link>}>
                    <label>
                        Job Number:
                        <select id="jobNumber" name="jobNumber">
                            <option value="18109">18109</option>
                            <option value="23165">23165</option>
                            <option value="49255">49255</option>
                        </select>   
                    </label>

                    <label>
                        Time:
                        <select id="time" name="time">
                            <option value="sign-in">Sign In</option>
                            <option value="sign-out">Sign Out</option>
                        </select>     
                    </label>

                    <label>
                        First Name:
                        <input type="text" name="firstName" />   
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" />   
                    </label>

                    <button type="submit">Next</button>
                </form>
            </div>
    );
}

export default HomePage;