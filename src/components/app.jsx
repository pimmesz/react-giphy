import React, { Component } from 'react';

import giphy from 'giphy-api';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      gif: "xBoysJgwhLEZtAjbY1"
    }
  }

  search = (query) => {
    giphy('vnTZ7O4A1VON9uva7Mo1fXY6iZheXIyI').search({
      q: query,
      limit: 10,
      rating: 'g'
    }, (err, res) => {
      this.setState({gifs: res.data})
    });
  }

  select = (id) => {
    this.setState({gif: id})
  }


  render() {
    const gifs = this.state.gifs;
    return (
      <div>
        <div className="left-scene">
          <Search search={this.search}/>
          <Gif id={this.state.gif} select={this.select}  />
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
