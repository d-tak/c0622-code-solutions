import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicks: this.state.clicks + 1
    }));
  }

  render() {
    const count = this.state.clicks;
    let color;
    if (count < 3) {
      color = 'darkpurple';
    } else if (count < 6) {
      color = 'purple';
    } else if (count < 9) {
      color = 'pink';
    } else if (count < 12) {
      color = 'orange';
    } else if (count < 15) {
      color = 'yellow';
    } else {
      color = 'white';
    }
    return (
      <button onClick={this.handleClick} className={color}>
        Hot Button
      </button>
    );
  }
}

// if (count < 3) {return(<button onClick={this.handleClick} className={color}>Sheesh</button>)}
