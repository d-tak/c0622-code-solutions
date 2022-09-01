import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    if (this.state.isClicked === false) {
      return (
        <React.Fragment>
        <div onClick={this.handleClick} className='pill'>
          <div className='background-off'>
            <div className='slide-off'>
            </div>
          </div>
        </div>
        <span className='status-text'> Off </span>
        </React.Fragment>
      );
    } else if (this.state.isClicked === true) {
      return (
        <React.Fragment>
          <div onClick={this.handleClick} className='pill'>
            <div className='background-on'>
              <div className='slide-on'>
              </div>
            </div>
          </div>
          <span className='status-text'> On </span>
        </React.Fragment>
      );
    }
  }
}
