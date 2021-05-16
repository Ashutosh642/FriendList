import React from 'react';
import ReactDOM from 'react-dom';
import FrndsForm from './FrndsForm'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrndsForm />, div);
});