'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Camera, Plus } from 'lucide-react'

interface PhotoGalleryProps {
  images: string[]
  businessName: string
}

export function PhotoGallery({ images, businessName }: PhotoGalleryProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <Camera className="w-5 h-5 mr-2" />
          Photos ({images.length})
        </h3>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Photos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  {businessName} Photo {index + 1}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Add more photos placeholder */}
        <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center group cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
          <div className="text-center">
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-primary mx-auto mb-2 transition-colors" />
            <p className="text-sm text-gray-500 group-hover:text-primary transition-colors">
              Add Photo
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}