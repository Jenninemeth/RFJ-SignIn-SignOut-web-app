import React from 'react';
import FirebaseContext from '../../firebase/context';
import EntryItem from './entry-item.component';
import useAuth from '../../redux/user/useAuth';

import './log-item.styles.scss';

function LogItem() {
    const user = useAuth; 
    const { firebase } = React.useContext(FirebaseContext);
    const [entrys, setEntrys] = React.useState([])
    
    React.useEffect(() => {
        
        firebase.db.collection('log').onSnapshot(handleSnapshot)
    
        return () => {
            
        }
    }, [])

    function handleSnapshot(snapshot) {
        const entrys = snapshot.docs.map(doc => {
            return { ...doc.data() }
        })
        setEntrys(entrys)
    }
    return (

        <div className='log-page'>
            <div className='search'>
                <label>
                    Job Number: 18109
                </label>
                
                <label>
                    Search by Date:
                    <input type="date" id="search" name="search-by-date"
                        value="">
                    </input>
                </label>
            </div>
            <div className='log-header'>
                <div className='name'>
                    <span>Name</span>
                </div>
                <div className='time-in'>
                    <span>Sign In</span>
                </div>
                <div className='protocols'>
                    <span>Completed Protocols?</span>
                </div>
                <div className='time-out'>
                    <span>Sign Out</span>
                </div>
                <div className='injury'>
                    <span>Injured?</span>
                </div>
                <div className='breaks'>
                    <span>Taken breaks & Injury free?</span>
                </div>
            </div>
            {entrys.map((entry, index) => (
                <EntryItem key={entry.id} showCount={true} index={index + 1} entry={entry}  />
            ))}
        </div>
    );
};

export default LogItem;