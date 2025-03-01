import { Scan, Radio, Radar } from "lucide-react"

export default function Slide6() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Frequency Scanning</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Scan className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Scanning Techniques</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Automated band scanning to identify active frequencies</li>
            <li>Signal strength threshold detection</li>
            <li>Dwell time of 5 seconds on active frequencies</li>
            <li>Bookmarking of frequencies with consistent activity</li>
            <li>Periodic revisiting of active channels</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Radio className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Frequency Bands of Interest</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 text-gray-300">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">VHF Low</p>
              <p className="text-sm">30-50 MHz</p>
              <p className="text-xs text-gray-400">Public services, business</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">VHF High</p>
              <p className="text-sm">136-174 MHz</p>
              <p className="text-xs text-gray-400">Marine, weather, business</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">UHF</p>
              <p className="text-sm">400-512 MHz</p>
              <p className="text-xs text-gray-400">Public safety, business</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">FRS/GMRS</p>
              <p className="text-sm">462-467 MHz</p>
              <p className="text-xs text-gray-400">Personal communications</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <Radar className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Transmission Classification</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Voice Communications</p>
            <p className="text-sm">
              Identified by modulation patterns and frequency characteristics typical of human speech
            </p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Digital Signals</p>
            <p className="text-sm">
              Distinguished by consistent patterns, regular intervals, and distinctive digital modulation
            </p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Noise/Interference</p>
            <p className="text-sm">
              Filtered out by analyzing signal patterns and comparing to known interference signatures
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

