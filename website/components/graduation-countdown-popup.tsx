"use client"

import { useState, useEffect } from "react"
import { X, GraduationCap, Minimize2, Maximize2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface CountdownPopupProps {
  targetDate?: Date
}

export function GraduationCountdownPopup({ targetDate }: CountdownPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [position, setPosition] = useState<"center" | "top-right" | "bottom-right" | "bottom-left">("center")
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const graduationDeadline = new Date(Date.now() + 40 * 24 * 60 * 60 * 1000)

  useEffect(() => {
    console.log("[v0] GraduationCountdownPopup mounted, setting up timers")

    const showTimer = setTimeout(() => {
      console.log("[v0] Showing graduation popup")
      setIsVisible(true)

      // Auto-minimize after 1 minute if not interacted with
      const minimizeTimer = setTimeout(() => {
        if (!isClosed && !isMinimized) {
          console.log("[v0] Auto-minimizing graduation popup after 1 minute")
          handleMinimize()
        }
      }, 60000) // 1 minute

      return () => clearTimeout(minimizeTimer)
    }, 5000) // 5 seconds for testing

    return () => clearTimeout(showTimer)
  }, [])

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = graduationDeadline.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [graduationDeadline])

  const handleClose = () => {
    console.log("[v0] Closing graduation popup")
    setIsClosed(true)
    setIsMinimized(true)
    setPosition("bottom-right")
  }

  const handleMinimize = () => {
    if (isClosed) {
      // If closed, expand it back to center
      setIsClosed(false)
      setIsMinimized(false)
      setPosition("center")
    } else {
      // Just minimize to bottom-right
      setIsMinimized(!isMinimized)
      if (!isMinimized) {
        setPosition("bottom-right")
      } else {
        setPosition("center")
      }
    }
  }

  const getPositionClasses = () => {
    switch (position) {
      case "top-right":
        return "top-4 right-4"
      case "bottom-right":
        return "bottom-4 right-4"
      case "bottom-left":
        return "bottom-4 left-4"
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    }
  }

  console.log("[v0] GraduationCountdownPopup render - isVisible:", isVisible, "isClosed:", isClosed)

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop - only show when centered and not minimized */}
      {position === "center" && !isMinimized && !isClosed && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      {/* Animated Background Words */}
      {position === "center" && !isMinimized && !isClosed && (
        <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-blue-200/30 text-6xl font-bold animate-pulse">CLEARING</div>
          <div className="absolute top-40 right-20 text-red-200/30 text-4xl font-bold animate-bounce delay-1000">
            GRADUATION
          </div>
          <div className="absolute bottom-32 left-20 text-blue-200/30 text-5xl font-bold animate-pulse delay-2000">
            CLEARANCE
          </div>
          <div className="absolute bottom-20 right-10 text-red-200/30 text-3xl font-bold animate-bounce delay-3000">
            PROCESS
          </div>
          <div className="absolute top-60 left-1/2 text-blue-200/30 text-4xl font-bold animate-pulse delay-4000">
            REQUIREMENTS
          </div>
        </div>
      )}

      {/* Popup */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-in-out ${getPositionClasses()} ${
          isMinimized || isClosed ? "scale-75" : "scale-100"
        }`}
      >
        <Card
          className={`${
            isMinimized || isClosed ? "w-72" : position === "center" ? "w-96 md:w-[520px]" : "w-80"
          } shadow-2xl border-2 border-blue-600 bg-gradient-to-br from-white to-blue-50 transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="relative">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm">Graduation Clearance</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMinimize}
                className="h-6 w-6 p-0 hover:bg-white/20 text-white"
              >
                {isMinimized || isClosed ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-6 w-6 p-0 hover:bg-red-500 text-white"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {!isMinimized && !isClosed && (
            <CardContent className="p-4 space-y-4">
              {/* University Header */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src="/images/logo/bugema.png"
                      alt="Bugema University Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-base">BUGEMA UNIVERSITY</h3>
                    <p className="text-xs text-blue-500 flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      EXCELLENCE IN SERVICE
                      <Star className="w-3 h-3" />
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h2 className="text-2xl font-bold text-blue-600">Have you</h2>
                  <h2 className="text-2xl font-bold text-blue-600">Cleared</h2>
                  <p className="text-red-600 font-semibold text-lg">For Graduation?</p>
                </div>
              </div>

              {/* Countdown Display */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 text-white text-center shadow-inner">
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">Minutes</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">Seconds</div>
                  </div>
                </div>
                <div className="text-lg font-bold">Days to go</div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 space-y-2 border">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">For More Information</h4>
                <div className="grid grid-cols-1 gap-1 text-xs">
                  <div className="flex items-center gap-2 p-1 rounded hover:bg-white/50">
                    <span>📞 +256 774821571 | +256 312351400</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded hover:bg-white/50">
                    <span>📞 +256 702940003 | +256 765742492</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded hover:bg-white/50">
                    <span>🌐 www.bugemauniv.ac.ug</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded hover:bg-white/50">
                    <span>📍 Zirobwe - Gayaza Road, Kampala Central region - 26km</span>
                  </div>
                </div>
              </div>
            </CardContent>
          )}

          {(isMinimized || isClosed) && (
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600">{timeLeft.days} Days Left</span>
                    <div className="text-xs text-gray-500">
                      {timeLeft.hours}h {timeLeft.minutes}m
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  )
}
