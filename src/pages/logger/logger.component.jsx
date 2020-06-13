import React from 'react';
import LogItem from '../../components/log-item/log-item.component';

const Logger = () => (
    <div>
        <label>
            Job Number:
            <select id="jobNumber" name="jobNumber">
                <option value="18109">18109</option>
                <option value="23165">23165</option>
                <option value="49255">49255</option>
            </select>   
        </label>
        
        <label for="search">Search by Date:</label>

        <input type="date" id="search" name="search-by-date"
            value="">
        </input>

        <LogItem />
    </div>
);

export default Logger;