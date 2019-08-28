import React from 'react'
import ReactPlayer from 'react-player'
import StartStop from './StartStop.png'
import PlayButton from './PlayButton.png'

export default class VideoPlayer extends React.Component{
  state = {
    playing: true,
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handlePlay = () => {
    this.setState({ playing: true })
  }

  handlePause = () => {
     this.setState({ playing: false })
   }

  render(){
    const { playing } = this.state
    return (
      <>
        {this.props.videoId === ""?
          <div className="videoplayer">
          <img className="playButton" alt="Play Button" src={PlayButton}/>
          </div>
        :
        this.props.videoId === undefined?
          <h4>Error Search Again :)</h4>
        :
          <ReactPlayer
            width='100%'
            height='20em'
            url={this.props.url}
            playing={playing}
            controls={true}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onError={e => console.log('onError', e)}
          />
        }
        <img
          className="startStop"
          src={StartStop}
          onClick={this.handlePlayPause}
        />
      </>
    )
  }
}
