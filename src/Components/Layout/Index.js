import React from "react";
import Tracks from "../Lyrics/Tracks";
import Search from "../Lyrics/Search";
export default function Index() {
  return (
    <React.Fragment>
      <Search></Search>
      <Tracks />
    </React.Fragment>
  );
}
