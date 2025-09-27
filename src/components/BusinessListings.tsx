'use client'

import { BusinessCard } from '@/components/BusinessCard'
import { mockBusinesses } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'

export function BusinessListings() {
  const featuredBusinesses = mockBusinesses.slice(0, 6)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8 py-3">
            Load More
          </Button>
        </div>
      </div>
    </section>
  )
}