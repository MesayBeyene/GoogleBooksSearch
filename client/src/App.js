import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/saved" exact component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
