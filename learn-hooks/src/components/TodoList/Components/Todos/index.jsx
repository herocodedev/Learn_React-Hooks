import React from 'react';
import PropTypes from 'prop-types';

Todos.propTypes = {
    TodoList:PropTypes.array,
    onTodoList:PropTypes.func
};

Todos.default = {
    TodoList:[],
    onTodoList:null
}
function Todos(props) {
    const {TodoList,onTodoList} = props

    const handleTodoClick = (todo) => {
        if(onTodoList){
            onTodoList(todo)
        }
    }
    return (
        <ul>
           {TodoList.map((todo,index) => {
               console.log(todo)
                return (
                <li 
                key={index}
                onClick = {() => handleTodoClick(todo)}
                >
                {todo.title}
                </li>)
            })}

        </ul>
    );
}

export default Todos;