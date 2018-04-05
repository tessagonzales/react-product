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
      <div className="position-center-half">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <input type="text" className="" onChange={(e)=>{this.handleKeyboard(e)} } placeholder="Search for Word"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
