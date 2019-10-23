import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainers from '../containers/TodoInputContainers';
import TodoListContainers from '../containers/TodoListContainers';

class App extends Component {
    render(){
        return (
            <PageTemplate>
                <TodoInputContainers/>
                <TodoListContainers/>
            </PageTemplate>
        )
    }
}




export default App;
