import React, { useEffect, useState } from "react";

type NumbersProps = {
  firstNumber: number;
  secondNumber: number;
  trueItem: string;
};

const Numbers = ({ firstNumber, secondNumber, trueItem }: NumbersProps) => {
  

  return (
    <div className="article__content">
      <p>{firstNumber}</p>
      <p>{trueItem}</p>
      <p>{secondNumber}</p>
    </div>
  );
};

export default Numbers;
