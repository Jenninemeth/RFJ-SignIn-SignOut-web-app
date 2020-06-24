import React from 'react';
import FirebaseContext from '../../firebase/context';
import EntryItem from '../../components/log-item/entry-item.component';
import useAuth from '../../redux/user/useAuth';

import '../../components/log-item/log-item.styles.scss';

function Search() {
    const user = useAuth; 
    const { firebase } = React.useContext(FirebaseContext);
    const [filteredEntrys, setFilteredEntrys] = React.useState([]);
    const [entrys, setEntrys] = React.useState([]);
    const [filter, setFilter] = React.useState("");
    
    React.useEffect(() => {
        firebase.db
        .collection('log')
        .get()
        .then(snapshot => {
            const entrys = snapshot.docs.map(doc => {
                return { date: doc.date, ...doc.data() }
            })
            setEntrys(entrys)
        })
    })

    function handleSearch(event) {
        event.preventDefault();
        const query = filter.toLowerCase();
        const matchedEntrys = entrys.filter(entry => {
            return (
            entry.firstName.toLowerCase().includes(query) ||
            entry.lastName.toLowerCase().includes(query) ||
            entry.date.includes(query)
            );
        });
        setFilteredEntrys(matchedEntrys);
    }

    return (
        <div>
            <div className='log-page'>
            <form onSubmit={handleSearch}>
                Search by Name or Date: <input onChange={event => setFilter(event.target.value)} />
                <button>OK</button>
            </form>
            
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
            {filteredEntrys.map((filteredEntry, index) => (
                <EntryItem key={filteredEntry.id} showCount={true} index={index + 1} entry={filteredEntry}  />
            ))}
        </div>
            
        </div>
        
    );
};

export default Search;