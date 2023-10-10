import React from "react";
import Image from "next/image";
import Button from "../components/button/button";
import Numbers from "../components/numbers/numbers";

export default function Game() {
  const countItem = ["+", "-"];
  const randomItem = Math.floor(Math.random() * countItem.length);
  const firstNumber = Math.round(Math.random() * 10);
  const secondNumber = Math.round(Math.random() * 10);
  const trueItem = countItem[randomItem];
  let trueResult;
  const falseResult = Math.floor(Math.random() * 15);

  if (trueItem === "+") {
    trueResult = firstNumber + secondNumber;
  } else {
    trueResult = firstNumber - secondNumber;
  }

  return (
    <main className="main">
      <article className="article">
        <h1 className="article__heading">Wybierz poprawny wynik</h1>
        <Numbers
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          trueItem={trueItem}
        />
        <Button trueResult={trueResult} falseResult={falseResult} />
      </article>
    </main>
  );
}
// {firstNumber+secondNumber}
// {firstNumber-secondNumber}
