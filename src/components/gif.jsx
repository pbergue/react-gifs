import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    const source = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={source} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
