import React, { Component } from "react";
import MainContainer from "./MainContainer.jsx";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenicated: this.getMeteorData() };

    this.renderUsername = this.renderUsername.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }

  getMeteorData() {
    return Meteor.userId() !== null;
  }

  //   componentWillMount(){
  //     if (!this.state.isAuthenticated) {
  //       this.props.history.push('/login');
  //     }
  //   }

  //   componentDidUpdate(prevProps, prevState){
  //     if (!this.state.isAuthenticated) {
  //       this.props.history.push('/login');
  //     }
  //   }

  onLogOut(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        window.location.reload();
      }
    });
  }

  renderUsername() {
    if (this.props.currentUser) {
      return this.props.currentUser.username;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="row-flex">
              <div className="navbar-left searchBox">
                <input
                  className="searchInput"
                  type="text"
                  name=""
                  placeholder="Search"
                />
                <button className="searchButton" href="#">
                  <i className="fa fa-search" />
                </button>
              </div>
              <div className="logo-container navbar-header navbar-center">
                <a className="logo-aware navbar-brand" href="/">
                  <img src="/logo@2x.png" className="Logo" />
                </a>
              </div>
              <div
                style={{ display: this.state.isAuthenicated ? "none" : "flex" }}
                className="login-register navbar-nav"
              >
                <button
                  href="#"
                  className="register-button btn btn-info btn-lg"
                  type="button"
                  data-toggle="modal"
                  data-target="#registerModal"
                >
                  Register
                </button>
                <button
                  href="#"
                  className="login-button btn btn-info btn-lg"
                  type="button"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Login
                </button>
                <button href="" className="badge1 cart-button " data-badge="7">
                  <i className="fa fa-shopping-cart fa-2x" />
                </button>
              </div>

              {/* UserPanel */}

              <div
                style={{ display: this.state.isAuthenicated ? "flex" : "none" }}
                className="login-register navbar-nav"
              >
                <div className="circle">
                  <i className="fa fa-user fa-2x" />
                </div>
                <div className="user-dropdown">
                  <button className="username-button ">
                    {this.renderUsername()} <i className="fa fa-caret-down" />
                  </button>
                  <div class="user-dropdown-content">
                    <div>
                      <div>
                        <i class="fa fa-user-circle fa-2x" />
                        <a href="/profile">View profile</a>
                      </div>

                      <div>
                        <i class="fa fa-user-circle fa-2x" />
                        <a href="#" onClick={this.onLogOut}>
                          Log out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button href="" className="badge1 cart-button " data-badge="7">
                  <i className="fa fa-shopping-cart fa-2x" />
                </button>
              </div>
            </div>

            <div className="horizontal-line" />

            <div className="row-flex categories-menu">
              <div className="dropdown">
                <button className="dropbtn">
                  Mens <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <a href="#">Tops</a>
                  <a href="#">Bottoms</a>
                  <a href="#">Dresses</a>
                  <a href="#">Jackets</a>
                  <a href="#">Shoes</a>
                  <a href="#">Accessories</a>
                  <a href="#">Sale</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Ladies <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <a href="#">Tops</a>
                  <a href="#">Bottoms</a>
                  <a href="#">Dresses</a>
                  <a href="#">Jackets</a>
                  <a href="#">Shoes</a>
                  <a href="#">Accessories</a>
                  <a href="#">Sale</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Girls <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <a href="#">Tops</a>
                  <a href="#">Bottoms</a>
                  <a href="#">Dresses</a>
                  <a href="#">Jackets</a>
                  <a href="#">Shoes</a>
                  <a href="#">Accessories</a>
                  <a href="#">Sale</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Boys <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <a href="#">Tops</a>
                  <a href="#">Bottoms</a>
                  <a href="#">Dresses</a>
                  <a href="#">Jackets</a>
                  <a href="#">Shoes</a>
                  <a href="#">Accessories</a>
                  <a href="#">Sale</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Modal Register */}
        <RegisterModal />
        {/* Modal Login */}
        <LoginModal />
        <MainContainer />
      </div>
    );
  }
}

export default (AppContainer = createContainer(({ params }) => {
  const currentUser = Meteor.user();
  // console.log(currentUser);
  return {
    currentUser
  };
}, NavigationBar));
