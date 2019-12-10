import React, { useRef, useState, useEffect } from "react";

function Example7() {
  const inputE1 = useRef(null);
  const onButtonClick = () => {
    inputE1.current.value = "hello,jsPang";
    console.log(inputE1);
  };
  const [text, setText] = useState("jspang");

  return (
    <div>
      <input ref={inputE1} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
export default Example7;
