import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function MainContent(){
    //have to convert array of todosData into array of TodoItem
    //use map method! 

    //for each thing => return a TodoItem with an object called item that has a ={thing} inside it.
    const todoItems = todosData.map(eachThing => <TodoItem key = {eachThing.id} item = {eachThing}/>);
    return(
        <main className="todo-list">
            {/* need checkboxes next to each thing in the list. */}
            {todoItems}
        </main>
        
    )
}
export default MainContent 