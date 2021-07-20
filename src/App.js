import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { useState } from 'react';
import React from 'react';
import Kalkulator from './container/Kalkulator';

function App() {
  return (
    <div>
      <Kalkulator/>
    </div>
  );
}

export default App;
