import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Main from "../pages/Main";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import UserTables from "../pages/UserTables";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/:slug/profile" component={UserProfile} />
        <PrivateRoute exact path="/:slug/tables" component={UserTables} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
