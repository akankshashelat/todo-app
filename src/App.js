import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

//the function can only return one element, so you cannot return two divs.
// we also want App to be like a list of components that we create, so instead of mixing JSX and Components
// we only make a list of all components
function App(){
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}


export default App;





// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


