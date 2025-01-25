import React, { useState, useEffect } from "react";
 
const Count = ({ endValue }:any) => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = Math.ceil(duration / endValue);
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(interval);
      }
    }, incrementTime);
    return () => clearInterval(interval);
  }, [endValue]);
 
  return <span>{count}</span>;
};
 
export default Count