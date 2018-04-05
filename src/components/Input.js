import React, { Component } from 'react';

class Input extends Component {
  state = {
    searchTerm : ''

  };
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.search(this.state.searchTerm);
  }
  handleKeyboard = (e)=>{
    let query = e.target.value;
    this.setState({searchTerm: query});
  }
  render() {
    return (
      <div className="Input">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="" onChange={(e)=>{this.handleKeyboard(e)} }></input>
        </form>
      </div>
    );
  }
}

export default Input;
