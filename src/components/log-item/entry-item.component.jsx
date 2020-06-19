import React from 'react';

function EntryItem({ entry, index, showCount }) {
    return (
        <div>
            <div>
                {showCount && <span>{index}.</span>}

            </div>
            <div>
                <div>
                    {entry.firstName}
                </div>
                <div>
                    {entry.lastName}
                </div>
                <div>
                    {entry.time}
                </div>
            </div>
        </div>
    )
}
export default EntryItem;