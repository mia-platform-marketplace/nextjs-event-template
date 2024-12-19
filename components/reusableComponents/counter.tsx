'use client'

import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';

const Counter = ({ targetNumber, duration = 2000 } : {targetNumber: number | string, duration: number}) => {
    const [count, setCount] = useState(0);
    const number = typeof targetNumber === 'number'? targetNumber : parseInt(targetNumber)
  
    useEffect(() => {
      let startTimestamp: number = 0;
      let animationFrameId: any;
  
      const animateCounter = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
  
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const newCount = Math.floor(progress * number);
        setCount(newCount);
  
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCounter);
        }
      };
  
      animationFrameId = requestAnimationFrame(animateCounter);
  
      return () => cancelAnimationFrame(animationFrameId); 
    }, [number, duration]);

  return (
    <div>
      <Typography variant='bodyXXXL'>{count}</Typography>
    </div>
  );
};

export default Counter;