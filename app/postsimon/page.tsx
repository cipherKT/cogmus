'use client'

import SimonGame from '../components/SimonGame'
import { useRouter } from 'next/navigation'

export default function PostSimon() {
  const router = useRouter()

  const handleGameOver = () => {
    router.push('/poststroop')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Post-Simon Game</h1>
      <SimonGame onGameOver={handleGameOver} />
    </div>
  )
}

