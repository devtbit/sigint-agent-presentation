import { BookOpen, Award, MessageSquare } from "lucide-react"

export default function Slide15() {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl px-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Final Thoughts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold">Accessible Technology</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Low-cost SDR hardware makes signal capture widely available</li>
            <li>Open source LLMs enable sophisticated analysis capabilities</li>
            <li>Function calling APIs allow for agents to leverage hardware</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center mb-4">
            <Award className="h-8 w-8 text-yellow-400 mr-3" />
            <h3 className="text-xl font-semibold">Empowering Innovation</h3>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300">
              The SIGINT Agent demonstrates how combining accessible hardware with open source LLMs democratizes technology that was once limited to specialized agencies, enabling researchers, hobbyists, and organizations to build sophisticated signal intelligence systems.
            </p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-300">
              As open source LLMs continue to advance, we're entering an era where anyone with basic technical skills can develop powerful SIGINT applications for emergency response, scientific research, and community safety initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-8 w-8 text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold">Thank You</h3>
        </div>
        <div className="text-center text-gray-300 p-4">
          <p className="mb-4">Thank you for your attention! Questions and discussion are welcome.</p>
        </div>
      </div>
    </div>
  )
}

