import React, { Component } from "react";
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  render() {
    console.log('this is running')

    let currentUser = this.props.currentUser;
    let userDataAvailable = currentUser !== undefined;
    let loggedIn = currentUser && userDataAvailable;
    // console.log(currentUser)
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            FUCKK
          </h1>
        </div>
      </div>
    );
  }
}

// MainPage.propTypes = {
//   username: React.PropTypes.string
// };
