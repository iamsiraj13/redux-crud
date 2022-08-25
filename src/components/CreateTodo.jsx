import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/state/todo/todoSlice';


const CreateTodo = () => {

    const Dispatch = useDispatch();
    const inputValue = useRef();

    

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-10">
                    <input ref={inputValue} type="text" className='form-control border border-1' required/>
                </div>
                <div className="col-2">
                    <button onClick={()=>Dispatch(addTodo(inputValue.current.value))} className="btn btn-primary">Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;