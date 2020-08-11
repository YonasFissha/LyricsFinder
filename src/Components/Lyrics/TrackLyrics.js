import React, { Component } from "react";
import nl2br from "react-newline-to-break";
import { Link } from "react-router-dom";
import Spinner from "../Layout/spinner";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
class TrackLyrics extends Component {
  state = {
    lyr: {},
  };
  componentDidMount() {
    const { lyrics } = this.props;
    if (lyrics) {
      this.setState({
        lyr: lyrics,
      });

      console.log(this.state.lyr);
    }
  }
  render() {
    const { lyrics } = this.props;
    // console.log(lyrics);
    if (lyrics == undefined || lyrics.length == 0) {
      return <Spinner></Spinner>;
    } else {
      var myString = lyrics.Lyrics.replace(/\\n/g, "\n");
      // console.log(myString);
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-12">
              <Link to="/" className="btn btn-dark btn-sm mb-2">
                Go Back
              </Link>

              <div className="card shadow-sm">
                <h4 className="ml-4 mt-2 text-primary">{lyrics.Track_Name}</h4>
                <h6 className="ml-4  text-primary">
                  Artist: {lyrics.Artist_Name}
                </h6>
                <div className="row">
                  <div className="col-md-1 text-center mt-5">
                    <h4>
                      {" "}
                      <i className="fab fa-facebook text-primary"></i>
                    </h4>
                    <h4>
                      {" "}
                      <i className="fab fa-instagram text-primary"></i>
                    </h4>
                    <h4>
                      {" "}
                      <i className="fab fa-twitter text-primary"></i>
                    </h4>
                    <h4>
                      {" "}
                      <i className="fab fa-telegram text-primary"></i>
                    </h4>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">{nl2br(myString)}</div>
                  </div>
                  <div className="col-md-5">
                    <div className="embed-responsive embed-responsive-16by9 m-2">
                      <iframe
                        src={lyrics.Embed_Url}
                        className="embed-responsive-item"
                        frameBorder="1"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  {/* <div className="col-md-1"></div> */}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default compose(
  firestoreConnect((props) => [
    {
      collection: "Lyrics",
      storeAs: "lyrics",
      doc: props.match.params.id,
    },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    lyrics: ordered.lyrics && ordered.lyrics[0],
  }))
)(TrackLyrics);
