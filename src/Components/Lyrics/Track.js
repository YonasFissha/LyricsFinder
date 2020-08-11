import React from "react";
import { Link } from "react-router-dom";
export default function Track(props) {
  const { Id, Artist_Name, Album_Name, Track_Name } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h6>{Artist_Name}</h6>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i>Track
            </strong>
            : {Track_Name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i>Album
            </strong>
            : {Album_Name}
          </p>
          <Link to={`lyrics/track/${Id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right mr-1"></i>View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
