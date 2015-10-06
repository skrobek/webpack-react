import React from "react";

class Actions extends React.Component {
  render() {
    return(
      <div className="btn-group">
        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#">Add Video</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Clear List</a></li>
        </ul>
      </div>
    );
  }
}

export default Actions;
