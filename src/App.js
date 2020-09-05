import React from "react";
import "./App.css";
import Authentication from "./components/authentication/authentication";
import Home from "./components/home/home";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./core/browserHistory";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Authentication} />
        <Route path="/home" component={Home} />
        <Route path="**" render={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
}

export default App;
