import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./containers/HomePage";
import PhotosPage from "./containers/PhotosPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/photos" component={PhotosPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
