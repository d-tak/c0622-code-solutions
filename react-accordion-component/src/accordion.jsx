import React from 'react';

const list = [
  {
    id: 1,
    subject: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.  With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    id: 2,
    subject: 'Cascading Style Sheet',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup langugage like HTML.  CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    id: 3,
    subject: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.  JavaScript has curly-bracket syntax, dynamic typing, prototype-based object orientation, and first-class functions.'
  }
];

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
        {list.map((language, id) => {
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
