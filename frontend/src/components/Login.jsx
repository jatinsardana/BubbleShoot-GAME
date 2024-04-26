import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SecondNAV from "./SecondNAV";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
      <div className=" mt-14">
        <div className="max-w-md mx-auto p-10 bg-black rounded-xl shadow-md">
          <h2 className="text-3xl text-white mb-4 font-semibold text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message if present */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="signup">
              <button className="text-blue-500 hover:underline focus:outline-none">
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
