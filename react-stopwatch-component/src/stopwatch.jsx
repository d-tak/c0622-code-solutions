import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      play: false,
      intervalId: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.reset = this.reset.bind(this);
  }

  handlePlay() {
    this.setState({ play: this.state.play === false });
    if (this.state.play === false) {
      this.intervalId = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  reset() {
    if (this.state.play === false) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div onClick={this.reset} className="circle">
            <div className="number"> {this.state.seconds}
            </div>
          </div>
        </div>
          <i onClick={this.handlePlay} className={this.state.play ? 'fa-solid fa-pause' : 'fa-solid fa-play'}>
          </i>
      </div>
    );
  }
}
