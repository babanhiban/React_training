import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Nhập tên..." />
      <button onClick={focus}>Focus input</button>
    </div>
  );
}

export default FocusInput;
