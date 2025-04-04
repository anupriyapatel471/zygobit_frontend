/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";

const Count = ({ endValue }: any) => {
  const numericEndValue = parseInt(endValue, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = Math.ceil(duration / numericEndValue);
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericEndValue) {
        clearInterval(interval);
      }
    }, incrementTime);
    return () => clearInterval(interval);
  }, [numericEndValue]);

  return <span>{count}</span>;
};

export default Count;
