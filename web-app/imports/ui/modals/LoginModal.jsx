import React, { Component } from "react";
import "./loginModal.css";


class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="loginModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal">
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
                  <input placeholder="Enter your email..." type="email" />
                  <p style={{visibility:'hidden'}}>Your email is invalid!</p>
                </div>
                <div className="password-field">
                  <h5>
                    <strong>PASSWORD</strong>
                  </h5>
                  <input placeholder="Enter your password..." type="password" />
                  <p style={{visibility:'hidden'}}>Wrong password</p>
                </div>
                <div className="password-option-field">
                  <label class="container-label">
                    Remember Password
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark" />
                  </label>
                  <a>
                    Forgot your password?
                  </a>
                </div>
                <button className="login-confirm-button">
                  <strong>Login</strong>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <div>
                <p>
                  Don't have an account?{" "}
                  <a href="#" type="button" data-dismiss="modal" data-toggle="modal" data-target="#registerModal">
                    <strong>Register</strong>
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

export default LoginModal;
