import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    
};

function TodoForm(props) {
    const {onSubmitForm} = props

    const [todoAdd,setTodoAdd] = useState("")

    const handleTodoChange = (e) => {
        setTodoAdd(e.target.value)
    }

    const handleSubmitForm = (e) => {
        if(!onSubmitForm) return;
        e.preventDefault()
        let formValues = {
            title:todoAdd
        }
        onSubmitForm(formValues)
    }

    return (
        <form onSubmit={(e) => handleSubmitForm(e)}>
            <input 
            type="text" 
            value={todoAdd} 
            onChange={(e) => handleTodoChange(e)}/>
        </form>
    );
}

export default TodoForm;