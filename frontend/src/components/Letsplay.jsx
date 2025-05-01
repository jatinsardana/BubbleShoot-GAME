import React from "react";
import { Link } from "react-router-dom";

const LetsPlayButton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 px-4">
      <div className="bg-white bg-opacity-25 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-white/30">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow">
          Ready to Play?
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-8">
          Click below to enter the main game platform
        </p>
        <Link to="/mainbody">
          <button className="relative inline-block text-lg sm:text-xl group">
            <span className="relative z-10 block px-8 py-3 bg-green-600 text-white font-semibold rounded-full transition duration-300 group-hover:bg-green-700">
              Let's Play
            </span>
            <span className="absolute inset-0 rounded-full bg-white opacity-10 group-hover:scale-105 transition-transform duration-300 blur"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LetsPlayButton;
