'use client'

import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!prompt.trim()) return

    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('https://gemini-node-backend-server.onrender.com/api/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      setResponse(data.result || 'No response received')
    } catch (error) {
      setResponse('❌ Error fetching response')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto text-center mt-10 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">NEETI-CLAT AI ASSISTANT</h1>
      <h2 className="text-2xl text-gradient">Hello, <span className="font-medium">User</span>!</h2>

      <p className="text-white/80 text-lg">💬 <strong>Law Exam AI Assistant</strong></p>

      <div className="flex items-center max-w-2xl mx-auto rounded-full overflow-hidden bg-white/5 border border-white/20 shadow-md backdrop-blur-lg">
        <input
          type="text"
          placeholder="Ask a question..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 px-4 py-3 bg-transparent outline-none text-white placeholder:text-white/50"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Thinking...' : '➤'}
        </button>
      </div>

      {response && (
        <div className="mt-8 p-6 max-w-3xl mx-auto bg-white/10 rounded-xl border border-white/20 text-left shadow">
          <div className="text-sm text-white/70 mb-2">📥 Response:</div>
          <p className="text-white leading-relaxed whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  )
}
