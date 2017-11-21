// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: "1080p" } }
    };
  }

  handleBitrate() {
    //   addressInfo: Object.assign({}, this.state.addressInfo, {
    //   city: 'New York City',
    // })

    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }
  handleResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: "720p" }
      })
    });
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate.bind(this)}>
          Bitrate
        </button>
        <button
          className="resolution"
          onClick={this.handleResolution.bind(this)}
        >
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
