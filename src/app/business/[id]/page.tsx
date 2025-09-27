'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessProfile } from '@/components/BusinessProfile'
import { mockBusinesses } from '@/lib/mock-data'
import { notFound } from 'next/navigation'

interface BusinessPageProps {
  params: {
    id: string
  }
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = mockBusinesses.find(b => b.id === params.id)

  if (!business) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <BusinessProfile business={business} />
      <Footer />
    </div>
  )
}