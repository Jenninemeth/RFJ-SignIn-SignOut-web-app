import React from 'react';

const SignIn = () => (
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
                        value='YES'
                        label='YES'
                        id='protocols' >
                    </input>
                    <label for="yes">No</label>
                </div>
            </div>
            
        
    </div>
    
);
export default SignIn;