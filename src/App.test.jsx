import React from 'react';
import ReactDOM from 'react-dom';
import { vi } from 'vitest';
import App from './App.jsx';

vi.mock('./Timer.jsx', () => ({
  default: () => null,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
