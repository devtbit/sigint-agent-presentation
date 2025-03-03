"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Slide1 from "@/components/slides/slide1"
import Slide2 from "@/components/slides/slide2"
import Slide3 from "@/components/slides/slide3"
import Slide4 from "@/components/slides/slide4"
import Slide5 from "@/components/slides/slide5"
import Slide6 from "@/components/slides/slide6"
import Slide7 from "@/components/slides/slide7"
import Slide8 from "@/components/slides/slide8"
import Slide9 from "@/components/slides/slide9"
import Slide10 from "@/components/slides/slide10"
import Slide11 from "@/components/slides/slide11"
import Slide12 from "@/components/slides/slide12"
import Slide13 from "@/components/slides/slide13"
import Slide15 from "@/components/slides/slide15"
import Slide16 from "@/components/slides/slide16"

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = 15

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, nextSlide, prevSlide])

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1 />
      case 2:
        return <Slide2 />
      case 3:
        return <Slide3 />
      case 4:
        return <Slide4 />
      case 5:
        return <Slide5 />
      case 6:
        return <Slide6 />
      case 7:
        return <Slide7 />
      case 8:
        return <Slide8 />
      case 9:
        return <Slide9 />
      case 10:
        return <Slide10 />
      case 11:
        return <Slide11 />
      case 12:
        return <Slide12 />
      case 13:
        return <Slide13 />
      case 14:
        return <Slide15 />
      case 15:
        return <Slide16 />
      default:
        return <Slide1 />
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 flex items-center justify-center">{renderSlide()}</div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="bg-black/50 border-gray-700 hover:bg-black/70"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-sm text-gray-400">
          {currentSlide} / {totalSlides}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="bg-black/50 border-gray-700 hover:bg-black/70"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

