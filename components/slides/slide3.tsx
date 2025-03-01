import { Target, Lightbulb } from "lucide-react"

export default function Slide3() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Project Goals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Target className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Technical Implementation</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Build an AI assistant using commodity hardware and open-source tools</li>
            <li>Implement automated transcription of radio communications</li>
            <li>Develop real-time analysis capabilities with modern AI frameworks</li>
            <li>Create a user-friendly interface for interacting with intercepted data</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-400 mr-3" />
            <h3 className="text-xl font-semibold">Vision & Impact</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Democratize access to advanced SIGINT capabilities</li>
            <li>Empower radio enthusiasts with AI-enhanced monitoring tools</li>
            <li>Bridge the gap between technical complexity and practical usability</li>
            <li>Demonstrate that sophisticated intelligence tools are no longer exclusive to specialized agencies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

