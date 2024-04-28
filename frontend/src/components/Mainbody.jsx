import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Score from "./Score";

function Mainbody() {
    const [timer, setTimer] = useState(10);
    const [showScore, setShowScore] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [ballScore, setBallScore] = useState(Math.floor(Math.random() * 10));
    const [balls, setBalls] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("timer is running");
            setTimer((prev) => {
                if (prev === 0) {
                    clearInterval(intervalId);
                    setShowScore(true);
                }
                return prev - 1;
            });
        }, 1000);
    }, []);

    useEffect(() => {
        const newBalls = [];
        for (let i = 1; i < 109; i++) {
            const num = Math.floor(Math.random() * 10);
            newBalls.push(num);
        }
        setBalls(newBalls);
    }, []);

    function handleClick(num) {
        if (ballScore == num) {
            setTotalScore((prevScore) => prevScore + 10);
        } else {
            setTotalScore((prevScore) => prevScore - 5);
        }
        setBallScore(Math.floor(Math.random() * 10));
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
                score={totalScore}
                highScore={highScore}
                onLogout={handleLogout}
                ballScore={ballScore}
            />

            {showScore ? (
                <Score score={totalScore} />
            ) : (
                <div className="flex justify-center items-center h-full bg-yellow-200 pt-10">
                    <div className="border-4 border-green-700 w-3/4 h-3/4 p-1 grid grid-cols-12 bg-green-400 rounded-xl mb-10">
                        {balls.map((num, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(num)}
                                className="border-2 border-black rounded-full h-11 w-11 flex justify-center mb-1 p-1 font-medium text-2xl cursor-pointer bg-blue-900 text-white hover:bg-black"
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Mainbody;
