'use client'

import { Utensils, Car, GraduationCap, Heart, ShoppingBag, Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function FeaturedCategories() {
  const categories = [
    { name: 'Restaurants', icon: Utensils, count: '1,250' },
    { name: 'Healthcare', icon: Heart, count: '890' },
    { name: 'Automotive', icon: Car, count: '567' },
    { name: 'Education', icon: GraduationCap, count: '445' },
    { name: 'Shopping', icon: ShoppingBag, count: '1,100' },
    { name: 'Professional Services', icon: Briefcase, count: '780' }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <div className="flex space-x-4">
            <button className="text-primary font-medium hover:text-primary/80">
              Add Business
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              About
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white border-gray-200"
            >
              <div className="flex flex-col items-start space-y-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} businesses</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}