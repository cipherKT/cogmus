'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const questions = [
  "What is your name?",
  "How old are you?",
  "What is your gender?",
  "Do you have any musical background?",
  "Have you ever listened to raga hindol/vibhas?"
]

export default function HomePage() {
  const [answers, setAnswers] = useState({
    name: '',
    age: '',
    gender: '',
    hasMusicalBackground: 'no',
    musicalBackground: '',
    listenedToRaga: 'no'
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAnswers(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can save the answers if needed
    console.log(answers)
    router.push('/presimon')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Basic Questions</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{questions[0]}</label>
            <input
              type="text"
              name="name"
              value={answers.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{questions[1]}</label>
            <input
              type="number"
              name="age"
              value={answers.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{questions[2]}</label>
            <select
              name="gender"
              value={answers.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{questions[3]}</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="hasMusicalBackground"
                  value="yes"
                  checked={answers.hasMusicalBackground === 'yes'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="hasMusicalBackground"
                  value="no"
                  checked={answers.hasMusicalBackground === 'no'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {answers.hasMusicalBackground === 'yes' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Please describe your musical background:</label>
              <input
                type="text"
                name="musicalBackground"
                value={answers.musicalBackground}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{questions[4]}</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="listenedToRaga"
                  value="yes"
                  checked={answers.listenedToRaga === 'yes'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="listenedToRaga"
                  value="no"
                  checked={answers.listenedToRaga === 'no'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}


