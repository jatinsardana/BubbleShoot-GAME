import React from "react";
import { Link } from "react-router-dom";

const LetsPlayButton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Link to="/mainbody">
      <button className="bg-red-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
        Let's Play
      </button>
      </Link>
    </div>
  );
};

export default LetsPlayButton;
