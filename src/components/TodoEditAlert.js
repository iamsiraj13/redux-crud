import Swal from "sweetalert2";
import { editTodo } from "../redux/state/todo/todoSlice";
import store from "../redux/store/store";

 
const TodoEditAlert = (i,item) => {
    Swal.fire({
        title: 'Update Task', 
        input:"text", 
        inputValue:item,
        inputValidator:(value)=>{
            if( value ){
                store.dispatch(editTodo({index:i,task:value}))
            }
        }
        
      }).then((result) => {
        if (result.isConfirmed) {
           store.dispatch(removeTodo(i))
        }
      })
};

export default TodoEditAlert;