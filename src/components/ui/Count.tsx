"use client";
import React, { useState, useEffect } from "react";

type CountProps = {
  endValue: string;
  duration?: number;
};

const Count = ({ endValue, duration = 2000 }: CountProps) => {
  const numericEndValue = parseInt(endValue, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * numericEndValue));

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [numericEndValue, duration]);

  return <span>{count}</span>;
};

export default Count;
