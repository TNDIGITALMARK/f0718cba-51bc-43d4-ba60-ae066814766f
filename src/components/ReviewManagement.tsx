'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Star, MessageCircle, Clock, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { mockReviews } from '@/lib/mock-data'
import { formatDistanceToNow } from 'date-fns'

export function ReviewManagement() {
  const reviews = mockReviews.filter(review => review.businessId === '1')

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Review Management</h1>
          <p className="text-gray-600 mt-2">Manage and respond to customer reviews</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">127</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">4.8</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">3</div>
            <div className="text-sm text-gray-600">Pending Response</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Response Rate</div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search reviews..."
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </Card>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            {/* Review Header */}
            <div className="flex items-start space-x-4 mb-4">
              <Avatar className="w-12 h-12">
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
                  <div className="flex items-center space-x-2">
                    {!review.response && (
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        Needs Response
                      </Badge>
                    )}
                    <Badge variant="secondary">
                      {review.rating >= 4 ? 'Positive' : review.rating >= 3 ? 'Neutral' : 'Negative'}
                    </Badge>
                  </div>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                  <p className="text-gray-700 leading-relaxed">{review.content}</p>
                </div>

                {/* Response Section */}
                {review.response ? (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        Your Response
                      </Badge>
                      <span className="text-sm text-gray-600">
                        {formatDistanceToNow(new Date(review.response.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{review.response.content}</p>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      Edit Response
                    </Button>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <Label htmlFor={`response-${review.id}`} className="text-sm font-medium text-gray-700 mb-2 block">
                      Write a response
                    </Label>
                    <Textarea
                      id={`response-${review.id}`}
                      placeholder="Thank you for your review! We appreciate your feedback..."
                      className="mb-3"
                      rows={3}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        Save Draft
                      </Button>
                      <Button size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Response
                      </Button>
                    </div>
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
                  </span>
                  <span className="text-gray-600">
                    {review.helpfulCount} people found this helpful
                  </span>
                </div>
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