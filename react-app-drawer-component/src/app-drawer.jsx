import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuBlock: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => ({
      menuBlock: !prevState.menuBlock
    }));
    // console.log(event.target);
  }

  render() {
    const menuBlock = this.state.menuBlock;
    const overlay = this.state.menuBlock ? '' : 'hidden';
    return (
    <div className="container">
      <div onClick={this.handleClick} className={menuBlock}>
        <i className= 'fa-solid fa-bars'></i>
      </div>
      <div className={overlay}>
        <div onClick={this.handleClick} className='background-color'>
          <div className='shade'>
            <div className='menu'>
              <span>MENU</span>
            </div>
            <div onClick={this.handleClick}>
                <div onClick={this.handleClick} className='menu-list'>About</div>
                <div onClick={this.handleClick} className='menu-list'>Get Started</div>
                <div onClick={this.handleClick} className='menu-list'>Sign In</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
