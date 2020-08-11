import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowModal from "../Lyrics/ShowModal";
class Navbar extends Component {
  state = {
    setShow: false,
  };

  handleClose = () => {
    this.setState({
      setShow: false,
    });
  };
  handleShow = () => {
    this.setState({
      setShow: true,
    });
  };
  render() {
    const { setShow } = this.state;
    return (
      <>
        <nav className="navbar navbar-dark bg-dark mb-5">
          <div className="container">
            <Link to="/" className="navbar-brand mb-0 h1 mx-auto">
              ZemaLyrics
            </Link>
            <div className="navbar-nav">
              {/* <Link
              to="/lyrics/submitLyrics"
              className="nav-item btn btn-primary"
            >
              <i className="fas fa-plus mr-2"></i>Submit Lyrics
            </Link> */}
              <button
                className="nav-item btn btn-primary"
                onClick={this.handleShow}
              >
                <i className="fas fa-plus mr-2"></i>Submit Lyrics
              </button>
            </div>
          </div>
        </nav>
        <ShowModal show={setShow} close={this.handleClose}></ShowModal>
      </>
    );
  }
}
export default Navbar;
