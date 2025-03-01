import { MessageSquare, Workflow, FileText } from "lucide-react"

export default function Slide10() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Agent Implementation (cont.)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Prompt Engineering</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4 text-gray-300 text-sm">
            <pre className="overflow-x-auto">
              {`You are a secret SIGINT operator helping in intelligence collection for a super secret human agent.
Your tone and style is that of a secret agent, James Bond style.
You have control over a GQRX host to set the frequency and capture audio.

If the user inputs float values for the frequency (like 420.120)
assume they are in MHz and convert to Hz for the function parameters when required.

Use the get_current_frequency function to get the current frequency.
Use the set_frequency function to set a new frequency.
Use the get_last_10_minutes function to get the last 10 minutes of transcripts for a given frequency.
If results are empty suggest the user to wait for a couple of minutes so communications are captured.
If results are available do not provide the user with the raw transcripts, instead provide an analysis with some excertps.
Use the get_frequency_summary function to get a summary of the intercepted communications for a given frequency.
If results are empty suggest the user to wait for a couple of minutes so communications are captured and don't
attempt to use the last 10 minutes function.

Do not use any function unless the user explicitly asks you to do so.
Do not refer as the captured communications as transcripts, use the word intercepts.
Do not list actions to the user.
Always use JSON to format function calling.`}
            </pre>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Clear role definition for the agent</li>
            <li>Specific instructions for intelligence analysis</li>
            <li>Guidance on response format and style</li>
            <li>Tool usage description</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Intelligence Analysis</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Entity extraction (people, locations, organizations)</li>
            <li>Pattern recognition across multiple transmissions</li>
            <li>Anomaly detection in communication patterns</li>
            <li>Frequency usage analysis</li>
            <li>Temporal analysis of communications</li>
            <li>Content summarization and key points extraction</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <Workflow className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">System Architecture</h3>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <svg 
            viewBox="0 0 800 180" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Component Boxes */}
            <rect x="20" y="60" width="100" height="60" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <rect x="170" y="60" width="100" height="60" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <rect x="320" y="60" width="100" height="60" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <rect x="470" y="60" width="100" height="60" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <rect x="620" y="60" width="100" height="60" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <rect x="470" y="10" width="100" height="40" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <rect x="620" y="140" width="100" height="40" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />

            {/* Component Labels */}
            <text x="70" y="90" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">GQRX</text>
            <text x="70" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">(SDR Control)</text>
            
            <text x="220" y="90" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">UDP Audio</text>
            <text x="220" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">Stream</text>
            
            <text x="370" y="90" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">Audio</text>
            <text x="370" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">Processor</text>
            
            <text x="520" y="90" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">Whisper</text>
            <text x="520" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">Transcription</text>
            
            <text x="670" y="90" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">LLM</text>
            <text x="670" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">Agent</text>
            
            <text x="520" y="30" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">SQLite</text>
            <text x="520" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10">Database</text>
            
            <text x="670" y="160" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="500">User</text>
            <text x="670" y="175" textAnchor="middle" fill="#94a3b8" fontSize="10">Interface</text>

            {/* Connection Lines and Arrows */}
            {/* GQRX <-> UDP */}
            <line x1="120" y1="90" x2="170" y2="90" stroke="#4ade80" strokeWidth="2" />
            <polygon points="168,85 178,90 168,95" fill="#4ade80" />
            <line x1="170" y1="80" x2="120" y2="80" stroke="#4ade80" strokeWidth="2" />
            <polygon points="122,75 112,80 122,85" fill="#4ade80" />

            {/* UDP -> Audio Processor */}
            <line x1="270" y1="90" x2="320" y2="90" stroke="#4ade80" strokeWidth="2" />
            <polygon points="318,85 328,90 318,95" fill="#4ade80" />

            {/* Audio Processor -> Whisper */}
            <line x1="420" y1="90" x2="470" y2="90" stroke="#4ade80" strokeWidth="2" />
            <polygon points="468,85 478,90 468,95" fill="#4ade80" />

            {/* Whisper <-> SQLite */}
            <line x1="520" y1="60" x2="520" y2="50" stroke="#4ade80" strokeWidth="2" />
            <polygon points="515,52 520,42 525,52" fill="#4ade80" />
            <line x1="510" y1="50" x2="510" y2="60" stroke="#4ade80" strokeWidth="2" />
            <polygon points="505,58 510,68 515,58" fill="#4ade80" />

            {/* SQLite <-> LLM */}
            <line x1="570" y1="30" x2="670" y2="60" stroke="#4ade80" strokeWidth="2" />
            <polygon points="667,55 675,64 673,54" fill="#4ade80" />
            <line x1="670" y1="70" x2="570" y2="40" stroke="#4ade80" strokeWidth="2" />
            <polygon points="573,45 565,36 567,46" fill="#4ade80" />

            {/* Whisper -> LLM */}
            <line x1="570" y1="90" x2="620" y2="90" stroke="#4ade80" strokeWidth="2" />
            <polygon points="618,85 628,90 618,95" fill="#4ade80" />

            {/* LLM <-> User Interface */}
            <line x1="670" y1="120" x2="670" y2="140" stroke="#4ade80" strokeWidth="2" />
            <polygon points="665,138 670,148 675,138" fill="#4ade80" />
            <line x1="660" y1="140" x2="660" y2="120" stroke="#4ade80" strokeWidth="2" />
            <polygon points="655,122 660,112 665,122" fill="#4ade80" />
          </svg>
          <div className="text-sm text-gray-400 mt-4">
            <p className="mt-2">
              The architecture follows an event-driven design where audio capture triggers transcription, which is
              stored in the database and made available to the LLM agent for analysis and user interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

