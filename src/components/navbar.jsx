import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  renderNav(brand) {
    return (
      <div className="row navbar">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <Link className="navbar-brand" to="/">
            {brand}
          </Link>
        </div>
        <div className="col-sm-4">
          <i className="fab fa-twitter-square iconSize" />
          <i className="fab fa-instagram iconSize" />
          <i className="fab fa-facebook-square iconSize" />
          <i className="fab fa-pinterest-square iconSize" />
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderNav("flavorhub")}</div>;
  }
}

export default Navbar;
