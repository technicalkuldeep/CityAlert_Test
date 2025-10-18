"use client"

import { useEffect, useState } from "react"

interface Incident {
  incident_id: string
  pincode: string
  category: string
  description: string
  reporter: string
  timestamp: string
}

export default function Dashboard() {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchIncidents = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/incidents")
      if (!res.ok) throw new Error("Failed to fetch incidents")
      const data = await res.json()
      setIncidents(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchIncidents()
    const interval = setInterval(fetchIncidents, 30000) // auto-refresh every 30s
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading incidents...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-400">
        Error: {error}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        🚨 CityAlert Public Dashboard
      </h1>

      {incidents.length === 0 ? (
        <p className="text-center text-slate-400">No incidents reported yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incidents.map((incident, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">
                {incident.category}
              </h2>
              <p className="text-slate-300 mb-2">
                <strong>Pincode:</strong> {incident.pincode}
              </p>
              <p className="text-slate-300 mb-2">
                <strong>Description:</strong> {incident.description}
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Reporter:</strong> {incident.reporter}
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Time:</strong>{" "}
                {new Date(Number(incident.timestamp) * 1000).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
