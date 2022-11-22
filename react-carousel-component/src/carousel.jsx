import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };

    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.circleClick = this.circleClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.rightClick(), 3000);
  }

  rightClick() {
    this.componentDidMount();
    clearInterval(this.timer);

    if (this.state.value >= this.props.images.length) {
      this.setState({ value: 1 });
    } else {
      this.setState(itisfinished => ({
        value: itisfinished.value + 1
      }));
    }
  }

  leftClick() {
    if (this.state.value <= 1) {
      this.setState({ value: this.props.images.length });
    } else {
      this.setState(itisfinished => ({
        value: itisfinished.value - 1
      }));
    }
  }

  circleClick(event) {
    var id = Number(event.target.getAttribute('id'));
    this.setState({ value: id });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column-full">
            <div className="row align-center space-between">
              <div className="column-fourth">
                <i onClick={this.leftClick} className='arrow-left fa-solid fa-angle-left arrow-size'></i>
              </div>
              <div className="image-container align-center">
                {this.props.images.map(image => {
                  return (this.state.value === image.id && (
                  <img key={image.id} src={image.src} />
                  ));
                })}
              </div>

              <div className="column-fouth">
                <i onClick={this.rightClick} className='arrow-right fa-solid fa-angle-right arrow-size'></i>
              </div>
            </div>

            <div className="row align-center">
              <div className='row align-center justify-center circle-row'>
                {this.props.images.map(image => {
                  return (
                    this.state.value === image.id
                      ? <i onClick={this.circleClick} className="fa-solid fa-circle circle-focus" id={image.id} />
                      : <i onClick={this.circleClick} className="fa-regular fa-circle circle-focus" id={image.id} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
