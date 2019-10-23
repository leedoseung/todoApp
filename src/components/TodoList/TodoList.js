import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    //shouldComponentUpdate(nextProps, nextState) {
     //   return this.props.todos !== nextProps.todos;
   // }

    render() {
        const {todos, onToggle, onRemove } = this.props;
        const todosList = todos.map( (todo , index) => (
            <TodoItem 
               key={todo.get('id')}
               done={todo.get('done')} 
               onToggle={() => onToggle(index)}
               onRemove={ () => onRemove(index)}
               >
               {todo.get('text')}
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
