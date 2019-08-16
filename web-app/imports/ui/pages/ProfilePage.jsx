import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./profile-page.css";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelect: "setting"
      //   isAuthenicated: this.getMeteorData()
    };
  }

  //   getMeteorData = () => {
  //     return Meteor.userId() !== null ;
  //   };

  componentWillMount() {
    if (!this.props.currentUser) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.currentUser) {
      this.props.history.push("/");
    }
  }

  onSettingClick = () => {
    this.setState({ menuSelect: "setting" });
  };

  render() {
    if (this.props.currentUser) {
      this.props.history.push("/");
    }
    // console.log('this is authen' + this.props.isAuthed)
    // let currentUser = this.props.currentUser;
    // let userDataAvailable = currentUser !== undefined;
    // let loggedIn = currentUser && userDataAvailable;
    return (
      <div>
        <div className="container-fluid">
          <div className="profile-container">
            <div className="sidenav">
              <h2>My Account</h2>
              <a
                className={
                  this.state.menuSelect === "setting" ? "yellow" : "black"
                }
                href="#"
                onClick={this.onSettingClick}
              >
                Account setting
              </a>
              <a
                className={
                  this.state.menuSelect === "password" ? "yellow" : "black"
                }
                href="#"
                onClick={() => {
                  this.setState({ menuSelect: "password" });
                }}
              >
                Change password
              </a>
            </div>

            <div className="main">
              <h4>
                <strong>Information</strong>
              </h4>
              <div className="gray-background" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
