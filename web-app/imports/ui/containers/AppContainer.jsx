import React, { Component } from "react";
import { withHistory } from "react-router-dom";
import MainContainer from "./MainContainer.jsx";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
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

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="row-flex">
              <div class="navbar-left searchBox">
                <input
                  class="searchInput"
                  type="text"
                  name=""
                  placeholder="Search"
                />
                <button class="searchButton" href="#">
                  <i className="fa fa-search" />
                </button>
              </div>
              <div className="logo-container navbar-header navbar-center">
                <a className="logo-aware navbar-brand" href="#">
                  <img src="/logo.png" className="Logo" />
                </a>
              </div>
              <div className="login-register navbar-nav">
                <a href="#" className="register-button">
                  Register
                </a>
                <button href="#" className="login-button">
                  Login
                </button>
                <button href="" class="badge1 cart-button " data-badge="7">
                  <i className="fa fa-shopping-cart fa-2x" />
                </button>
              </div>
            </div>

            <div className="horizontal-line" ></div>

            <div className="row-flex categories-menu">
              <div class="dropdown">
                <button class="dropbtn">Mens</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">Ladies</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">Girls</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">Boys</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <MainContainer />
      </div>
    );
  }
}
