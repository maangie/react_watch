import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { vi } from 'vitest';
import App from './App.jsx';

vi.mock('./Timer.jsx', () => ({
  default: () => null,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);

  act(() => {
    root.render(<App />);
  });

  act(() => {
    root.unmount();
  });
});
