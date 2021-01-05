import React, { Component } from 'react';

class SearchBar extends Component {
  callApi = (event) => {
    // console.log(event.target.value);
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.callApi} />
    );
  }
}

export default SearchBar;
