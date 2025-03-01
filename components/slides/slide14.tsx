import { CheckCircle, AlertTriangle, Lightbulb } from "lucide-react"

export default function Slide14() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Conclusions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Project Achievements</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Successful integration of SDR hardware with AI transcription</li>
            <li>Real-time processing and analysis of radio communications</li>
            <li>Intelligent agent interface for SIGINT operations</li>
            <li>Effective function calling for radio control</li>
            <li>Structured database for signal intelligence storage</li>
            <li>User-friendly terminal interface for operations</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Limitations & Challenges</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Transcription accuracy in noisy environments</li>
            <li>Processing latency for real-time applications</li>
            <li>Limited frequency coverage with single SDR</li>
            <li>Resource constraints on Raspberry Pi hardware</li>
            <li>Specialized vocabulary recognition in transcription</li>
            <li>Power requirements for field operations</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-400 mr-3" />
            <h3 className="text-xl font-semibold">Future Improvements</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Multi-SDR support for simultaneous frequency monitoring</li>
            <li>Custom fine-tuning of transcription model for radio comms</li>
            <li>Advanced signal filtering and noise reduction</li>
            <li>Web-based interface for remote monitoring</li>
            <li>Integration with mapping tools for geolocation</li>
            <li>Automated frequency hopping detection</li>
            <li>Speaker identification and voice profiling</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Ethical Considerations</h3>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300">
              The SIGINT Agent project raises important ethical considerations regarding privacy, surveillance, and the
              responsible use of AI in intelligence gathering.
            </p>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Compliance with legal regulations on radio monitoring</li>
            <li>Privacy protection for intercepted communications</li>
            <li>Responsible use of intelligence gathering capabilities</li>
            <li>Transparency about system capabilities and limitations</li>
            <li>Data security for stored intercepts and analysis</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

