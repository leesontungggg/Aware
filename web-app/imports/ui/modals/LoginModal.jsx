import React, { Component } from "react";
import "./loginModal.css";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValidate: "uncheck",
      passwordValidate: "uncheck",
      loginButtonReady: "not",
      serverError: ""
    };
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onLoginSubmit= event => {
    event.preventDefault();
    if (this.state.loginButtonReady === "yes") {
      Meteor.loginWithPassword(
        this.emailRef.current.value,
        this.passwordRef.current.value,
        error => {
          if (error) {
            this.setState({
              serverError: error.reason,
              loginButtonReady: "not"
            });
          } else {
            window.location.reload();
          }
        }
      );
    }
  }

  onEmailChange(event) {
    event.preventDefault();
    if (this.validateEmail(this.emailRef.current.value)) {
      this.setState({ emailValidate: true });
    } else {
      this.setState({ emailValidate: false });
    }

    // This part will check all input field and make the register button clickable

    if (
      this.validateEmail(this.emailRef.current.value) &&
      this.passwordRef.current.value.length > 6
    ) {
      this.setState({ loginButtonReady: "yes" });
    } else {
      this.setState({ loginButtonReady: "not" });
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onPasswordChange(event) {
    event.preventDefault();
    // This part will check all input field and make the register button clickable

    if (
      this.validateEmail(this.emailRef.current.value) &&
      this.passwordRef.current.value.length > 6
    ) {
      this.setState({ loginButtonReady: "yes" });
    } else {
      this.setState({ loginButtonReady: "not" });
    }
  }

  render() {
    return (
      <div id="loginModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <div className="login-body-modal">
                <h2>
                  <strong>Login</strong>
                </h2>
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
                    Your email is invalid!
                  </p>
                </div>
                <div className="password-field">
                  <h5>
                    <strong>PASSWORD</strong>
                  </h5>
                  <input
                    className="input-password"
                    placeholder="Enter your password..."
                    type="password"
                    ref={this.passwordRef}
                    onChange={this.onPasswordChange}
                  />
                  <p style={{ visibility: "hidden" }}>Wrong password</p>
                </div>
                <div className="password-option-field">
                  <label className="container-label">
                    Remember Password
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark" />
                  </label>
                  <a>Forgot your password?</a>
                </div>
                <button
                  className={
                    this.state.loginButtonReady === "not"
                      ? "login-confirm-button"
                      : "login-confirm-button-ready"
                  }
                  onClick={this.onLoginSubmit}
                >
                  <strong>Login</strong>
                </button>
                <p
                  className={
                    this.state.serverError.length > 3
                      ? "error-server"
                      : "error-server-hidden"
                  }
                >
                  {this.state.serverError}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <p>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    type="button"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#registerModal"
                  >
                    <strong>Register</strong>
                  </a>
                </p>
              </div>
              {/* <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
