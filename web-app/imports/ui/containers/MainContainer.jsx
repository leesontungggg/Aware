import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";
import MainPage from "../pages/MainPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

PageNavigator = props => {
  let data = props;

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/profile"
            render={props => (
              <ProfilePage {...props} currentUser={data} isAuthed={true} />
            )}
          />
          <Route
            path="/"
            exact
            render={props => (
              <MainPage {...props} currentUser={data} isAuthed={true} />
            )}
          />

          {/* <Route path="/users/" component={Users} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default (MainContainer = createContainer(({ params }) => {
  const currentUser = Meteor.user();
  return {
    currentUser
  };
}, PageNavigator));
