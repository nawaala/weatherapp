import './Search.css';
import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions} from '../Components/Api';

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)
    const loadOptions = async (inputValue) => {
    try {
        const response = await fetch( GEO_API_URL, geoApiOptions);
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
                debounceTimeout = {1000}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
           />
        </div>
    )
}

export default Search