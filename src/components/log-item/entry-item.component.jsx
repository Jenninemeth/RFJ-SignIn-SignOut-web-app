import React from 'react';

import './entry-item.styles.scss';

function EntryItem({ entry, index, showCount }) {
    return (

        <div className='log-item'> 
            {/*<div className='index'> 
                {showCount && <span>{index}.</span>}
            </div>*/}
            <span className='name'>{entry.firstName}{" "}{entry.lastName}</span>
            <span className='time-in'>{entry.time}</span>
            <span className='protocols'>{entry.protocol}</span>
            <span className='time-out'>{entry.timeOut}</span>
            <span className='injury'>{entry.injured}</span>
            <span className='breaks'>{entry.breaks}</span>
        </div>
    )
}
export default EntryItem;