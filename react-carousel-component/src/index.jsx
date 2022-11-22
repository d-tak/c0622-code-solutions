import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { id: 1, name: 'Bulbasaur', src: './images/001.png' },
  { id: 2, name: 'Charmander', src: './images/004.png' },
  { id: 3, name: 'Squirtle', src: './images/007.png' },
  { id: 4, name: 'Pikachu', src: './images/025.png' },
  { id: 5, name: 'JigglyPuff', src: './images/039.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images} />);
