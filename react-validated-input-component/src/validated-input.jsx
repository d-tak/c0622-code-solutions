import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: false,
      password: '',
      message: 'Please enter your password.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ password: value });

    const length = value.length;
    if (length === 0) {
      this.setState({
        status: false,
        message: 'Please enter your password.'
      });
    } else if (length < 8 && length > 0) {
      this.setState({
        status: false,
        message: 'Your password is too short.'
      });
    } else if (length >= 8) {
      this.setState({
        status: true,
        message: ''
      });
    }
  }

  render() {
    return (
      <form>
        <label>Password</label>
        <input type="password" onChange={this.handleChange}></input>
        <i className={this.state.status ? 'fa-regular fa-circle-check green-check' : 'fa-solid fa-xmark red-xmark'}></i>
        <p className="status-message">{this.state.message}</p>
      </form>
    );
  }
}
