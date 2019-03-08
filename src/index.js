import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


function MyInfo(){
    //you can return only one JSX element. So can't add another ul or ol 
    return (
    <div>
        <h1> Akanksha</h1>
        <p>I'm trying to learn React from the free Code Camp.</p>
        <ul>
            <li> Vancouver</li>
            <li> Bampf</li>
            <li> Prague</li>
        </ul>
        
    </div>
    )
}

ReactDOM.render(
<MyInfo/>,
document.getElementById('root'));

