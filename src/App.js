import React, {Component} from 'react';
import Menu from './Components/MenuComponent.js';
import { Navbar,NavbarBrand } from 'reactstrap';
import {DISHES} from './shared/dishes.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        dishes: DISHES
    };
  }
render(){
return(
    <div className="App">
      <Navbar dark color = "primary">
      <div className = "container">
        <NavbarBrand href = "/"> Brand</NavbarBrand>
       </div>
      </Navbar>
      <hr />
      <Menu dishes={this.state.dishes} />
    </div>

);
}
}
export default App;
