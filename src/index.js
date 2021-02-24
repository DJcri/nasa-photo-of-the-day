import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

//Components
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";

//Styling
import "./css/index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: ${(props) => props.theme.headerHeight};
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding-top: ${(props) => props.theme.headerHeight};
`;

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      {/*Header*/}
      <header>
        <HeaderContainer className="container">
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
        </HeaderContainer>
      </header>
      {/*Content*/}
      <ContentContainer>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </ContentContainer>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
