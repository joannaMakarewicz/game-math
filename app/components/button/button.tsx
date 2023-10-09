"use client";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "../button/button.css";

type ButtonProps = {
  trueResult: number;
  falseResult: number;
};

const Button = ({ trueResult, falseResult }: ButtonProps) => {
  const line = [true, false];
  const randomLine = Math.floor(Math.random() * line.length);
  const trueLine = line[randomLine];
  const trueAnswer: MutableRefObject = useRef();
  const falseAnswer: MutableRefObject = useRef();
  const [goodMark, setGoodMark] = useState<boolean>(false);
  const [badMark, setBadMark] = useState<boolean>(false);

  const showTrueAnswer = () => {
setGoodMark(true);
setBadMark(false);
}

const showFalseAnswer = () => {
  setBadMark(true);
  setGoodMark(false);
  }
 

  return (
    <div className="article__buttons">
          <button onClick={showTrueAnswer} ref={trueAnswer} className={goodMark? "article__button article__button--true" : "article__button"}>
            {trueResult}
          </button>
          <button onClick={showFalseAnswer} ref={falseAnswer} className={badMark? "article__button article__button--false" : "article__button"}>
            {falseResult}
          </button>
    </div>
  );
};

export default Button;
