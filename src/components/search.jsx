import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick() {
    this.state.clicked ? this.setState({ clicked: false}) : this.setState({ clicked: true});
  }

  render() {
    return (
    <div className={this.state.clicked ? "search clicked" : "search"} onClick={this.handleClick.bind(this)}>
      <h2 className="search-title">{this.props.title}</h2>
      <p>{this.props.body}</p>
    </div>
    );
  }
}

export default Search;
