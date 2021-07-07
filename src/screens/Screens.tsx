import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import HomeScreen from "./homescreen/HomeScreen";
import PartnerScreen from "./partnerscreen";
import PriceScreen from "./pricingscreen";

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
          <Route path="/pricing">
            <PriceScreen />
          </Route>
          <Route path="/partners">
            <PartnerScreen />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
