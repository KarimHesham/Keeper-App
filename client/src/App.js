import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Landing from "./components/Landing";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {
  return (
    <Router>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/notes/:username" exact component={Home} />
      <Route path="/notes/:username/add" exact component={CreateArea} />
      <Route path="/notes/:username/:id" exact component={Note} />
      <Route path="/" exact component={Landing} />
    </Router>
  );
}

export default App;
