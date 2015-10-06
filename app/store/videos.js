const STORAGE_KEY = "videos";

class VideosStore {
  getAllVideos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  }


  addVideo(data) {
    let videos = this.getAllVideos();
    let value = JSON.stringify(data);

    videos.push(value);
    localStorage.setItem(STORAGE_KEY, videos);
  }
}

export default VideosStore
