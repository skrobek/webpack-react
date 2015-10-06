import React from "react";

class VideosListitem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: this.props.video
    }
  }

  render() {
    return(
      <div className="videos-list-item">
        {this.state.video}
      </div>
    );
  }
}

VideosListitem.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideosListitem;
