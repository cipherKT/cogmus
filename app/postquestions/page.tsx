'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const questionsAfterMusic = [
  "To what extent did listening to music influence your performance on the tasks?",
  "How much improvement did you notice in your reaction time or pattern retention while playing Simon after listening to music?",
  "How frequently did you employ strategies (e.g., visualization, self-talk) to enhance your focus during tasks after listening to music?",
  "To what degree was your ability to prioritize tasks or suppress distractions improved after the music session?"
]

const influenceOptions = [
  "Greatly worsened",
  "Somewhat worsened",
  "No change",
  "Somewhat improved",
  "Greatly improved"
]

const improvementOptions = [
  "No improvement",
  "Slight improvement",
  "Moderate improvement",
  "Significant improvement",
  "Exceptional improvement"
]

const frequencyOptionsAfterMusic = [
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Always"
]

export default function PostQuestions() {
  const [answers, setAnswers] = useState(Array(4).fill(''))
  const router = useRouter()

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Congratulations! You've completed all tasks.")
    router.push('/results')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Post-Music Questionnaire</h1>
        <form onSubmit={handleSubmit}>
          {questionsAfterMusic.map((question, index) => (
            <div key={index} className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">{question}</label>
              {index === 0 ? (
                <select
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select an influence level</option>
                  {influenceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : index === 1 ? (
                <select
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select an improvement level</option>
                  {improvementOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a frequency</option>
                  {frequencyOptionsAfterMusic.map((option) => (
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
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}


