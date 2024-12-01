import React from "react";
import './filter.css'

function Filter({ onReset, onAlphabetical, onReverseAlphabetical }) {
    return (
        <div className="filter">
            <button className='filter' onClick={onReset}>Zresetuj</button>
            <button className='filter' onClick={onAlphabetical}>Alfabetycznie</button>
            <button className='filter' onClick={onReverseAlphabetical}>Odwrotnie do alfabetu</button>
        </div>
    );
}

export default Filter;