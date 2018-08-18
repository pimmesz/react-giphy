import React, { Component } from 'react';

class Gif extends Component {
  handleClick() {
    this.props.select(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
    <div className="selected-gif" onClick={this.handleClick.bind(this)} >
      <img src={src} className="gif" alt=""/>
    </div>
    );
  }
}

export default Gif;
