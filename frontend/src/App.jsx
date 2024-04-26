import { useState } from "react";
import Mainbody from "./components/Mainbody"
import SignupForm from "./components/Signup";
import LoginForm from "./components/Login";
import LetsPlayButton from "./components/Letsplay";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/letsplay" element={<LetsPlayButton />} />
        <Route path="/mainbody" element={<Mainbody />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
