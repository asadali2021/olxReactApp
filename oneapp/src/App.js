import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TitleBar from './Container/TitleBar';
import NavCat from './Container/NavCat';
import Hero from './Container/Imagehero';
import Pictures from './Gallery';
import LoadBtn from './Container/Load';
import Footer from './Container/Footer';
import Form from './Container/AddPost';
import Login from './Container/Login';
import '../src/App.css';
import Details from './Container/Details';
import Home from './Container/Home';
import Sell from './Container/Sell';
import Addopen from './Container/Addopen';
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Sell" component={Sell} />
          <Route exact path="/Addopen/:id" component={Addopen} />

        </Switch>
      

        {/* <TitleBar />
        <NavCat />
        <Hero />
        <Details />
        <LoadBtn />
      <Footer /> */}
      {/* <Pictures  /> */}
        
        {/* <Form /> */}
       
        {/* <TitleBar />
        <NavCat />
        <Details />
        
        <Footer /> */}


      </div>
    )
  }
}

// style={{listStyle:"none", display:"flex", marginLeft:"90px"}}
// style={{marginRight:"30px"}}
// style={{marginRight:"30px"}}
// style={{marginRight:"30px"}}
// style={{marginRight:"30px"}}
// style={{marginRight:"30px"}}