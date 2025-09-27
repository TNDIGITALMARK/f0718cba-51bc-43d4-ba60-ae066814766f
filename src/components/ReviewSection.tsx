'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, ThumbsUp, MessageCircle } from 'lucide-react'
import { mockReviews } from '@/lib/mock-data'
import { Review } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'

interface ReviewSectionProps {
  businessId: string
}

export function ReviewSection({ businessId }: ReviewSectionProps) {
  const reviews = mockReviews.filter(review => review.businessId === businessId)

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Reviews ({reviews.length})
          </h3>
          <Button className="px-6">
            Write a Review
          </Button>
        </div>

        {/* Rating Distribution Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Rating Distribution</h4>
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center space-x-3 mb-2">
                <span className="text-sm text-gray-600 w-4">{stars}</span>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {stars === 5 ? '70%' : stars === 4 ? '20%' : '5%'}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Recent Activity</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>This week</span>
                <span className="font-medium">5 reviews</span>
              </div>
              <div className="flex justify-between">
                <span>This month</span>
                <span className="font-medium">23 reviews</span>
              </div>
              <div className="flex justify-between">
                <span>All time</span>
                <span className="font-medium">{reviews.length} reviews</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review: Review) => (
          <Card key={review.id} className="p-6">
            {/* Review Header */}
            <div className="flex items-start space-x-4 mb-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src={review.userAvatar} alt={review.userName} />
                <AvatarFallback>{getInitials(review.userName)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{review.userName}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                  <p className="text-gray-700 leading-relaxed">{review.content}</p>
                </div>

                {/* Review Actions */}
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful ({review.helpfulCount})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Reply
                  </Button>
                </div>

                {/* Owner Response */}
                {review.response && (
                  <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Owner Response
                      </Badge>
                      <span className="text-sm font-medium text-gray-700">
                        {review.response.ownerName}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDistanceToNow(new Date(review.response.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{review.response.content}</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="px-8">
          Load More Reviews
        </Button>
      </div>
    </div>
  )
}