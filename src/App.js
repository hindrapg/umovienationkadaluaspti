import React, {useEffect, useState} from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import About from './components/about';
import Favorite from './components/favorite';



function App(){
  return(
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" exact component={Home}></Route>
          <Route path="/favorite" exact component={Favorite}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Router>
      
    </React.Fragment>
  )
}

export default App;