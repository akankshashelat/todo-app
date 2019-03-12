import React from "react";
import TodoItem from "./TodoItem";
// import "../App.css"

function MainContent(){
    return(
        <main className="todo-list">
            {/* need checkboxes next to each thing in the list. */}
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </main>
        
    )
}
export default MainContent 