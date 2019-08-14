import React, { Component } from "react";
import { withHistory } from "react-router-dom";
import MainContainer from "./MainContainer.jsx";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";


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
                <a className="logo-aware navbar-brand" href="#">
                  <img src="/logo.png" className="Logo" />
                </a>
              </div>
              <div className="login-register navbar-nav">
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
                <button href="" class="badge1 cart-button " data-badge="7">
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
        <RegisterModal/>
        {/* Modal Login */}
        <LoginModal/>
        <MainContainer />
      </div>
    );
  }
}
