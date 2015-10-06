import React from "react";
import VideosListItem from './list-item.jsx';
import Store from './../../store/videos';


class VideosList extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store();

    this.state = {
      videos: this.store.getAllVideos()
    }
  }


  renderVideoItem(item, i) {
    return <VideosListitem video={item} />
  }


  renderVideosList() {
    if (this.state.videos.length > 0) {
      return this.state.videos.map(this.renderVideoItem);
    }

    return <p>List is empty</p>
  }


  render() {
    return(
      <div className="videos-list">
        {this.renderVideosList()}
      </div>
    );
  }
}

export default VideosList;
