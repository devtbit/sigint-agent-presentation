import { Database, Table, KeyRound } from "lucide-react"

export default function Slide11() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Database & Storage</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Database className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">SQLite Database</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Lightweight, serverless database</li>
            <li>Single file storage for easy backup</li>
            <li>ACID-compliant for data integrity</li>
            <li>Low resource requirements for Raspberry Pi</li>
            <li>Fast query performance for real-time operations</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <KeyRound className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Data Management</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Automatic pruning of old data (configurable retention)</li>
            <li>Indexed queries for fast retrieval</li>
            <li>Frequency-based organization of transcripts</li>
            <li>Session-based grouping of related intercepts</li>
            <li>Metadata tagging for intelligence analysis</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <Table className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Database Schema</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Intercepts Table</p>
            <pre className="text-xs text-gray-400 overflow-x-auto">
              {`CREATE TABLE intercepts (
  id INTEGER PRIMARY KEY,
  timestamp TEXT NOT NULL,
  frequency REAL NOT NULL,
  duration REAL NOT NULL,
  transcript TEXT NOT NULL,
  signal_strength REAL,
  session_id INTEGER,
  FOREIGN KEY (session_id) 
    REFERENCES sessions(id)
);`}
            </pre>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Sessions Table</p>
            <pre className="text-xs text-gray-400 overflow-x-auto">
              {`CREATE TABLE sessions (
  id INTEGER PRIMARY KEY,
  start_time TEXT NOT NULL,
  end_time TEXT,
  name TEXT,
  notes TEXT
);`}
            </pre>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Frequencies Table</p>
            <pre className="text-xs text-gray-400 overflow-x-auto">
              {`CREATE TABLE frequencies (
  id INTEGER PRIMARY KEY,
  frequency REAL UNIQUE NOT NULL,
  label TEXT,
  notes TEXT,
  last_active TEXT
);`}
            </pre>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Summaries Table</p>
            <pre className="text-xs text-gray-400 overflow-x-auto">
              {`CREATE TABLE summaries (
  id INTEGER PRIMARY KEY,
  frequency REAL NOT NULL,
  timestamp TEXT NOT NULL,
  summary TEXT NOT NULL,
  time_period TEXT NOT NULL
);`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

