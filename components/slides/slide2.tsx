import { Radio, Brain, Lock, MessageSquare } from "lucide-react"

export default function Slide2() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">What is SIGINT?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Radio className="h-8 w-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold">Signals Intelligence</h3>
          </div>
          <p className="text-gray-300">
            The interception and analysis of communications and non-communications signals for intelligence gathering
          </p>
          <ul className="text-gray-300 list-disc pl-5 mt-2">
            <li>Radar signals</li>
            <li>Telemetry data</li>
            <li>Electronic emissions</li>
            <li>Satellite transmissions</li>
            <li>Electromagnetic patterns</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-8 w-8 text-purple-400 mr-3" />
            <h3 className="text-xl font-semibold">COMINT</h3>
          </div>
          <p className="text-gray-300">
            Communications Intelligence - A subset of SIGINT focused specifically on intercepting and analyzing the content of communications between people or electronic systems
          </p>
          <ul className="text-gray-300 list-disc pl-5 mt-2">
            <li>Voice communications</li>
            <li>Text messages and emails</li>
            <li>Radio communications</li>
            <li>Digital transmissions</li>
          </ul>
        </div>
        
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Brain className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Applications</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>National security and defense</li>
            <li>Law enforcement operations</li>
            <li>Emergency response coordination</li>
            <li>Research and monitoring</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Lock className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Key Challenges</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 text-gray-300">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p>Signal detection and isolation</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p>Real-time transcription accuracy</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p>Intelligent analysis of communications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

