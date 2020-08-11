import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { firestoreConnect } from "react-redux-firebase";
class ShowModal extends Component {
  state = {
    Artist_Name: "",
    Track_Name: "",
    Album_Name: "",
    Embed_Url: "",
    Lyrics: "",
    setShow: true,
  };

  handleClose = () => {
    this.props.close();
  };
  handleShow = () => {
    this.setState({
      setShow: true,
    });
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
    firestore.add("Lyrics", NewLyrics);
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
      <>
        <Modal show={this.props.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fas fa-music mr-1"></i>Submit Lyrics
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-11 mx-auto">
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
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default firestoreConnect()(ShowModal);
