import React from "react";

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">User1</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
