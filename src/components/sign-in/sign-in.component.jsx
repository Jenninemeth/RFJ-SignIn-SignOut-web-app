import React from 'react';

const SignIn = () => (
    <div>
        <p>Please read through and answer all questions daily. You must sign in at the beginning of your work day.</p>
        <p>Did you complete all necessary COVID-19 protocols to enter the job-site?</p>
       
        <form>
            <div className='choices'>
                <div>
                    <input type="checkbox" id="yes" name="YES"></input>
                    <label for="yes">Yes</label>
                </div>

                <div>
                    <input type="checkbox" id="no" name="NO"></input>
                    <label for="yes">No</label>
                </div>
            </div>
            
        </form>
    </div>
    
);
export default SignIn;