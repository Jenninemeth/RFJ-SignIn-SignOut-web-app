import React from 'react';

const SignOut = () => (
    <div>
        <p>You must sign out and confirm you have not been injured at the end of your work day. Failure to do so will involve disciplinary actions by your supervisor.</p>
        <p>Were you injured at all during work hours?</p>

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
            
        <p>If so, did you report it to your supervisor immediately?</p>
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
        <p>By submitting, I acknowledge that I have taken all of my breaks, lunch, and rest periods. I also acknowledge that I am injury free, if I was able to be injured while working for RFJ Meiswinkle I am to report such injury to my supervisor immediately.</p>
    </div>
);

export default SignOut;