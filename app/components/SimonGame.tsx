'use client'

import { useState, useEffect, useCallback } from 'react'

const colors = ['red', 'blue', 'green', 'yellow']

interface SimonGameProps {
  onGameOver: () => void
}

export default function SimonGame({ onGameOver }: SimonGameProps) {
  const [sequence, setSequence] = useState<string[]>([])
  const [userSequence, setUserSequence] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(false)

  const addToSequence = useCallback(() => {
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    setSequence(prev => [...prev, newColor])
  }, [])

  const playSequence = useCallback(() => {
    sequence.forEach((color, index) => {
      setTimeout(() => {
        highlightColor(color)
      }, (index + 1) * 1000)
    })
  }, [sequence])

  const highlightColor = (color: string) => {
    const button = document.querySelector(`button[data-color="${color}"]`) as HTMLButtonElement
    button.style.opacity = '1'
    setTimeout(() => {
      button.style.opacity = '0.6'
    }, 500)
  }

  const handleColorClick = (color: string) => {
    if (!isPlaying) return

    highlightColor(color)

    const newUserSequence = [...userSequence, color]
    setUserSequence(newUserSequence)

    if (newUserSequence[newUserSequence.length - 1] !== sequence[newUserSequence.length - 1]) {
      onGameOver()
      return
    }

    if (newUserSequence.length === sequence.length) {
      setUserSequence([])
      setTimeout(() => {
        addToSequence()
      }, 1000)
    }
  }

  const startGame = () => {
    setSequence([])
    setUserSequence([])
    setIsPlaying(true)
    addToSequence()
  }

  useEffect(() => {
    if (sequence.length > 0 && isPlaying) {
      playSequence()
    }
  }, [sequence, isPlaying, playSequence])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        {colors.map(color => (
          <button
            key={color}
            data-color={color}
            onClick={() => handleColorClick(color)}
            className={`w-32 h-32 rounded-full ${color === 'red' ? 'bg-red-500' : color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : 'bg-yellow-500'} opacity-60 hover:opacity-100 transition-opacity`}
          />
        ))}
      </div>
      {!isPlaying && (
        <button
          onClick={startGame}
          className="mt-8 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start Game
        </button>
      )}
      {isPlaying && <p className="mt-4">Sequence length: {sequence.length}</p>}
    </div>
  )
}

