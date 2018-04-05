import React, { Component } from 'react';
import Input from './components/Input';
import DefinitionList from './components/DefinitionList';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      urbanDic : ''
    }
    this.searchTerm = this.searchTerm.bind(this)
  }

  componentDidMount(){
    axios.get(`http://api.urbandictionary.com/v0/define?term=wat`)
    .then(urbanDic => this.setState({ urbanDic :urbanDic.data }))
  }

  searchTerm(term){
    console.log(term);
    axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`)
    .then((urbanDic) =>{
      this.setState({ urbanDic : urbanDic.data })
      console.log(this.state.urbanDic);
    })
  }
  render() {
    return (
      <div className="">
        <Input search={this.searchTerm}/>
      </div>
    );
  }
}


export default App;
