import './Search.css';
import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)
    const loadOptions = async (inputValue) => {
    try {
        const response = await fetch(GEO_API_URL, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
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