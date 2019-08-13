import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import createHashHistory from "history/createHashHistory";
import App from "./App";

const history = createHashHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={App} />
          {/* <Route path="/topics" component={Topics} /> */}
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
