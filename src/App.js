import React, { useState,useEffect} from 'react';

import './style.css';
import './styles/NavBar.css';
import NavBar from './components/NavBar'
import Transactions from './components/Transactions'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' 
import Trade from './components/Trade';


function App() {
 
 return(
   <Router>
     
      <NavBar />
      <Switch>
      <Route path="/transactions" exact component={Transactions} />
      <Route path="/trade" exact component={Trade} />
      </Switch>
    </Router>
 )
  
  
  
  
  
  
  


}

export default App;
