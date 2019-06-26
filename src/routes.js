import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Characters, Technology } from "./pages";

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/characters" render={() => <Characters />} />
    <Redirect exact from="/technology" to="/technology/Technical-Background" />
    <Route
      path="/technology/:slug"
      render={props => <Technology slug={props.match.params.slug} />}
    />
  </Switch>
);

export default Routes;
