import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import AppContainer from "../../ui/containers/AppContainer";

const history = createBrowserHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={AppContainer} />
          {/* <Route path="/about" component={App} /> */}
          {/* <Route path="/topics" component={Topics} /> */}
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
