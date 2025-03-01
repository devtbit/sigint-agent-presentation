import { User, Radio, Headphones } from "lucide-react"

export default function Slide13() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">User Interface (cont.)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <User className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">User Commands</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 text-gray-300">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">/tune 145.500</p>
              <p className="text-xs text-gray-400">Set radio to specific frequency</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">/status</p>
              <p className="text-xs text-gray-400">Display current radio status</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">/history 10</p>
              <p className="text-xs text-gray-400">Show last 10 intercepts</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">/summary 145.500</p>
              <p className="text-xs text-gray-400">Generate summary for frequency</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Radio className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Status Display</h3>
          </div>
          <div className="bg-black rounded-lg p-4 font-mono text-sm mb-4">
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <p>
                Frequency: <span className="text-green-400">420.120 MHz</span>
              </p>
              <p>
                Signal: <span className="text-yellow-400">■■■■□□</span>
              </p>
              <p>
                Mode: <span className="text-blue-400">NFM</span>
              </p>
              <p>
                Squelch: <span className="text-purple-400">-30dB</span>
              </p>
              <p>
                Session: <span className="text-orange-400">Alpha-7</span>
              </p>
              <p>
                Recording: <span className="text-red-400">ACTIVE</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <p className="text-gray-300 text-center">
              The status display provides real-time information about the radio configuration and signal conditions,
              allowing users to quickly assess the current state of the monitoring system.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <Headphones className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Live Monitoring Features</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Real-time Transcription</p>
            <p className="text-sm">
              Incoming transmissions are transcribed and displayed in the chat interface as they occur, with speaker
              identification when possible.
            </p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Alert System</p>
            <p className="text-sm">
              Configurable alerts for keywords or patterns in intercepted communications, with visual and audio
              notifications.
            </p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Activity Visualization</p>
            <p className="text-sm">
              Graphical representation of frequency activity over time, helping identify patterns and peak usage
              periods.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

