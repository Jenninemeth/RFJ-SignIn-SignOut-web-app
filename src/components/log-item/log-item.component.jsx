import React from 'react';
import FirebaseContext from '../../firebase/context';
import EntryItem from './entry-item.component';

function LogItem() {
    const { firebase } = React.useContext(FirebaseContext);
    const [entrys, setEntrys] = React.useState([])

    React.useEffect(() => {
        getEntrys()
    }, [])

    function getEntrys() {
        firebase.db.collection('log').onSnapshot(handleSnapshot)
    }

    function handleSnapshot(snapshot) {
        const entrys = snapshot.docs.map(doc => {
            return { ...doc.data() }
        })
        setEntrys(entrys)
    }
    return (
        <div>
            {entrys.map((entry, index) => (
                <EntryItem key={entry.lastName} showCount={true} entry={entry} index={index + 1} />
            ))}
        </div>
    );
};

export default LogItem;