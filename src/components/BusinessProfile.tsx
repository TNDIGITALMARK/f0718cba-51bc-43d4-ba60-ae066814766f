'use client'

import { Business } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, MapPin, Phone, Globe, Clock, Share2, Heart, CheckCircle } from 'lucide-react'
import { ReviewSection } from '@/components/ReviewSection'
import { ContactButtons } from '@/components/ContactButtons'
import { BusinessHours } from '@/components/BusinessHours'
import { PhotoGallery } from '@/components/PhotoGallery'

interface BusinessProfileProps {
  business: Business
}

export function BusinessProfile({ business }: BusinessProfileProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Info */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
                  {business.isVerified && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>
                <p className="text-lg text-gray-600 capitalize">
                  {business.category.replace('-', ' ')} • {business.priceRange}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {renderStars(business.rating)}
                </div>
                <span className="text-xl font-semibold">{business.rating.toFixed(1)}</span>
              </div>
              <span className="text-gray-600">
                Based on {business.reviewCount} reviews
              </span>
            </div>

            {/* Status and Location */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-3 text-gray-400" />
                <span className={isOpenNow() ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                  {isOpenNow() ? 'Open now' : 'Closed'}
                </span>
                <span className="ml-2">• See hours</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <span>
                  {business.address.street}, {business.address.city}, {business.address.state} {business.address.zipCode}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {business.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {business.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="bg-gray-100 text-gray-700">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {business.services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Actions */}
          <ContactButtons business={business} />

          {/* Business Hours */}
          <BusinessHours hours={business.hours} />

          {/* Map Placeholder */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map View</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {business.address.street}, {business.address.city}, {business.address.state}
            </p>
          </Card>
        </div>
      </div>

      {/* Tabbed Content */}
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="info">More Info</TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-6">
          <PhotoGallery images={business.images} businessName={business.name} />
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <ReviewSection businessId={business.id} />
        </TabsContent>

        <TabsContent value="info" className="mt-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{business.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <a href={business.contact.website} className="text-primary hover:underline">
                      {business.contact.website}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Business Details</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Price Range: {business.priceRange}</p>
                  <p>Category: {business.category}</p>
                  <p>Verified: {business.isVerified ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}