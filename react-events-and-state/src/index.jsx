import React from 'react';
import ReactDOM from 'react-dom/client';

// function CustomButton(props) {
//   return (
//     <button>{props.text}</button>
//   );
// }

class CustomButton extends React.Component {
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
    if (this.state.isClicked) {
      return <button> Thanks! </button>;
    } else {
      return <button onClick={this.handleClick}> Click Me! </button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
