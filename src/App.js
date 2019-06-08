import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchBar from "./components/searchbar";
import Navbar from "./components/navbar";
import Recipe from "./components/recipe";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/recipes/:id" exact component={Recipe} />
          <Route path="/" exact component={SearchBar} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
