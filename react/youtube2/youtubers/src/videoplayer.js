import React from "react";
import playbutton from "./PlayButton.png";
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {
    const opts = {
     height: '390',
      width: '640'
    }

  return(
    props.videoId === ""?
       <div className="videoplayer">
        <img className="playButton" alt="Play Button" src={playbutton}/>
      </div>
      :
      props.videoId === undefined?
      <h4>Error Search Again :)</h4>
      :
      <YouTube
        opts={opts}
        videoId={props.videoId}
      />
  )
}
export default VideoPlayer



















// import React from "react";
// import playbutton from "./PlayButton.png";
// import startstop from "./StartStop.png";
// import YouTube from 'react-youtube';
//
// export default class VideoPlayer extends React.Component {
//
//   handleClick = () => {
//     this.setState({})
//   }
//
//   render () {
//     debugger
//     const opts = {
//      height: '390',
//       width: '640'
//     }
//
//      return (
//       <>
//           {this.props.videoId === ""?
//           <div className="videoplayer">
//             <img className="playButton" alt="Play Button" src={playbutton}/>
//           </div>
//           :
//           this.props.videoId === undefined?
//           <h4>Error Search Again :)</h4>
//           :
//           <YouTube
//             opts={opts}
//             videoId={this.props.videoId}
//           />
//           }
//         <img onClick={this.handleClick}alt="start/stop" className="startStop" src={startstop} />
//       </>
//     );
//   }
// }
