import React from 'react';
import LogItem from '../../components/log-item/log-item.component';
import { Link } from 'react-router-dom';
import useAuth from '../../redux/user/useAuth';

import './logger.styles.scss';

function Logger() {
    const user = useAuth();

    return(
        <div>
        {user ? (
            <LogItem />
            ) : (
            <Link className='language' to='/admin'>
                Please LOG IN
            </Link>
            )}
        </div>
    );
}

export default Logger;