import React from 'react';
import './entry-item.styles.scss';

function EntryItem({ entry, index, showCount }) {

    return (
        <div className='log-item'> 
            <span className='name'>{entry.firstName}{" "}{entry.lastName}</span>
            <span className='time-in'>{entry.date}</span>
            <span className='time-in'>{JSON.stringify(entry.timeIn)}</span>
            <span className='protocols'>{entry.protocols}</span>
            <span className='time-out'>{JSON.stringify(entry.timeOut)}</span>
            <span className='injury'>{entry.injury}</span>
            <span className='breaks'>{entry.breaks}</span>
            <span className='tasksCompleted'>{entry.tasksCompleted}</span>
        </div>
    )
}
export default EntryItem;