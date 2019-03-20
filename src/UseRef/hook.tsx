import React, { useRef } from 'react';

export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef.current) return;

    inputRef.current.focus();
    inputRef.current.select();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
