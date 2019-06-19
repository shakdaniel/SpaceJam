import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Characters, Technology } from "./pages";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Routes = () => (
  <Fragment>
    <Route component={ScrollToTop} />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/characters" render={() => <Characters />} />
      <Route exact path="/technology" render={() => <Technology />} />
    </Switch>
  </Fragment>
);

export default Routes;
