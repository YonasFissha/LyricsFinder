import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Lyrics/Search";
const context = React.createContext();
const reducer = (state, action) => {
  console.log(action.payload);
  return {
    track_list: action.payload,
    heading: action.heading,
  };
};
export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
