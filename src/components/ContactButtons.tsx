'use client'

import { Business } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Globe, Mail, MapPin } from 'lucide-react'

interface ContactButtonsProps {
  business: Business
}

export function ContactButtons({ business }: ContactButtonsProps) {
  const handleCall = () => {
    window.open(`tel:${business.contact.phone}`, '_self')
  }

  const handleWebsite = () => {
    if (business.contact.website) {
      window.open(business.contact.website, '_blank')
    }
  }

  const handleEmail = () => {
    window.open(`mailto:${business.contact.email}`, '_self')
  }

  const handleDirections = () => {
    const address = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zipCode}`
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank')
  }

  return (
    <Card className="p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Contact & Actions</h3>
      <div className="space-y-3">
        <Button onClick={handleCall} className="w-full justify-start">
          <Phone className="w-4 h-4 mr-3" />
          Call {business.contact.phone}
        </Button>

        {business.contact.website && (
          <Button onClick={handleWebsite} variant="outline" className="w-full justify-start">
            <Globe className="w-4 h-4 mr-3" />
            Visit Website
          </Button>
        )}

        <Button onClick={handleEmail} variant="outline" className="w-full justify-start">
          <Mail className="w-4 h-4 mr-3" />
          Send Email
        </Button>

        <Button onClick={handleDirections} variant="outline" className="w-full justify-start">
          <MapPin className="w-4 h-4 mr-3" />
          Get Directions
        </Button>
      </div>
    </Card>
  )
}