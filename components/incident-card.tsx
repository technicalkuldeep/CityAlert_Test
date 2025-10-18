export default function IncidentCard({ incident }: any) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
      <p className="text-sm text-slate-400">📍 {incident.pincode}</p>
      <h2 className="text-xl font-bold text-white mt-1">{incident.category}</h2>
      <p className="text-slate-300 mt-2">{incident.description}</p>
      <p className="text-slate-500 text-xs mt-3">
        👤 {incident.reporter.slice(0, 8)}... • 🕒{" "}
        {new Date(Number(incident.timestamp) * 1000).toLocaleString()}
      </p>
    </div>
  );
}
