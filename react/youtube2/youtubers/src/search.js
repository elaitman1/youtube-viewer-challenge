import React from "react";

export default class Search extends React.Component {
  state = {
    search: ""
  };

  update = e => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  };

  render() {
    return (
      <div className="searchGrid">
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchbox"
            type="text"
            value={this.state.search}
            placeholder="Search"
            onChange={this.update}
          />
        </form>
      </div>
    )
  }
}
