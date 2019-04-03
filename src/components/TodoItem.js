import React from "react";


function TodoItem (props){
    return(
    <form className = "todo-item">
        <input 
        type="checkbox" 
        checked ={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}
        /> 
        {props.item.text} 
    </form>
    )
}
export default TodoItem