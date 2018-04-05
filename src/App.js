import React, { Component } from 'react';
import Input from './components/Input.js';
import Definition from './components/Definition.js';
import DefinitionList from './components/DefinitionList.js';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="">
        <Input search={this.searchTerm}/>
      </div>
    );
  }
}


export default App;
