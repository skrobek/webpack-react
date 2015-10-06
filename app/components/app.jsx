import React from "react";
import Navbar from './navbar.jsx';
import Actions from './actions.jsx';
import VideosList from './videos/list.jsx';

class App extends React.Component {
  render() {
    return(
      <div className="react-app">
        <Navbar />
        <div className="container-fluid">
          <Actions />
          <VideosList />
        </div>
      </div>
    );
  }
}

export default App;
