import React from "react";


function TodoItem (props){
    return(
    <form className = "todo-item">
        <input type="checkbox"/> {props.item.text} <br/>
    </form>
    )
}
export default TodoItem