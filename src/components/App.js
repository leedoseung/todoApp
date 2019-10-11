import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({ id: index, text:`일정 ${index}`, done: false})
);

class App extends Component {
    state = {
        input: '',
        todos: initialTodos
    }

    id = 1

    getId= () => {
        return ++this.id;
    }

    handleChange = (e) => {
        this.setState({
            input : e.target.value
        });
    }

    handleInsert = () => {
        const { input, todos } = this.state;
        
        const newTodos = {
            text: input,
            done : false,
            id : this.getId()
        }

        this.setState({
            todos: [...todos, newTodos],
            input:''
        });
    }

    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex( todo => todo.id === id );

        const toggled = {
            ...todos[index] ,
            done : !todos[index].done
        };

        console.log(toggled);

        this.setState({
            todos : [
                ...todos.slice(0,index),
                toggled ,
                ...todos.slice(index+1,todos.length)
            ]
        })
    }

    handleRemove = (id) => {

        const {todos} = this.state;
        const index = todos.findIndex( todo => todo.id === id);
        this.setState({
            todos : [
                ...todos.slice(0,index),
                ...todos.slice(index + 1,todos.length)
            ]
        })
    }

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove
        } = this;

        return (
            <PageTemplate>
                <TodoInput onInsert={handleInsert} onChange={handleChange} value={input} />
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </PageTemplate>
        );
    }
}




export default App;
