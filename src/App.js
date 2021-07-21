import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { useState } from 'react';
import React from 'react';
import Kalkulator from './container/Kalkulator';
import calc from "./img/calc2.jpg"

class App extends React.Component {
  state = { a: false }
   
  open = () => {
    this.setState((state) => {
      return { a: !state.a }
    })
  }
   
  render() {
    return (<div className="App pt-2">
      <div>
        {this.state.a && <Kalkulator/>}

        <Button color="primary" className="my-3 button shadow-none" onClick={this.open} >
          <img className="calc" src={calc} alt="rasm" />
          </Button>
        
        
      </div>
    </div>
     
    );
  }
}
export default App;
