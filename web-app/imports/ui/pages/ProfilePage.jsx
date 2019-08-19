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
      emailValidate: "uncheck",
      nameValidate: "uncheck"
      //   isAuthenicated: this.getMeteorData()
    };
    this.emailRef = React.createRef();
    this.nameRef = React.createRef();

    this.validateEmail = this.validateEmail.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  //   getMeteorData = () => {
  //     return Meteor.userId() !== null ;
  //   };

  onSettingClick = () => {
    this.setState({ menuSelect: "setting" });
  };

  changeEditState = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onEmailChange(event) {
    event.preventDefault();
    if (this.validateEmail(this.emailRef.current.value)) {
      this.setState({ emailValidate: true });
    } else {
      this.setState({ emailValidate: false });
    }

    // This part will check all input field and make the register button clickable

    // if (
    //   this.nameRef.current.value.length > 1 &&
    //   this.validateEmail(this.emailRef.current.value) &&
    //   this.passwordRef.current.value.length > 6
    // ) {
    //   this.setState({ registerButtonReady: "yes" });
    // } else {
    //   this.setState({ registerButtonReady: "not" });
    // }
  }

  render() {
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
                <a href="#" onClick={this.changeEditState}>
                  Edit
                </a>
              </div>

              <div
                className="gray-background"
                style={{ display: this.state.editMode ? "none" : "flex" }}
              >
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

              <div
                className="gray-background-edit"
                style={{ display: this.state.editMode ? "flex" : "none" }}
              >
                <div className="name-field">
                  <h5>
                    <strong>NAME</strong>
                  </h5>
                  <input
                    className="input-name"
                    placeholder="Enter your name..."
                    type="name"
                    ref={this.nameRef}
                  />
                </div>
                <div className="email-field">
                  <h5>
                    <strong>EMAIL</strong>
                  </h5>
                  <input
                    className={
                      this.state.emailValidate === "uncheck"
                        ? "input-email"
                        : this.state.emailValidate
                        ? "input-email"
                        : "input-email-error"
                    }
                    placeholder="Enter your email..."
                    type="email"
                    ref={this.emailRef}
                    onChange={this.onEmailChange}
                  />
                  <p
                    style={{
                      visibility:
                        this.state.emailValidate === "uncheck"
                          ? "hidden"
                          : this.state.emailValidate
                          ? "hidden"
                          : "visible"
                    }}
                  >
                    Please enter a valid e-mail!
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
