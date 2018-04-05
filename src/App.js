import React, { Component } from 'react';
import Input from './components/Input.js';
import Definition from './components/Definition.js';
import DefinitionList from './components/DefinitionList.js';
import './App.css';

class App extends Component {

  handleSearch = (searchTerm)=>{
    console.log(searchTerm);
  }
  render() {
    return (
      <div className="">
        <Input search={(searchTerm)=>{this.handleSearch(searchTerm)}}/>
      </div>
    );
  }
}


export default App;
