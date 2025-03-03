import { FileAudio, Mic, BarChart3 } from "lucide-react"

export default function Slide8() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Transcription System</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <FileAudio className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Groq's Whisper Integration</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Whisper large-v3 model for high-accuracy transcription</li>
            <li>API integration with Groq for fast inference</li>
            <li>Optimized for radio communications vocabulary</li>
            <li>Supports multiple languages and accents</li>
            <li>Low-latency processing for near real-time results</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Mic className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Transcription Challenges</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Radio static and interference</li>
            <li>Specialized terminology and codes</li>
            <li>Varying audio quality and signal strength</li>
            <li>Multiple speakers with overlapping transmissions</li>
            <li>Abbreviated communications and jargon</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <BarChart3 className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Transcription Accuracy Analysis</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Clear Signal</p>
            <div className="h-4 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
            </div>
            <p className="text-right text-sm text-gray-400 mt-1">95% accuracy</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Moderate Noise</p>
            <div className="h-4 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-right text-sm text-gray-400 mt-1">75% accuracy</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Heavy Interference</p>
            <div className="h-4 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <p className="text-right text-sm text-gray-400 mt-1">45% accuracy</p>
          </div>
        </div>
      </div>
            {/* New Accuracy Analysis Section */}
            <div className="mt-8">
        
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Sample Audio & Transcription</h3>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-2">Original audio sample:</p>
            <audio controls className="w-full">
              <source src="/sample.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium mb-2 text-purple-300">Transcription Results:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="text-gray-300 italic">"Ya la está cortizando Santa, ¿qué pasa aquí en el centro? Santa, que está bien trinqueado todo el centro Comenta Santa"</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-1">
                <p className="text-gray-300 italic">" ¿Qué pasa? No, no he ido para allá."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

