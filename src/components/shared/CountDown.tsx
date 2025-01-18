'use client'

import { useState, useEffect } from 'react'
import { Circle } from 'lucide-react'

interface TimeUnit {
  value: number
  label: string
  color: string
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days', color: 'rgb(236, 72, 153)' }, // Pink
    { value: timeLeft.hours, label: 'Hours', color: 'rgb(59, 130, 246)' }, // Blue
    { value: timeLeft.minutes, label: 'Minutes', color: 'rgb(249, 115, 22)' }, // Orange
    { value: timeLeft.seconds, label: 'Seconds', color: 'rgb(139, 92, 246)' }, // Purple
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="relative w-24 h-24">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="45"
              fill="transparent"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="6"
            />
            {/* Progress circle */}
            <circle
              cx="48"
              cy="48"
              r="45"
              fill="transparent"
              stroke={unit.color}
              strokeWidth="6"
              strokeDasharray={`${(unit.value / (unit.label === 'Days' ? 365 : unit.label === 'Hours' ? 24 : 60)) * 283} 283`}
            />
          </svg>
          {/* Number and label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-2xl font-bold text-white">{unit.value}</div>
            <div className="text-xs text-gray-300">{unit.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer

