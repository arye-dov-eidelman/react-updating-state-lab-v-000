import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    };
    
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p' }
      }
    })
  }
 
  render() {
    return (
      <div>
        bitrate: <button class="bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button>
        resolution: <button class="resolution" onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
