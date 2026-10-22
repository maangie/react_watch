import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, vi } from 'vitest';
import Timer from './Timer.jsx';

let container = null;
let root = null;

/**
 * Timer コンポーネントを DOM にレンダリングし、コンテナ要素を返す
 * @returns {HTMLElement} Timer をレンダリングしたコンテナ要素
 */
function renderTimer() {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);

  act(() => {
    root.render(<Timer />);
  });

  return container;
}

afterEach(() => {
  if (container) {
    act(() => {
      root.unmount();
    });
    container.remove();
    container = null;
    root = null;
  }

  document.body.innerHTML = '';
  vi.useRealTimers();
});

it('クラッシュせずにレンダリングできる', () => {
  vi.useFakeTimers();

  renderTimer();
});

it('.timer div に時刻が表示される', () => {
  vi.useFakeTimers();

  renderTimer();

  const timer = document.querySelector('.timer');

  expect(timer).not.toBeNull();
  expect(timer.textContent.trim()).not.toBe('');
});

it('1秒後に時刻が更新される', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2020-01-01T00:00:00.000Z'));

  renderTimer();

  const timer = document.querySelector('.timer');
  const initialText = timer.textContent;

  act(() => {
    vi.advanceTimersByTime(1000);
  });

  expect(timer.textContent).not.toBe(initialText);
});
