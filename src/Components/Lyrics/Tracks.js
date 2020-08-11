import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from "../Layout/spinner";
import Track from "./Track";
import { compose } from "redux";
import { connect } from "react-redux";
import { isLoaded, isEmpty, firestoreConnect } from "react-redux-firebase";
class Tracks extends Component {
  render() {
    const { Lyrics } = this.props;
    if (!isLoaded(Lyrics)) {
      return <Spinner></Spinner>;
    }
    if (isEmpty(Lyrics)) {
      return <Spinner></Spinner>;
    } else {
      return (
        <div>
          <h3 className="text-center mt-2 mb-4">Top 10 Tracks</h3>
          <div className="row">
            {Lyrics.map((track) => (
              <Track
                key={track.id}
                Id={track.id}
                Artist_Name={track.Artist_Name}
                Album_Name={track.Album_Name}
                Track_Name={track.Track_Name}
                Lyrics={track.Lyrics}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}
export default compose(
  firestoreConnect([{ collection: "Lyrics" }]),
  connect((state, props) => ({
    Lyrics: state.firestore.ordered.Lyrics,
  }))
)(Tracks);
