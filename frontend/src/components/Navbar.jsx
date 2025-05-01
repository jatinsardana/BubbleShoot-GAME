import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ username, score, highScore, onLogout, ballScore }) {
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 p-4 text-white shadow-md">
      <div className="flex flex-wrap gap-3 justify-center md:justify-start text-xl font-medium">
        <div className="border border-white rounded-xl px-4 py-2 bg-gray-700">{`Username: ${username}`}</div>
        <div className="border border-white rounded-xl px-4 py-2 bg-gray-700">{`Score: ${score}`}</div>
        <div className="border border-white rounded-xl px-4 py-2 bg-gray-700">{`High Score: ${highScore}`}</div>
        <div className="border border-white rounded-xl px-4 py-2 bg-gray-700">🎯 Ball: {ballScore}</div>
        <div className="border border-white rounded-xl px-4 py-2 bg-gray-700">⏳ Timer: {formatTime(timer)}</div>
      </div>
      <div className="mt-4 md:mt-0">
        <Link to="/">
          <button
            className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white text-xl font-semibold py-2 px-5 rounded-lg shadow-lg"
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
