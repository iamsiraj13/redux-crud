import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const Todo = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3>Todo Application</h3>
                        </div>
                        <div className="card-body">
                            <CreateTodo/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;