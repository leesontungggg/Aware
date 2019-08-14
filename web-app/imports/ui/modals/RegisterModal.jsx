import React, { Component } from "react";
import { Accounts } from 'meteor/accounts-base'

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {nameValidate: false, emailValidate:false,passwordValidate:false};
    this.nameRef = React.createRef()
    this.emailRef = React.createRef()
    this.passwordRef = React.createRef()
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
  }

  onRegisterSubmit(event) {
      event.preventDefault();
    // Accounts.createUser({email:this.emailRef.current.value,password:this.passwordRef.current.value,profile:{name:this.nameRef.current.value}}
    //     ,(error) => {
    //         console.log(error);
    //     })

    if(this.passwordRef.current.value.length > 6) {
        this.setState({passwordValidate:true})
    } else {
        this.setState({passwordValidate:false})
    }
  }

  render() {
    return (
      <div id="registerModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal">
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
                  <input placeholder="Enter your name..." type="name" ref={this.nameRef} />
                  <p>Please enter a valid name!</p>
                </div>
                <div className="email-field">
                  <h5>
                    <strong>EMAIL</strong>
                  </h5>
                  <input placeholder="Enter your email..." type="email"  ref={this.emailRef} />
                  <p>Please enter a valid e-mail!</p>
                </div>
                <div className="password-field">
                  <h5>
                    <strong>PASSWORD</strong>
                  </h5>
                  <input placeholder="Enter your password..." type="password"  ref={this.passwordRef} />
                  <p style={{visibility: this.state.passwordValidate ? ( this.passwordRef.current.value.length > 6 ? 'hidden' : 'visible') : 'hidden'}}>Your passwords must be more than 6 characters!</p>
                </div>
                <p className="agree-sentence">
                  By creating an account you agree to the{" "}
                  <a>
                    <strong>Terms of Service</strong>
                  </a>{" "}
                  and
                  <a>
                    <strong> Privacy Policy</strong>
                  </a>
                </p>
                <button className="register-confirm-button" onClick={this.onRegisterSubmit}>
                  <strong>Register</strong>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <div>
                <p>
                  Do you have an account?{" "}
                  <a>
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

