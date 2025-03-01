import { Brain, ActivityIcon as Function, Wrench } from "lucide-react"

export default function Slide9() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Agent Implementation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Brain className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">LLM Selection</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="font-medium text-gray-300 text-center">Groq's llama-3.3-70b-versatile</p>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Fine-tuned for effective function calling</li>
            <li>Optimized for real-time intelligence analysis</li>
            <li>Excellent context understanding for radio communications</li>
            <li>Low-latency inference via Groq API</li>
            <li>70 billion parameters for high-quality responses</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Function className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Function Calling Implementation</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4 text-gray-300 text-sm">
            <pre className="overflow-x-auto">
              {`{
  "name": "set_frequency",
  "description": "Set radio to a specific frequency",
  "parameters": {
    "type": "object",
    "properties": {
      "frequency": {
        "type": "number",
        "description": "Frequency in MHz"
      }
    },
    "required": ["frequency"]
  }
}`}
            </pre>
          </div>
          <p className="text-gray-300 text-sm">
            Function calling enables the agent to perform actions like tuning the radio, retrieving transcripts, and
            generating summaries through a natural language interface.
          </p>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <Wrench className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Tool Definitions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Set Frequency</p>
            <p className="text-sm text-gray-400">
              Tunes the radio to a specific frequency (e.g., "Tune to 420.120 MHz")
            </p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Get Current Frequency</p>
            <p className="text-sm text-gray-400">Returns the currently monitored frequency</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Get Recent Intercepts</p>
            <p className="text-sm text-gray-400">Retrieves the last 10 minutes of intercepted communications</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium text-gray-300 mb-2">Get Frequency Summary</p>
            <p className="text-sm text-gray-400">
              Generates an LLM-powered summary of all intercepted communications on a specific frequency
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

