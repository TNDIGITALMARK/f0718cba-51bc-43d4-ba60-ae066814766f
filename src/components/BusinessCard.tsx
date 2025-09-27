'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Phone, Globe, Clock } from 'lucide-react'
import { Business } from '@/lib/types'
import Link from 'next/link'

interface BusinessCardProps {
  business: Business
}

export function BusinessCard({ business }: BusinessCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const isOpenNow = () => {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
    const todayHours = business.hours[currentDay]
    return todayHours?.isOpen || false
  }

  return (
    <Link href={`/business/${business.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white cursor-pointer">
        {/* Business Image */}
        <div className="h-48 bg-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {business.isVerified && (
            <Badge className="absolute top-3 left-3 bg-green-100 text-green-800 border-green-200">
              Verified
            </Badge>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {business.priceRange}
            </Badge>
          </div>
        </div>

      <div className="p-4">
        {/* Business Name and Category */}
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">{business.name}</h3>
          <p className="text-sm text-gray-600 capitalize">{business.category.replace('-', ' ')}</p>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center space-x-1">
            {renderStars(business.rating)}
          </div>
          <span className="font-medium text-sm">{business.rating.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({business.reviewCount} reviews)</span>
        </div>

        {/* Location and Status */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            <span>{business.address.city}, {business.address.state}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-gray-400" />
            <span className={isOpenNow() ? 'text-green-600 font-medium' : 'text-red-600'}>
              {isOpenNow() ? 'Open now' : 'Closed'}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {business.description}
        </p>

        {/* Services */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {business.services.slice(0, 3).map((service) => (
              <Badge key={service} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {business.services.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{business.services.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Contact Actions */}
        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          {business.contact.website && (
            <Button size="sm" variant="outline" className="flex-1">
              <Globe className="w-4 h-4 mr-2" />
              Website
            </Button>
          )}
        </div>
        </div>
      </Card>
    </Link>
  )
}