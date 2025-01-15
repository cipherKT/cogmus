'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RagaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const audio = new Audio('/raga.mp3')
    
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
    }
  }, [isPlaying])

  const handleComplete = () => {
    router.push('/postsimon')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Raga Player</h1>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="mb-8 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={handleComplete}
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Complete and Continue
      </button>
    </div>
  )
}

