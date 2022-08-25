import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,customValue } from './redux/state/counter/counterSlice';

const App = () => {


  const count = useSelector(state=>state.counter.value)
  const dispatch = useDispatch();

  const custom = useRef(); 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header bg-secondary text-light text-center">
              Counter App
            </div>
            <div className="card-body">
              <h1 className="text-center">{count}</h1>
              <div className='d-flex justify-content-center'>
                <button onClick={()=>dispatch(increment())} className="btn btn-primary m-2">increase</button>
                <button onClick={()=>dispatch(decrement())} className="btn btn-primary m-2">decrease</button>
              </div>
              <div className="card-footer">
                <input type="number" className='form-control' ref={custom} required/>
                <br />
                <button onClick={()=>dispatch(customValue(custom.current.value))} className="btn btn-danger w-50">Set Custom</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;