import React, { Component } from 'react';
import Input from './components/Input';
import DefinitionList from './components/DefinitionList';
import axios from 'axios'

import './App.css';

class App extends Component {

  state = {
    urbanDic: {}
  }

componentDidMount(){
  axios.get(`http://api.urbandictionary.com/v0/define?term=wat`)
  .then(urbanDic => this.setState({ urbanDic :urbanDic.data }))
}

searchTerm(term){
  axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`)
  .then(urbanDic => this.setState({ urbanDic :urbanDic.data }))
}


  render() {
    console.log(this.state.urbanDic)
    return (
      <div className="">
        <Input />
        <Input search={this.searchTerm}/>
      </div>
    );
  }
}


export default App;
