import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Score from "./Score";

function Mainbody() {
  const [timer, setTimer] = useState(10);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [ballScore, setballScore] = useState(Math.floor(Math.random() * 10));
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          setShowScore(true);
          return prevTimer;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const newBalls = [];
    for (let i = 1; i < 109; i++) {
      const num = Math.floor(Math.random() * 10);
      newBalls.push(
        <button
          key={i}
          onClick={() => handleClick(num)}
          className="border-2 border-black rounded-full h-11 w-11 flex justify-center mb-1 p-1 font-medium text-2xl cursor-pointer bg-blue-900 text-white hover:bg-black"
        >
          {num}
        </button>
      );
    }
    setBalls(newBalls);
  }, []);

  function handleClick(num) {
    console.log("num", num);
    console.log("ballScore", ballScore);

    if (ballScore == num) {
      setScore((prev) => prev + 10);
      setballScore(Math.floor(Math.random() * 10));
    }
  }

  const handleLogout = () => {
    console.log("Logged out");
  };

  const username = localStorage.getItem("username");
  const [highScore, setHighScore] = useState(100);

  return (
    <>
      <Navbar
        username={username}
        score={score}
        highScore={highScore}
        onLogout={handleLogout}
        ballScore={ballScore}
      />

      {showScore ? (
        <Score score={score} />
      ) : (
        <div className="flex justify-center items-center h-full bg-yellow-200 pt-10">
          <div className="border-4 border-green-700 w-3/4 h-3/4 p-1 grid grid-cols-12 bg-green-400 rounded-xl mb-10">
            {balls}
          </div>
        </div>
      )}
    </>
  );
}

export default Mainbody;
