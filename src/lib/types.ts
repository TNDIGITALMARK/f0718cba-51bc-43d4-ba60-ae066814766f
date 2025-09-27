export interface Business {
  id: string
  name: string
  description: string
  category: string
  subcategory?: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  contact: {
    phone: string
    email: string
    website?: string
  }
  rating: number
  reviewCount: number
  isVerified: boolean
  images: string[]
  hours: {
    [key: string]: {
      open: string
      close: string
      isOpen: boolean
    }
  }
  services: string[]
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  features: string[]
  owner: {
    id: string
    name: string
    email: string
  }
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  businessId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  images?: string[]
  helpfulCount: number
  createdAt: string
  response?: {
    content: string
    ownerName: string
    createdAt: string
  }
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  businessCount: number
  subcategories?: {
    id: string
    name: string
    businessCount: number
  }[]
}

export interface SearchFilters {
  query?: string
  category?: string
  location?: string
  radius?: number
  priceRange?: string[]
  rating?: number
  isOpen?: boolean
  features?: string[]
  verified?: boolean
}

export interface DashboardStats {
  totalViews: number
  totalCalls: number
  totalReviews: number
  averageRating: number
  trendsData: {
    date: string
    views: number
    calls: number
    reviews: number
  }[]
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'customer' | 'business_owner' | 'admin'
  businesses?: string[]
  reviews?: string[]
  favorites?: string[]
  createdAt: string
}