import React from 'react';
import logo from './logo.svg';
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
      <div>
         <Button color="primary" href = "https://www.google.com">Click!</Button>
      </div>
    </div>
);
}
}
export default App;
