import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search__wrapper">
            <input type="text" className="search" placeholder="enter city"/>
        </div>
    )
}

export default SearchBar
