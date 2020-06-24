import React from 'react';
import Search from './search.component';
import { Link } from 'react-router-dom';
import useAuth from '../../redux/user/useAuth';

import '../../pages/logger/logger.styles.scss';

function SearchPage() {
    const user = useAuth();

    return(
        <div>
        {user ? (
            <Search />
            ) : (
            <Link className='language' to='/admin'>
                Please LOG IN
            </Link>
            )}
        </div>
    );
}

export default SearchPage;