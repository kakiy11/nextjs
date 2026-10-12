'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Это Client Component: кнопка реагирует на нажатия в браузере.</p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Кликов: {count}
      </button>
      <button className="secondary-button" type="button" onClick={() => setCount(0)}>
        Сбросить
      </button>
    </div>
  );
}
