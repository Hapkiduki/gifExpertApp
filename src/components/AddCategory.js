import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputchange = (e) => {

        setInputValue(e.target.value)
    }

    const hamdleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {

            setCategories(
                cats => [inputValue, ...cats]
            );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={hamdleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputchange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}