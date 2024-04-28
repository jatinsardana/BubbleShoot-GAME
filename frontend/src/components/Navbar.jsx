import React, { useEffect, useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import axios from "axios";

function Navbar({ username, score, highScore, onLogout, ballScore }) {
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  }, []);

  const Timer = () => {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    };

    return <span>{formatTime(timer)}</span>;
  };

  const Ball = () => {
    return <span>{ballScore}</span>;
  };


  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white flex space-x-4">
        <div className="border border-white rounded p-2">{`Username: ${username}`}</div>
        <div className="border border-white rounded p-2">{`Your Score: ${score}`}</div>
        <div className="border border-white rounded p-2">{`High Score: ${highScore}`}</div>
        <div className="flex items-center justify-center">
          <div className="border border-white rounded p-2 ml-44 mx-2">
            Timer: <Timer />
          </div>
          <div className="border border-white rounded p-2 mx-2">
            Ball: <Ball />
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onLogout}
          >
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
