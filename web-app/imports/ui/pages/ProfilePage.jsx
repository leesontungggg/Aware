import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./profile-page.css";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelect: "setting",
      editMode: false,
      //   isAuthenicated: this.getMeteorData()
    };
  }

  //   getMeteorData = () => {
  //     return Meteor.userId() !== null ;
  //   };

  onSettingClick = () => {
    this.setState({ menuSelect: "setting" });
  };

  render() {
    console.log(this.props);
    // if (this.props.currentUser) {
    //   console.log('Render is running')
    //   // this.props.history.push("/");
    // }
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
              <div className="header-edit">
                <h4>
                  <strong>Information</strong>
                </h4>
                <a href='#'>
                  Edit
                </a>
              </div>

              <div className="gray-background" style= {{display: this.state.editMode ? 'none' : 'flex'}}>
                <div className="name-div">
                  <h4>
                    <strong>Name</strong>
                  </h4>
                  <h5>
                    {this.props.currentUser
                      ? this.props.currentUser.username
                      : ""}
                  </h5>
                </div>

                <div className="email-div">
                  <h4>
                    <strong>Email</strong>
                  </h4>
                  <h5>
                    {this.props.currentUser
                      ? this.props.currentUser.emails[0].address
                      : ""}
                  </h5>
                </div>
              </div>

              <div className="gray-background-edit" style= {{display: this.state.editMode ? 'flex' : 'none'}}>
                <div className="name-div">
                  <h4>
                    <strong>Name</strong>
                  </h4>
                  <h5>
                    {this.props.currentUser
                      ? this.props.currentUser.username
                      : ""}
                  </h5>
                </div>

                <div className="email-div">
                  <h4>
                    <strong>Email</strong>
                  </h4>
                  <h5>
                    {this.props.currentUser
                      ? this.props.currentUser.emails[0].address
                      : ""}
                  </h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
