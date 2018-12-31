import React from "react";

// Generic navbar for top of all pages
class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col-md-4">
          <h1>
            <a className="text-white" href="/">Beer Menu</a>
          </h1>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <a href="/menu" className="navbar-brand">Menu</a>
          <a href="/admin" className="navbar-brand">Admin</a>
        </div>
      </nav>
    )
  }
};

export default Nav;