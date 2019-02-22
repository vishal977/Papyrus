import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Welcome'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import AboutUs from './Components/AboutUs'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Route exact path = '/' component = {Welcome}/>
          <Route path = '/home' component = {Home}/>
          <Route path = '/cart' component = {Cart}/>
          <Route path = '/contact' component = {Contact}/>
          <Route path = '/about' component = {AboutUs}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
