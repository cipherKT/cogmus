'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
const colorNames = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink'];

export default function StroopTest() {
  const [currentColor, setCurrentColor] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    newWord();
  };

  const newWord = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomWord = colorNames[Math.floor(Math.random() * colorNames.length)];
    setCurrentColor(randomColor);
    setCurrentWord(randomWord);
  };

  const handleGuess = (color: any) => {
    if (color === currentColor) {
      setScore(score + 1);
    }
    newWord();
  };

  const handleGameOver = () => {
    alert(`Game Over! Your final score is ${score}.`);
    router.push('/postquestions');
  };

  const getButtonColor = (color: any) => {
    switch (color) {
      case 'red': return 'bg-red-500 hover:bg-red-700';
      case 'blue': return 'bg-blue-500 hover:bg-blue-700';
      case 'green': return 'bg-green-500 hover:bg-green-700';
      case 'yellow': return 'bg-yellow-500 hover:bg-yellow-700';
      case 'orange': return 'bg-orange-500 hover:bg-orange-700';
      case 'purple': return 'bg-purple-500 hover:bg-purple-700';
      case 'pink': return 'bg-pink-500 hover:bg-pink-700';
      default: return 'bg-gray-500 hover:bg-gray-700';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Stroop Test Game</h1>
      {!gameStarted ? (
        <div className="flex justify-center items-center flex-col">
          <button
            onClick={startGame}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
          >
            Start Game
          </button>
          <div className="py-5 text-center">
            <h1 className="font-bold">1. Objective:</h1>
            <h3>Your goal is to quickly identify the color of the word being displayed. Ignore the word itself, as it may conflict with the color.</h3>
            <h1 className="font-bold">2. How to Play:</h1>
            <h3>Identify the color of the word and select the corresponding button below. Each correct answer earns you 1 point.</h3>
            <h3>Score as many points as possible in 60 seconds!</h3>
            <h1 className="font-bold">3. Controls:</h1>
            <h3>Click the button corresponding to your selected color. Avoid refreshing the page to prevent restarting the game.</h3>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4">Time left: {timeLeft}s | Score: {score}</div>
          <div
            className="text-4xl font-bold mb-4"
            style={{ color: currentColor }}
          >
            {currentWord}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleGuess(color)}
                className={`${getButtonColor(color)} text-white font-bold py-2 px-4 rounded`}
              >
                {color}
              </button>
            ))}
          </div>
        </>
      )}
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
            <p className="mb-4">Your final score is {score}.</p>
            <button
              onClick={handleGameOver}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



