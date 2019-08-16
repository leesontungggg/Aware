import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppContainer from "../../ui/containers/AppContainer";

const history = createBrowserHistory();

class AppRouter extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default AppRouter;
