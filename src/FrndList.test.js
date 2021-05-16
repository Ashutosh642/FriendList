import React from 'react';
import ReactDOM from 'react-dom';
import FrndList from './FrndList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrndList />, div);
});