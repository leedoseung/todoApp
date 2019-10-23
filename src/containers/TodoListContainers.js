import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import * as todosActions from '../modules/todos';

import TodoList from '../components/TodoList/TodoList';


export class TodoListContainers extends Component {
    handleToggle = (id) => {
        const { TodosActions } = this.props;
        console.log(id);
        TodosActions.toggle(id);
    }
    handleRemove = (id) => {
        const { TodosActions } = this.props;
        TodosActions.remove(id);
    }

    render() {
        const { todos } = this.props;
        const { handleRemove, handleToggle } = this;
        return (
            <TodoList
                todos = {todos}
                onToggle = {handleToggle} 
                onRemove = {handleRemove}
            />
        );
    }
}

export default connect(
    (state) => ({
        todos : state.todos
    }),
    (dispatch) => ({
        TodosActions : bindActionCreators(todosActions,dispatch)
    })
)(TodoListContainers);

