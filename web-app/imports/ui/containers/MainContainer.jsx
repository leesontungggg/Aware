import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";
import MainPage from "../pages/MainPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

PageNavigator = props => {
  let data = props;
  return (
    <Router>
      <PrivateRoute path="/profile" Auth={data} component={ProfilePage} />
      <Route
        path="/"
        exact
        render={props => (
          <MainPage {...props} currentUser={data} isAuthed={true} />
        )}
      />

      {/* <Route path="/users/" component={Users} /> */}
    </Router>
  );
};

function PrivateRoute({ component: Component, ...rest }) {
  console.log(rest);
  let isAuthed = rest.Auth.currentUser !== null;
  console.log(isAuthed);
  return (
    <Route
      path="/profile"
      render={props => 
        isAuthed ? (
          <Component {...props} currentUser={rest.Auth.currentUser}/>
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}

export default (MainContainer = createContainer(({ params }) => {
  const currentUser = Meteor.user();
  console.log(currentUser);
  return {
    currentUser
  };
}, PageNavigator));
