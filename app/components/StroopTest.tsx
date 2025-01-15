'use client'

import { useState, useEffect } from 'react'

const colors = ['red', 'blue', 'green', 'yellow']
const colorNames = ['Red', 'Blue', 'Green', 'Yellow']

interface StroopTestProps {
  onTestComplete: () => void
}

export default function StroopTest({ onTestComplete }: StroopTestProps) {
  const [currentColor, setCurrentColor] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      onTestComplete()
    }
  }, [timeLeft, onTestComplete])

  useEffect(() => {
    generateNewColor()
  }, [])

  const generateNewColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length)
    const textIndex = Math.floor(Math.random() * colorNames.length)
    setCurrentColor(colors[colorIndex])
    setCurrentText(colorNames[textIndex])
  }

  const handleClick = (clickedColor: string) => {
    if (clickedColor === currentColor) {
      setScore(score + 1)
    }
    generateNewColor()
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl mb-4">Score: {score}</p>
      <p className="text-xl mb-8">Time left: {timeLeft} seconds</p>
      <div className="mb-8">
        <p className={`text-4xl font-bold text-${currentColor}-500`}>{currentText}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => handleClick(color)}
            className={`w-32 h-16 rounded-md bg-${color}-500 text-white font-bold hover:opacity-80`}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

