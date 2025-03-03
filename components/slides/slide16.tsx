import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Slide16() {
  return (
    <div className="text-center animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6 text-white">Repository</h1>
      <Card className="p-8 max-w-md mx-auto bg-white/10 backdrop-blur border-gray-700">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-64 h-64 bg-white p-4 rounded-lg">
            <Image
              src="/qr.svg"
              alt="QR Code for repository"
              fill
              className="object-contain p-2"
            />
          </div>
          <a 
            href="https://github.com/devtbit/sigint-agent-poc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-xl font-medium transition-colors"
          >
            github.com/devtbit/sigint-agent-poc
          </a>
        </div>
      </Card>
    </div>
  )
} 