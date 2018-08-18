import React, { Component } from 'react';

class Search extends Component {
  handleUpdate(e) {
    this.props.search(e.target.value);
  }

  render() {
    return (
    <div>
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate.bind(this)} />
    </div>
    );
  }
}

export default Search;
