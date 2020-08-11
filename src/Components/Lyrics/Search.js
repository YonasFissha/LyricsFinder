import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  state = {
    search: "",
  };
  onChange = (e) => {
    this.setState({ search: e.target.value });
  };
  onSubmit = () => {};
  render() {
    const { search } = this.state;
    return (
      <div className="card card-block text-center mb-4">
        <div className="card-body">
          <p className="display-4">
            <i className="fas fa-music mr-1"></i>Search For a Song
          </p>
          <p>Get lyrics for any track</p>

          <form action="" onSubmit={this.onSubmit()}>
            <div className="form-group">
              <input
                type="text"
                value={search}
                name="search"
                onChange={this.onChange}
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-primary btn-block">
              Get Track Lyrics
            </button>
          </form>
        </div>
      </div>
    );
  }
}
