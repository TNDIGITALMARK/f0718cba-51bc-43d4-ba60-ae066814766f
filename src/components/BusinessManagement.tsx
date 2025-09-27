'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Edit,
  Camera,
  Clock,
  MapPin,
  Phone,
  Globe,
  Mail,
  Save,
  Eye,
  Settings
} from 'lucide-react'
import { mockBusinesses } from '@/lib/mock-data'

export function BusinessManagement() {
  const business = mockBusinesses[0] // Tony's Italian Kitchen

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Management</h1>
          <p className="text-gray-600 mt-2">Manage your business information and settings</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Verified
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  defaultValue={business.name}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  defaultValue={business.category}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue={business.description}
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="priceRange">Price Range</Label>
                <Input
                  id="priceRange"
                  defaultValue={business.priceRange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="services">Services (comma-separated)</Label>
                <Input
                  id="services"
                  defaultValue={business.services.join(', ')}
                  className="mt-1"
                />
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center mt-1">
                  <Phone className="w-4 h-4 text-gray-400 mr-2" />
                  <Input
                    id="phone"
                    defaultValue={business.contact.phone}
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="flex items-center mt-1">
                  <Mail className="w-4 h-4 text-gray-400 mr-2" />
                  <Input
                    id="email"
                    defaultValue={business.contact.email}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="website">Website URL</Label>
              <div className="flex items-center mt-1">
                <Globe className="w-4 h-4 text-gray-400 mr-2" />
                <Input
                  id="website"
                  defaultValue={business.contact.website}
                  className="flex-1"
                />
              </div>
            </div>
          </Card>

          {/* Address */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Address
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  defaultValue={business.address.street}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    defaultValue={business.address.city}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    defaultValue={business.address.state}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    defaultValue={business.address.zipCode}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Photos */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              Photos
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              <Camera className="w-4 h-4 mr-2" />
              Add Photos
            </Button>
          </Card>

          {/* Business Hours */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Business Hours
            </h3>
            <div className="space-y-3">
              {Object.entries(business.hours).map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-sm capitalize text-gray-700">{day}</span>
                  <div className="flex items-center space-x-2">
                    <Input
                      defaultValue={hours.open}
                      className="w-20 text-xs"
                      size={1}
                    />
                    <span className="text-gray-500">-</span>
                    <Input
                      defaultValue={hours.close}
                      className="w-20 text-xs"
                      size={1}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Settings className="w-4 h-4 mr-2" />
              Advanced Settings
            </Button>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Views</span>
                <span className="font-medium">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">This Month</span>
                <span className="font-medium">456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Reviews</span>
                <span className="font-medium">{business.reviewCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rating</span>
                <span className="font-medium">{business.rating}/5.0</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}