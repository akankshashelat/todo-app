import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";


//changing the function to a class with a state.
class MainContent extends React.Component{

    constructor(){
        super();
        this.state = {
            todoThings: todosData}
        
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(id){

        this.setState(prevState => {
            const updated = prevState.todoThings.map(
                eachThing => {
                    if(eachThing.id === id){
                        eachThing.completed = !eachThing.completed
                    }
                    return eachThing})

            return{todoThings: updated}})
                     
    }
    render(){
        //have to convert array of todosData into array of TodoItem
        //use map method! 
        //for each thing => return a TodoItem with an object called item that has a ={thing} inside it.
        const todoItems = this.state.todoThings.map(eachThing => 
        <TodoItem key = {eachThing.id} 
        item = {eachThing} 
        handleChange = {this.handleChange}/>);

        return(
            <main className="todo-list">
                {/* need checkboxes next to each thing in the list. */}
                {todoItems}
            </main>
            
        )
    }
}
export default MainContent 