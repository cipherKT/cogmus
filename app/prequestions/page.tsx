'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const questions = [
  "On a scale of 1 to 5, how often do you find it hard to maintain focus during repetitive tasks?",
  "While solving puzzles or answering questions, how often do you lose track of what you were doing due to distractions?",
  "Rate your ability to avoid mind-wandering during a mentally demanding task on a scale of 1 to 5.",
  "How challenging was it to stay attentive to detailed instruction during the task?",
  "On a scale of 1 to 5, how calm did you feel during the session?",
  "Did you feel frustrated or stressed while performing the tasks?"
]

const frequencyOptions = [
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Very Often"
]

const challengeOptions = [
  "Not challenging at all",
  "Slightly challenging",
  "Moderately challenging",
  "Challenging",
  "Very challenging"
]

export default function PreQuestions() {
  const [answers, setAnswers] = useState(Array(6).fill(''))
  const router = useRouter()

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can save the answers if needed
    console.log(answers)
    router.push('/raga')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Pre-Task Questionnaire</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">{question}</label>
              {index === 1 ? (
                <select
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a frequency</option>
                  {frequencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : index === 3 ? (
                <select
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a challenge level</option>
                  {challengeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : index === 5 ? (
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      checked={answers[index] === 'yes'}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="form-radio h-4 w-4 text-indigo-600"
                      required
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="no"
                      checked={answers[index] === 'no'}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="form-radio h-4 w-4 text-indigo-600"
                      required
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              ) : (
                <select
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a frequency</option>
                  {frequencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
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

