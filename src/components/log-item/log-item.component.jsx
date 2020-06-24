import React from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../firebase/context';
import EntryItem from './entry-item.component';

import './log-item.styles.scss';

function LogItem() {
    const { firebase } = React.useContext(FirebaseContext);
    const [entrys, setEntrys] = React.useState([]);
    
    React.useEffect(() => {
        const unsub = firebase.db.collection('log').onSnapshot(() => {
        });
        firebase.db
        .collection('log')
        .orderBy('date', 'desc')
        .onSnapshot(handleSnapshot);
        return () => {   
            unsub();    
        }
    }, []);

    function handleSnapshot(snapshot) {
        const entrys = snapshot.docs.map(doc => {
            return { date: doc.date, ...doc.data() };
        });
        setEntrys(entrys);
    }
    return (

        <div className='log-page'>
            <div className='search'>
                <label>
                    Job Number: 18109
                </label>
                <Link className='search-link' to='/search'>
                    Search by Name or Date
                </Link>
            </div>
            <div className='log-header'>
                <div className='name'>
                    <span>Name</span>
                </div>
                <div className='date'>
                    <span>Date</span>
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