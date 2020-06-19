import React from 'react';
import './entry-item.styles.scss';

function EntryItem({ entry, index, showCount }) {

    return (

        <div className='log-item'> 
            {/*<div className='index'> 
                {showCount && <span>{index}.</span>}
            </div>*/}
            <span className='name'>{entry.firstName}{" "}{entry.lastName}</span>
            <span className='time-in'>{entry.isSigningIn}</span>
            <span className='protocols'>{entry.protocols}</span>
            <span className='time-out'>-</span>
            <span className='injury'>{entry.injury}</span>
            <span className='breaks'>{entry.breaks}</span>
        </div>
    )
}
export default EntryItem;