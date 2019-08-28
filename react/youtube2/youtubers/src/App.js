import React from "react";
import VideoPlayer from "./videoplayer";
import Search from "./search";
import Attributes from "./Attributes";
import "./styles.css";

export default class App extends React.Component {
  state = {
    video:"",
    videoId:"",
    url:""
  }

  handleSubmit = term => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=1&q=${term}&key=AIzaSyCfy0N0DFjJQEUis4VxAGNMSodTyKNSg3Y`)
    .then(r=>r.json())
    .then(r=>this.setState({video: r.items[0], videoId: r.items[0].id.videoId, url:`https://www.youtube.com/watch?v=${r.items[0].id.videoId}`}))
  }

  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} />
        <br />
        <VideoPlayer url={this.state.url} videoId={this.state.videoId}/>
        <Attributes atts={this.state.video}/>
      </div>
    )
  }
}
