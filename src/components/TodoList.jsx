import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../redux/state/todo/todoSlice";
import TodoDeleteAlert from "./TodoDeleteAlert";
import TodoEditAlert from "./TodoEditAlert";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.value);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          {
            todos && todos.length>0?<table className="table">
            <thead>
              <tr>
                <td>No</td>
                <td>Task Name</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {todos.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i+1}</td>
                    <td>{item}</td>
                    <td>
                      <button onClick={()=>TodoEditAlert(i,item)}  className="btn btn-info">Edit</button>
                    </td>
                    <td>
                      <button onClick={()=>TodoDeleteAlert(i)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>:<h3 className="text-center">No Todos</h3>
          }
        </div>
      </div>
    </div>
  );
};

export default TodoList;
