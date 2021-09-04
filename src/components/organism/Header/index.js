import { Button } from "../../atom";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container justify-content-end">
        <div className="menu-right d-flex">
          <Button
            type="link"
            href="/"
            className="btn d-flex  text-decoration-none"
          >
            <i className="fa fa-users me-1"></i>
            <span className="d-none d-sm-block">users</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
