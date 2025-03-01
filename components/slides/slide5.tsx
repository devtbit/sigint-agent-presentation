import { Antenna, Gauge, WavesIcon as WaveSine } from "lucide-react"

export default function Slide5() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Antenna & Signal Optimization</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Antenna className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Antenna Types</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">Telescopic</p>
              <p className="text-sm">General purpose, adjustable length</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">Dipole</p>
              <p className="text-sm">Better for specific frequencies</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">Discone</p>
              <p className="text-sm">Wideband reception</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="font-medium">Yagi</p>
              <p className="text-sm">Directional, high gain</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Gauge className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">Practical Tricks</h3>
          </div>
          <div className="text-gray-300 mb-4">
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Squelch: -55dB; filter out noise</li>
              <li>AGC: Fast; improved listening experience; maintains consistent volume levels</li>
              <li>Mode: Narrow FM and adjust depending on signal</li>
              <li>LNA optimization for improved sensitivity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <WaveSine className="h-8 w-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold">Signal-to-Noise Optimization</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Proper antenna placement away from interference sources</li>
            <li>RF gain adjustment to prevent overloading</li>
            <li>Digital noise reduction filters in GQRX</li>
            <li>Frequency fine-tuning for optimal reception</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

