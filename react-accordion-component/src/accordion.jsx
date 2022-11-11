import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const languages = event.target.getAttribute('devLanguages');
    if (languages === this.state.id) {
      this.setState({ id: null });
    } else {
      this.setState({ id: languages });
    }
  }

  render() {
    let tab;
    return (
      <ul>
        {this.props.list.map((language, id) => {
          if (this.state.id === language.subject) {
            tab = 'yomama';
          } else {
            tab = 'hidden';
          }
          return (
            <li key={id}>
              <div>
                <h3 devLanguages={language.subject} onClick={this.handleClick}>{language.subject}</h3>
              </div>
              <div className={`${tab}`}>
                <p>{language.description}</p>
              </div>
            </li>
          );
        })
        }
      </ul>
    );
  }
}
