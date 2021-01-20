import React from "react";
import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3 app__sidebar">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route>
                <Redirect to="/about" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
