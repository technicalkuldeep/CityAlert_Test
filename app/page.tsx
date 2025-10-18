"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4">🚨 CityAlert</h1>
      <p className="text-slate-400 mb-8 max-w-lg">
        A decentralized incident reporting and response system powered by blockchain and Kwala.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/register"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          Register New Incident
        </Link>

        <Link
          href="/dashboard"
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition"
        >
          View Public Dashboard
        </Link>
      </div>

      <footer className="mt-12 text-slate-500 text-sm">
        Built with ❤️ using Next.js, Ethers.js, and Kwala
      </footer>
    </main>
  );
}
