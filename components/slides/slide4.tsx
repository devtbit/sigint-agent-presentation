import { Antenna, Cpu, Network, Usb, Radio } from "lucide-react"

export default function Slide4() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Hardware Setup</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Cpu className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Raspberry Pi</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Raspberry Pi 4 Model B</li>
            <li>8GB RAM</li>
            <li>64GB SD Card</li>
            <li>Raspbian OS</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Usb className="h-8 w-8 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold">RTL-SDR</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>RTL-SDR V3 Dongle</li>
            <li>Frequency range: 500 kHz - 1.7 GHz</li>
            <li>USB 2.0 connection</li>
            <li>SMA antenna connector</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Radio className="h-8 w-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold">GQRX Software</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Open-source SDR receiver</li>
            <li>Configurable for RTL-SDR</li>
            <li>UDP streaming capability</li>
            <li>Frequency control via remote commands</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <h3 className="text-xl font-semibold mb-4">Hardware Architecture</h3>
        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
        <div className="flex justify-center mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-center items-center p-4 mb-4">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 flex flex-col items-center">
                <Antenna className="h-10 w-10 text-blue-700 mb-2" />
                <div className="text-center font-medium">Antenna</div>
                <div className="text-xs text-center text-gray-600">Telescopic/Dipole</div>
              </div>
              <div className="h-0.5 w-16 bg-blue-400"></div>
              <div className="bg-green-100 p-4 rounded-lg border border-green-300 flex flex-col items-center">
                <Radio className="h-10 w-10 text-green-700 mb-2" />
                <div className="text-center font-medium">RTL-SDR</div>
                <div className="text-xs text-center text-gray-600">500kHz-1.7GHz</div>
              </div>
              <div className="h-0.5 w-16 bg-blue-400"></div>
              <div className="bg-red-100 p-4 rounded-lg border border-red-300 flex flex-col items-center">
                <Cpu className="h-10 w-10 text-red-700 mb-2" />
                <div className="text-center font-medium">Raspberry Pi 4</div>
                <div className="text-xs text-center text-gray-600">4GB RAM</div>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg border border-purple-300 flex flex-col items-center">
                <div className="text-center font-medium">GQRX Software</div>
                <div className="text-xs text-center text-gray-600">Signal Reception</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

