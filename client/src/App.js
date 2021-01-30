import React from "react";
import {BrowserRouter as  Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Landing from "./components/Landing";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {
 

  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="https://stormy-castle-74654.herokuapp.com/signup" exact component={SignUp} />
      <Route path="https://stormy-castle-74654.herokuapp.com/signin" exact component={SignIn} />
      <Route path="https://stormy-castle-74654.herokuapp.com/notes/:username" exact component={Home} />
      <Route path="https://stormy-castle-74654.herokuapp.com/notes/:username/add" exact component={CreateArea} />
      <Route path="https://stormy-castle-74654.herokuapp.com/notes/:username/:id" exact component={Note} />
    </Router>
  );
}

export default App;
