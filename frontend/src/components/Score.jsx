import React from "react";

const Score = ({score}) => {
  return (
    <>
      <div className=" h-full pt-10">
        <h1 className="flex justify-center text-4xl font-bold">Time's UP</h1>
        <br />
        <h1 className="flex justify-center text-4xl font-bold">Your Score is {score}</h1>
      </div>
    </>
  );
};

export default Score;
