"use client";
import React, { useState } from 'react';

type ButtonProps = {
    trueResult:number;
    falseResult:number
}

const Button = ({trueResult, falseResult}:ButtonProps) => {
    const line = [true, false];
    const randomLine = Math.floor(Math.random() * line.length);
    const trueLine = line[randomLine];
  
    const [direction, setDirection] = useState<boolean>(trueLine);
  return (
    <div className="article__buttons">
    {direction ? (
      <>
        <button>{trueResult}</button>
        <button>{falseResult}</button>
      </>
    ) : (
      <>
        <button>{falseResult}</button>
        <button>{trueResult}</button>
      </>
    )}
  </div>
  )
}

export default Button;
