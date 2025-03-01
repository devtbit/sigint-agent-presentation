import { Waves, Volume2, AudioWaveformIcon as Waveform, Scissors } from "lucide-react"

export default function Slide7() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Audio Stream Processing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Waves className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">UDP Streaming Architecture</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <div className="flex items-center justify-center">
              <svg className="w-full h-44" viewBox="0 0 440 160">
                {/* Background highlighting */}
                <rect x="10" y="15" width="420" height="130" rx="8" fill="#111827" fillOpacity="0.4" />
                
                {/* GQRX Box */}
                <rect x="40" y="40" width="100" height="60" rx="6" fill="#1e40af" className="stroke-blue-400" strokeWidth="2" />
                <text x="90" y="75" className="text-sm font-medium" fill="white" textAnchor="middle">GQRX</text>
                
                {/* UDP Stream */}
                <path d="M 140 70 L 220 70" className="stroke-green-400" strokeWidth="2" />
                <circle cx="150" cy="70" r="3" className="fill-green-400" />
                <circle cx="170" cy="70" r="3" className="fill-green-400" />
                <circle cx="190" cy="70" r="3" className="fill-green-400" />
                <circle cx="210" cy="70" r="3" className="fill-green-400" />
                <text x="180" y="60" className="text-xs" fill="#4ade80" textAnchor="middle">UDP Stream</text>
                <text x="180" y="85" className="text-xs" fill="#86efac" textAnchor="middle">localhost:7355</text>
                
                {/* Processor Box */}
                <rect x="220" y="40" width="180" height="60" rx="6" fill="#1f2937" className="stroke-gray-400" strokeWidth="2" />
                <text x="310" y="65" className="text-sm font-medium" fill="white" textAnchor="middle">Processing Pipeline</text>
                
                {/* Processor Internal Components */}
                <rect x="230" y="75" width="40" height="20" rx="2" fill="#374151" className="stroke-gray-300" strokeWidth="1" />
                <text x="250" y="89" className="text-xs" fill="white" textAnchor="middle">Buffer</text>
                
                <rect x="280" y="75" width="50" height="20" rx="2" fill="#374151" className="stroke-gray-300" strokeWidth="1" />
                <text x="305" y="89" className="text-xs" fill="white" textAnchor="middle">Process</text>
                
                <rect x="340" y="75" width="50" height="20" rx="2" fill="#374151" className="stroke-gray-300" strokeWidth="1" />
                <text x="365" y="89" className="text-xs" fill="white" textAnchor="middle">Output</text>
                
                {/* Audio Data Flow */}
                <path d="M 270 85 L 280 85" className="stroke-white" strokeWidth="1" />
                <path d="M 330 85 L 340 85" className="stroke-white" strokeWidth="1" />
                
                {/* Data Type Labels */}
                <text x="90" y="110" className="text-xs" fill="#93c5fd" textAnchor="middle">Radio Signal</text>
                <text x="310" y="120" className="text-xs" fill="#86efac" textAnchor="middle">16-bit PCM Raw Audio</text>
                
                {/* Glow effects for visibility */}
                <circle cx="90" cy="75" r="15" fill="rgba(59, 130, 246, 0.2)" />
                <circle cx="310" cy="65" r="20" fill="rgba(74, 222, 128, 0.1)" />
              </svg>
            </div>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>GQRX configured to stream audio via UDP to localhost:7355</li>
            <li>Raw audio captured as 16-bit PCM data</li>
            <li>Stream buffered in memory for processing</li>
            <li>Continuous monitoring with minimal latency</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Waveform className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Audio Sampling Process</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4 text-gray-300">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="bg-blue-900/70 p-2 rounded-lg border border-blue-800 w-24">
                  <p className="font-medium">GQRX Output</p>
                  <p className="text-sm">48kHz</p>
                </div>
              </div>
              <div className="text-2xl">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path d="M 0 10 L 30 10 M 25 5 L 30 10 L 25 15" className="stroke-gray-300" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="text-center">
                <div className="bg-purple-900/70 p-2 rounded-lg border border-purple-800 w-24">
                  <p className="font-medium">Resampling</p>
                  <p className="text-sm">Processing</p>
                </div>
              </div>
              <div className="text-2xl">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path d="M 0 10 L 30 10 M 25 5 L 30 10 L 25 15" className="stroke-gray-300" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="text-center">
                <div className="bg-green-900/70 p-2 rounded-lg border border-green-800 w-24">
                  <p className="font-medium">Whisper Input</p>
                  <p className="text-sm">16kHz</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Downsampling from 48kHz to 16kHz for Whisper compatibility</li>
            <li>Mono channel conversion for efficient processing</li>
            <li>Bit depth maintained at 16-bit for quality</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Volume2 className="h-8 w-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold">Silence Detection</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <svg className="w-full h-44" viewBox="0 0 400 150">
              {/* Graph axes */}
              <line x1="50" y1="20" x2="50" y2="120" stroke="white" strokeWidth="2" />
              <line x1="50" y1="120" x2="380" y2="120" stroke="white" strokeWidth="2" />
              
              {/* Y-axis labels */}
              <text x="30" y="30" className="text-xs" fill="#d1d5db" textAnchor="end">300</text>
              <text x="30" y="60" className="text-xs" fill="#d1d5db" textAnchor="end">200</text>
              <text x="30" y="90" className="text-xs" fill="#d1d5db" textAnchor="end">100</text>
              <text x="30" y="120" className="text-xs" fill="#d1d5db" textAnchor="end">0</text>
              
              {/* X-axis labels */}
              <text x="50" y="140" className="text-xs" fill="#d1d5db" textAnchor="middle">0s</text>
              <text x="140" y="140" className="text-xs" fill="#d1d5db" textAnchor="middle">5s</text>
              <text x="230" y="140" className="text-xs" fill="#d1d5db" textAnchor="middle">10s</text>
              <text x="320" y="140" className="text-xs" fill="#d1d5db" textAnchor="middle">15s</text>
              
              {/* Audio waveform - represented as RMS values */}
              <path d="M 50 100 
                      L 70 105 
                      L 90 98 
                      L 110 102 
                      L 130 100
                      L 140 85
                      L 150 50
                      L 160 40
                      L 170 55
                      L 180 35
                      L 190 60
                      L 200 40
                      L 210 55
                      L 220 45
                      L 230 60
                      L 240 50
                      L 250 40
                      L 260 65
                      L 270 85
                      L 280 100
                      L 290 105
                      L 300 95
                      L 310 102
                      L 330 100
                      L 350 98
                      L 370 103" 
                    stroke="#3b82f6" strokeWidth="2" fill="none" />
              
              {/* Silence threshold line */}
              <line x1="50" y1="85" x2="380" y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <text x="375" y="80" className="text-xs" fill="#f87171" textAnchor="end">150.0 RMS Threshold</text>
              
              {/* Highlight active audio section */}
              <rect x="140" y="20" width="130" height="100" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2" />
              <text x="205" y="25" className="text-xs" fill="#4ade80" textAnchor="middle">Activity Detected</text>
            </svg>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>RMS (Root Mean Square) amplitude calculation on 16-bit PCM audio</li>
            <li>Configurable threshold (default: 150.0) for silence detection</li>
            <li>Numpy-based implementation for efficient processing</li>
            <li>Prevents transcription of empty or noise-only audio segments</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Scissors className="h-8 w-8 text-purple-400 mr-3" />
            <h3 className="text-xl font-semibold">Audio Chunking Approach</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <svg className="w-full h-44" viewBox="0 0 400 150">
              {/* Timeline */}
              <line x1="40" y1="80" x2="380" y2="80" stroke="white" strokeWidth="2" />
              
              {/* Time markers */}
              <line x1="40" y1="75" x2="40" y2="85" stroke="white" strokeWidth="2" />
              <line x1="100" y1="75" x2="100" y2="85" stroke="white" strokeWidth="2" />
              <line x1="160" y1="75" x2="160" y2="85" stroke="white" strokeWidth="2" />
              <line x1="220" y1="75" x2="220" y2="85" stroke="white" strokeWidth="2" />
              <line x1="280" y1="75" x2="280" y2="85" stroke="white" strokeWidth="2" />
              <line x1="340" y1="75" x2="340" y2="85" stroke="white" strokeWidth="2" />
              
              {/* Time labels */}
              <text x="40" y="95" className="text-xs" fill="#d1d5db" textAnchor="middle">0s</text>
              <text x="100" y="95" className="text-xs" fill="#d1d5db" textAnchor="middle">30s</text>
              <text x="160" y="95" className="text-xs" fill="#d1d5db" textAnchor="middle">60s</text>
              <text x="220" y="95" className="text-xs" fill="#d1d5db" textAnchor="middle">90s</text>
              <text x="280" y="95" className="text-xs" fill="#d1d5db" textAnchor="middle">120s</text>
              <text x="340" y="95" className="text-xs" fill="#d1d5db" textAnchor="middle">150s</text>
              
              {/* Chunks */}
              <rect x="40" y="40" width="80" height="25" rx="4" fill="#3b82f6" fillOpacity="0.7" stroke="#1d4ed8" />
              <text x="80" y="55" className="text-xs" fill="white" textAnchor="middle">Chunk 1 (30s)</text>
              
              <rect x="95" y="40" width="80" height="25" rx="4" fill="#8b5cf6" fillOpacity="0.7" stroke="#5b21b6" />
              <text x="135" y="55" className="text-xs" fill="white" textAnchor="middle">Chunk 2 (30s)</text>
              
              <rect x="150" y="40" width="80" height="25" rx="4" fill="#ec4899" fillOpacity="0.7" stroke="#be185d" />
              <text x="190" y="55" className="text-xs" fill="white" textAnchor="middle">Chunk 3 (30s)</text>
              
              <rect x="205" y="40" width="80" height="25" rx="4" fill="#f59e0b" fillOpacity="0.7" stroke="#b45309" />
              <text x="245" y="55" className="text-xs" fill="white" textAnchor="middle">Chunk 4 (30s)</text>
              
              <rect x="260" y="40" width="80" height="25" rx="4" fill="#10b981" fillOpacity="0.7" stroke="#065f46" />
              <text x="300" y="55" className="text-xs" fill="white" textAnchor="middle">Chunk 5 (30s)</text>
              
              {/* Overlap indicators */}
              <rect x="80" y="110" width="15" height="15" rx="2" fill="#6b7280" fillOpacity="0.8" />
              <line x1="87.5" y1="105" x2="87.5" y2="65" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <text x="105" y="120" className="text-xs" fill="#d1d5db" textAnchor="start">5s Overlap</text>
              
              <rect x="155" y="110" width="15" height="15" rx="2" fill="#6b7280" fillOpacity="0.8" />
              <line x1="162.5" y1="105" x2="162.5" y2="65" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <text x="175" y="120" className="text-xs" fill="#d1d5db" textAnchor="start">5s Overlap</text>
              
              <rect x="215" y="110" width="15" height="15" rx="2" fill="#6b7280" fillOpacity="0.8" />
              <line x1="222.5" y1="105" x2="222.5" y2="65" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <text x="235" y="120" className="text-xs" fill="#d1d5db" textAnchor="start">5s Overlap</text>
              
              <rect x="275" y="110" width="15" height="15" rx="2" fill="#6b7280" fillOpacity="0.8" />
              <line x1="282.5" y1="105" x2="282.5" y2="65" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <text x="295" y="120" className="text-xs" fill="#d1d5db" textAnchor="start">5s Overlap</text>
            </svg>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>30-second chunks for optimal transcription performance</li>
            <li>5-second overlap between chunks to prevent missed content</li>
            <li>Chunks stored temporarily for processing</li>
            <li>Processed audio archived with metadata (frequency, timestamp)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

