import React, { Component } from "react";
import { useFirestore } from "react-redux-firebase";
import { firestoreConnect } from "react-redux-firebase";
class AddTrack extends Component {
  state = {
    Artist_Name: "",
    Track_Name: "",
    Album_Name: "",
    Embed_Url: "",
    Lyrics: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitClick = (e) => {
    e.preventDefault();
    const {
      Artist_Name,
      Track_Name,
      Album_Name,
      Embed_Url,
      Lyrics,
    } = this.state;

    const NewLyrics = {
      Artist_Name,
      Track_Name,
      Album_Name,
      Embed_Url,
      Lyrics,
    };

    const { firestore } = this.props;
    firestore
      .add("Lyrics", NewLyrics)
      .then((err) => this.props.history.push("/"));
  };
  render() {
    const {
      Artist_Name,
      Track_Name,
      Album_Name,
      Embed_Url,
      Lyrics,
    } = this.state;
    return (
      <div className="row">
        <div className="col-8 mx-auto">
          <div className="card card-block  mb-4">
            <div className="card-body">
              <p className="display-4 text-center">
                <i className="fas fa-music mr-1"></i>Submit Lyrics
              </p>

              <form action="" onSubmit={this.onSubmitClick}>
                <div className="form-group ">
                  <label htmlFor="Artist_Name">Artist Name</label>
                  <input
                    type="text"
                    name="Artist_Name"
                    value={Artist_Name}
                    onChange={this.onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Track_Name">Track Name</label>
                  <input
                    type="text"
                    name="Track_Name"
                    value={Track_Name}
                    onChange={this.onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Album_Name">Album Name</label>
                  <input
                    type="text"
                    name="Album_Name"
                    value={Album_Name}
                    onChange={this.onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Embed_Url">Embed Url</label>
                  <input
                    type="text"
                    name="Embed_Url"
                    value={Embed_Url}
                    onChange={this.onChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Lyrics">Lyrics</label>
                  <textarea
                    type="text"
                    name="Lyrics"
                    value={Lyrics}
                    onChange={this.onChange}
                    className="form-control"
                    required
                  />
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default firestoreConnect()(AddTrack);
