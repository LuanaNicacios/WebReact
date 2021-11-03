import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route,} from
'react-router-dom'; 

function App (){
    
  return (

   

     <div className= "App">
      <Router>
         <Navbar />
         <Switch>
           <Route path='/' exact />
         </Switch>
      </Router>

      <img src="/imgs/Brecho.png" alt=""/>

       <img src="/imgs/categories.png" alt=""/>
    
      </div>
  

  )

}
export default App; 


    