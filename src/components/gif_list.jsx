import React, { Component } from 'react';

class GifList extends Component {
  constructor(props) {
    super(props);

    this.state = { id: "xBoysJgwhLEZtAjbY1" };
  }

  render() {
    const src = `https://media.giphy.com/media/${this.state.id}/giphy.gif`
    return (
    <div >
      <img src={src} alt=""/>
    </div>
    );
  }
}

export default GifList;
