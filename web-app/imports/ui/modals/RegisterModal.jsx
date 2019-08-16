import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValidate: "uncheck",
      emailValidate: "uncheck",
      passwordValidate: "uncheck",
      registerButtonReady: "not",
      serverError: ""
    };
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onRegisterSubmit(event) {
    event.preventDefault();
    if (this.state.registerButtonReady === "yes") {
      Accounts.createUser(
        {
          username: this.nameRef.current.value,
          email: this.emailRef.current.value,
          password: this.passwordRef.current.value,
          profile: { name: this.nameRef.current.value }
        },
        error => {
          if (error) {
            this.setState({
              serverError: error.reason,
              registerButtonReady: "not"
            });
          } else {
            window.location.reload();
          }
          console.log(error.reason);
        }
      );
    }
  }

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

    if (
      this.nameRef.current.value.length > 1 &&
      this.validateEmail(this.emailRef.current.value) &&
      this.passwordRef.current.value.length > 6
    ) {
      this.setState({ registerButtonReady: "yes" });
    } else {
      this.setState({ registerButtonReady: "not" });
    }
  }

  onPasswordChange(event) {
    event.preventDefault();

    if (this.passwordRef.current.value.length > 6) {
      this.setState({ passwordValidate: true });
    } else {
      this.setState({ passwordValidate: false });
    }

    // This part will check all input field and make the register button clickable

    if (
      this.nameRef.current.value.length > 1 &&
      this.validateEmail(this.emailRef.current.value) &&
      this.passwordRef.current.value.length > 6
    ) {
      this.setState({ registerButtonReady: "yes" });
    } else {
      this.setState({ registerButtonReady: "not" });
    }

    // if (this.passwordRef.current.value.length > 6) {
    //   this.setState({ passwordValidate: true });
    // } else {
    //   this.setState({ passwordValidate: false });
    // }
  }

  render() {
    return (
      <div id="registerModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <div className="register-body-modal">
                <h2>
                  <strong>Register</strong>
                </h2>
                <div className="name-field">
                  <h5>
                    <strong>NAME</strong>
                  </h5>
                  <input
                    placeholder="Enter your name..."
                    type="name"
                    ref={this.nameRef}
                  />
                  <p
                    style={{
                      visibility:
                        this.state.nameValidate === "uncheck"
                          ? "hidden"
                          : "visible"
                    }}
                  >
                    Please enter a valid name!
                  </p>
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
                <div className="password-field">
                  <h5>
                    <strong>PASSWORD</strong>
                  </h5>
                  <input
                    className={
                      this.state.passwordValidate === "uncheck"
                        ? "input-password"
                        : this.state.passwordValidate
                        ? "input-password"
                        : "input-password-error"
                    }
                    placeholder="Enter your password..."
                    type="password"
                    ref={this.passwordRef}
                    onChange={this.onPasswordChange}
                  />
                  <p
                    style={{
                      visibility:
                        this.state.passwordValidate === "uncheck"
                          ? "hidden"
                          : this.state.passwordValidate
                          ? "hidden"
                          : "visible"
                    }}
                  >
                    Your passwords must be more than 6 characters!
                  </p>
                </div>
                <p className="agree-sentence">
                  By creating an account you agree to the{" "}
                  <a href="#">
                    <strong>Terms of Service</strong>
                  </a>{" "}
                  and{" "}
                  <a href="#">
                    <strong>Privacy Policy</strong>
                  </a>
                </p>
                <button
                  className={
                    this.state.registerButtonReady === "not"
                      ? "register-confirm-button"
                      : "register-confirm-button-ready"
                  }
                  onClick={this.onRegisterSubmit}
                >
                  <strong>Register</strong>
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
                  Do you have an account?{" "}
                  <a
                    href="#"
                    type="button"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    <strong>Log In</strong>
                  </a>
                </p>
              </div>
              {/* <button
                  type="button"
                  class="btn btn-default"
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

export default RegisterModal;
