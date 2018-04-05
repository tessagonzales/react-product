import React, { Component } from 'react';
import Input from './components/Input';
import DefinitionList from './components/DefinitionList';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      urbanDic : '',
      search : ''
    }
    this.searchTerm = this.searchTerm.bind(this)
  }

  componentDidMount(){
    axios.get(`http://api.urbandictionary.com/v0/define?term=urbandictionary`)
    .then(urbanDic => this.setState({ urbanDic :urbanDic.data }))
  }

  searchTerm(term){
    console.log(term);
    axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`)
    .then((urbanDic) =>{
      this.setState({ urbanDic : urbanDic.data , search : term})
      console.log(this.state.urbanDic);
    })
  }
  render() {
    return (
      <div className="">
        <div class="nav-bar bg-green text-center color-white">
          <div class="">URBAN </div>
          <div class=""> </div>
          <div class=""> </div>
          <div class=""> </div>
          <div class=""> </div>
          <div class=""> </div>
        </div><br/>
        <Input search={this.searchTerm}/><br/>
        <DefinitionList search={this.state.search} urbanDic={this.state.urbanDic} />
      </div>
    );
  }
}


export default App;
