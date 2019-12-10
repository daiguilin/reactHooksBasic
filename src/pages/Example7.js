import React, { useState, useEffect, useCallback } from "react";

function UseWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return size;
}

function Example7() {
  const size = UseWinSize();
  return (
    <div>
      页面Size:{size.width}x{size.height}
    </div>
  );
}
export default Example7;
