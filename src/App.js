import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar";
import Index from "./Components/Layout/Index";
import TrackLyrics from "./Components/Lyrics/TrackLyrics";
import AddTrack from "./Components/Lyrics/AddTrack";
import ShowModal from "./Components/Lyrics/ShowModal";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <React.Fragment>
            <Navbar></Navbar>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route
                  exact
                  path="/lyrics/track/:id"
                  component={TrackLyrics}
                ></Route>
                <Route
                  exact
                  path="/lyrics/submitLyrics"
                  component={AddTrack}
                ></Route>
                <Route exact path="/showmodal" component={ShowModal}></Route>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
