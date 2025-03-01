import { Terminal, MessageSquare } from "lucide-react"

export default function Slide12() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">User Interface</h2>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 mb-8">
        <div className="flex items-center mb-4">
          <Terminal className="h-8 w-8 text-green-400 mr-3" />
          <h3 className="text-xl font-semibold">Terminal-Based Chat Interface</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Lightweight ncurses-based terminal UI</li>
              <li>Split-screen design with chat and status panels</li>
              <li>Real-time frequency and signal strength display</li>
              <li>Color-coded messages for different sources</li>
              <li>Command history and auto-completion</li>
              <li>Keyboard shortcuts for common operations</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-300 text-center mb-2">[Screenshot: Terminal UI layout]</p>
            <div className="text-xs text-gray-400">
              <p>
                The terminal interface features a main chat area, a status bar showing current frequency and signal
                strength, and an input area for user commands and messages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Example Dialogue</h3>
        </div>
        <div className="bg-black rounded-lg p-4 font-mono text-sm">
          <div className="mb-2">
            <span className="text-green-400">User: </span>
            <span className="text-gray-300">Hi, sir!</span>
          </div>
          <div className="mb-2">
            <span className="text-blue-400">Operator: </span>
            <span className="text-gray-300">Good day, agent. I'm in standby awaiting orders.</span>
          </div>
          <div className="mb-2">
            <span className="text-green-400">User: </span>
            <span className="text-gray-300">We are targeting the enemy's comms on 420.120 MHz.</span>
          </div>
          <div className="mb-2">
            <span className="text-blue-400">Operator: </span>
            <span className="text-gray-300">
              Acknowledged. We are now intercepting the enemy's comms on 420.120 MHz.
            </span>
          </div>
          <div className="mb-2">
            <span className="text-green-400">User: </span>
            <span className="text-gray-300">Are capturing anything interesting?</span>
          </div>
          <div className="mb-2">
            <span className="text-blue-400">Operator: </span>
            <span className="text-gray-300">
              It seems we've caught a glimpse of something, agent. Our intercepts suggest activity in sector 7. Two
              individuals discussing what appears to be a scheduled delivery at 0900 hours tomorrow. The signal quality
              is moderate, but I've identified mentions of "package" and "drop point alpha." Would you like me to
              continue monitoring this frequency or analyze the existing transcripts further?
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

