import React, { Component } from 'react';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <Search title="Boris" body="Boris" />
          <Gif />
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
