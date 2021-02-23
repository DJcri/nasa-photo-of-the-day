import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./css/index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <header>
        <div className="container">
          <div className="logo-container">
            <NavLink to="/" className="logo">
              🚀<span className="astro">ASTRO</span>-NEWS
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/about">About</Route>
        <Route path="/contact">Contact</Route>
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
