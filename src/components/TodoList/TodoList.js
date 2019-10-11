import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        const {todos, onToggle, onRemove } = this.props;
        const todosList = todos.map( (todo) => (
            <TodoItem 
               key={todo.id}
               done={todo.done} 
               onToggle={() => onToggle(todo.id)}
               onRemove={ () => onRemove(todo.id)}
               >
               {todo.text}
            </TodoItem>
         )
        );
        return (
            <div>
            {todosList}
            </div>
        );
    }
}

export default TodoList;
