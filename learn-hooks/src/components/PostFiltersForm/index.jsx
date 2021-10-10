import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props
    const [searchTerm, setSearchTerm]  = useState('')
    const typingTimeoutRef = useRef(null)

    const handleSearchTermChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if (!onSubmit) return;
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(function(){
            const formValues = {
                searchTerm:value,
            }
            onSubmit(formValues)
        },500) 
    }
    return (
        <form action="">
            <input type="text" value={searchTerm} onChange={(e) => handleSearchTermChange(e)} />
        </form>
    );
}

export default PostFiltersForm;