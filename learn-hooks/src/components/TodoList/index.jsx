import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';

TodoList.propTypes = {

};

function TodoList(props) {
    const initTodoList = [
        { id: 1, title: 'I love code 😎' },
        { id: 2, title: 'I love code code 😍' },
        { id: 3, title: 'I love code code code 🎉🎉' },
    ]
    const [todos, setTodos] = useState(initTodoList)
    const [id,setId] = useState(initTodoList.length)
    // length dau tien
    const onTodoList = (todo) => {
        let newTodos = [...todos]
        let todoIdx = newTodos.findIndex(todoChild => todoChild.id === todo.id)
        if (todoIdx < 0) return;

        newTodos.splice(todoIdx, 1)
        setTodos(newTodos)
    }

    const onSubmitForm = (formValues) => {
        let idNew = id
        let newTodos = [...todos]
        let todoNew = {
            id: idNew + 1,
            ...formValues
        }
        newTodos.push(todoNew)
        console.log("newTodos: ", newTodos)
        setTodos(newTodos)
        setId(idNew+1)
    }
    return (
        <div style={{ cursor: 'pointer' }}>
            TodoList
            <TodoForm onSubmitForm={onSubmitForm} />
            <Todos TodoList={todos} onTodoList={onTodoList} />
        </div>
    );
}

export default TodoList;