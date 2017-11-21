// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  handleClick() {
    this.setState(prevState => {
      return { timesClicked: prevState.timesClicked + 1 };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;
