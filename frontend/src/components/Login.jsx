import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SecondNAV from "./SecondNAV";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", {
        username,
        password,
      });
      console.log(response.data);
      localStorage.setItem("username", username);
      navigate("/letsplay");
    } catch (error) {
      setError("Invalid username or password");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <SecondNAV />
      <div className="mt-14 flex justify-center items-center px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg bg-black p-8 sm:p-10 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl text-white font-bold text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-xl font-medium text-white mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder="refUse : jatinsardana"
                value={username}
                onChange={handleUsernameChange}
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-lg"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-xl font-medium text-white mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="refUse : jatinsardana"
                value={password}
                onChange={handlePasswordChange}
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-lg"
              />
            </div>
            {error && (
              <p className="text-red-500 mb-4 text-xl text-center">{error}</p>
            )}
            <button
              type="submit"
              className="text-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-xl text-white text-center">
            Don't have an account?{" "}
            <Link to="signup">
              <button className="text-blue-400 hover:underline focus:outline-none">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
