'use client'

import { Card } from '@/components/ui/card'
import { Clock } from 'lucide-react'

interface BusinessHoursProps {
  hours: {
    [key: string]: {
      open: string
      close: string
      isOpen: boolean
    }
  }
}

export function BusinessHours({ hours }: BusinessHoursProps) {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ]

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':')
    const hourNum = parseInt(hour)
    const ampm = hourNum >= 12 ? 'PM' : 'AM'
    const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum
    return `${displayHour}:${minute} ${ampm}`
  }

  const getCurrentDay = () => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
  }

  return (
    <Card className="p-4">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
        <Clock className="w-4 h-4 mr-2" />
        Business Hours
      </h3>
      <div className="space-y-2">
        {days.map((day) => {
          const dayHours = hours[day]
          const isToday = day === getCurrentDay()

          return (
            <div key={day} className={`flex justify-between text-sm ${isToday ? 'font-medium' : ''}`}>
              <span className={`capitalize ${isToday ? 'text-primary' : 'text-gray-700'}`}>
                {day}
              </span>
              <span className={`${isToday ? 'text-primary' : 'text-gray-600'}`}>
                {dayHours.isOpen ? (
                  `${formatTime(dayHours.open)} - ${formatTime(dayHours.close)}`
                ) : (
                  <span className="text-red-600">Closed</span>
                )}
              </span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}