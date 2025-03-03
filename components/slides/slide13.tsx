import React from "react"

export default function Slide13() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8">Demo</h2>
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
        <video 
          src="/demo3.mkv" 
          controls 
          className="w-full h-full"
          controlsList="nodownload"
        />
      </div>
    </div>
  )
}

