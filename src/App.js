import React from 'react';
import Menu from './Components/MenuComponent.js';
import { Navbar,NavbarBrand, Button } from 'reactstrap';
import './App.css';

class App extends React.Component{
render(){
return(
    <div className="App">
      <Navbar dark color = "primary">
      <div className = "container">
        <NavbarBrand href = "/"> Brand</NavbarBrand>
       </div>
      </Navbar>
      <hr />
      <Menu />
    </div>
);
}
}
export default App;
