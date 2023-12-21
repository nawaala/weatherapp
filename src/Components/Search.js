import './Search.css';
import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)
    const loadOptions = (inputValue) => {
        return fetch
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange (searchData);
    }

    return(
        <div className='search-bar'>
            <AsyncPaginate
                placeholder={"Search for city"}
                debounceTimeout = {600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
           />
        </div>
    )
}

export default Search