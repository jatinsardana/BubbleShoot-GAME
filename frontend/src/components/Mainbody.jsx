import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Score from "./Score";

function Mainbody() {
  const [timer, setTimer] = useState(20);
  const [showScore, setShowScore] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [ballScore, setBallScore] = useState(Math.floor(Math.random() * 10));
  const [balls, setBalls] = useState([]);
  const [highScore, setHighScore] = useState(140);

  const username = localStorage.getItem("username");

  useEffect(() => {
    let intervalId;
    if (!showScore) {
      intervalId = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(intervalId);
            setShowScore(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [showScore]);

  const generateBalls = () => {
    const newBalls = Array.from({ length: 108 }, () =>
      Math.floor(Math.random() * 10)
    );
    setBalls(newBalls);
  };

  useEffect(() => {
    generateBalls();
  }, []);

  const handleClick = (num) => {
    if (num === ballScore) {
      setTotalScore((prev) => prev + 10);
    } else {
      setTotalScore((prev) => prev - 5);
    }
    setBallScore(Math.floor(Math.random() * 10));
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  useEffect(() => {
    if (totalScore > highScore) {
      setHighScore(totalScore);
    }
  }, [totalScore]);

  const handleReset = () => {
    setTimer(20);
    setTotalScore(0);
    setBallScore(Math.floor(Math.random() * 10));
    generateBalls();
    setShowScore(false);
  };

  return (
    <>
      <Navbar
        username={username}
        score={totalScore}
        highScore={highScore}
        onLogout={handleLogout}
        ballScore={ballScore}
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-200 px-4 py-10">
        {showScore ? (
          <div className="flex flex-col items-center gap-6">
            <Score score={totalScore} />
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="w-full max-w-7xl grid grid-cols-12 gap-2 p-4 bg-green-400 border-4 border-green-700 rounded-xl shadow-xl">
            {balls.map((num, index) => (
              <button
                key={index}
                onClick={() => handleClick(num)}
                className="border-2 border-black rounded-full h-14 w-14 flex items-center justify-center text-white bg-blue-900 hover:bg-black transition duration-200 text-xl font-semibold"
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Mainbody;
