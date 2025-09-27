'use client'

import { Utensils, Car, GraduationCap, Heart, ShoppingBag, Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

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
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <Image
            src="/generated/categories-hero.png"
            alt="Business Categories"
            width={1200}
            height={300}
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Categories</h2>
          <div className="flex space-x-4">
            <button className="text-primary font-medium hover:text-primary/80">
              Add Business
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              About
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-card border-border"
            >
              <div className="flex flex-col items-start space-y-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-medium text-card-foreground text-sm">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count} businesses</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}