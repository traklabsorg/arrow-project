import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import HomeScreen from "./homescreen/HomeScreen";
import PartnerScreen from "./partnerscreen";

interface Props {}

export default function Screens({}: Props): ReactElement {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/pricing">
            <HomeScreen />
          </Route>
          <Route exact path="/partners">
            <PartnerScreen />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
