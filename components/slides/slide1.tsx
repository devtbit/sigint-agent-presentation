import { Radio, Waves, Shield } from "lucide-react"

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl px-8 text-center">
      <div className="flex gap-4 mb-6">
        <Radio className="h-16 w-16 text-blue-400" />
        <Waves className="h-16 w-16 text-green-400" />
        <Shield className="h-16 w-16 text-red-400" />
      </div>

      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent mb-4">
        SIGINT Agent
      </h1>

      <p className="text-2xl text-gray-300 mb-8">A Proof-of-Concept for AI-Powered SIGINT Operator with Open Source tools</p>

      <div className="mt-12 text-gray-400">
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}

