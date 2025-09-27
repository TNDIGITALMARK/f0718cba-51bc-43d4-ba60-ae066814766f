import { Business, Review, Category, User } from './types'

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: "Tony's Italian Kitchen",
    description: "Authentic Italian cuisine with family recipes passed down for generations. Experience traditional flavors in a warm, welcoming atmosphere.",
    category: 'restaurants',
    subcategory: 'italian',
    address: {
      street: '123 Main Street',
      city: 'Downtown',
      state: 'NY',
      zipCode: '10001',
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    contact: {
      phone: '(555) 123-4567',
      email: 'info@tonysitaliankitchen.com',
      website: 'https://tonysitaliankitchen.com'
    },
    rating: 4.8,
    reviewCount: 127,
    isVerified: true,
    images: [
      '/images/tonys-exterior.jpg',
      '/images/tonys-pasta.jpg',
      '/images/tonys-interior.jpg'
    ],
    hours: {
      monday: { open: '11:00', close: '22:00', isOpen: true },
      tuesday: { open: '11:00', close: '22:00', isOpen: true },
      wednesday: { open: '11:00', close: '22:00', isOpen: true },
      thursday: { open: '11:00', close: '22:00', isOpen: true },
      friday: { open: '11:00', close: '23:00', isOpen: true },
      saturday: { open: '11:00', close: '23:00', isOpen: true },
      sunday: { open: '12:00', close: '21:00', isOpen: true }
    },
    services: ['Dine-in', 'Takeout', 'Delivery', 'Catering', 'Private Events'],
    priceRange: '$$',
    features: ['Family-friendly', 'Romantic', 'Wine Bar', 'Outdoor Seating', 'Live Music'],
    owner: {
      id: 'owner1',
      name: 'Tony Marcello',
      email: 'tony@tonysitaliankitchen.com'
    },
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2024-09-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Metro Fitness Center',
    description: "State-of-the-art fitness facility with personal training, group classes, and modern equipment. Your journey to better health starts here.",
    category: 'fitness',
    subcategory: 'gym',
    address: {
      street: '456 Wellness Boulevard',
      city: 'Midtown',
      state: 'NY',
      zipCode: '10018',
      coordinates: { lat: 40.7505, lng: -73.9934 }
    },
    contact: {
      phone: '(555) 987-6543',
      email: 'info@metrofitnessnyc.com',
      website: 'https://metrofitnessnyc.com'
    },
    rating: 4.6,
    reviewCount: 89,
    isVerified: true,
    images: [
      '/images/metro-gym-floor.jpg',
      '/images/metro-cardio.jpg',
      '/images/metro-classes.jpg'
    ],
    hours: {
      monday: { open: '05:00', close: '23:00', isOpen: true },
      tuesday: { open: '05:00', close: '23:00', isOpen: true },
      wednesday: { open: '05:00', close: '23:00', isOpen: true },
      thursday: { open: '05:00', close: '23:00', isOpen: true },
      friday: { open: '05:00', close: '22:00', isOpen: true },
      saturday: { open: '07:00', close: '20:00', isOpen: true },
      sunday: { open: '08:00', close: '19:00', isOpen: true }
    },
    services: ['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Membership Plans'],
    priceRange: '$$$',
    features: ['Modern Equipment', 'Locker Rooms', 'Showers', 'Parking', '24/7 Access'],
    owner: {
      id: 'owner2',
      name: 'Sarah Mitchell',
      email: 'sarah@metrofitnessnyc.com'
    },
    createdAt: '2023-03-10T00:00:00Z',
    updatedAt: '2024-08-15T00:00:00Z'
  },
  {
    id: '3',
    name: 'Gourmet Bites',
    description: "Upscale dining experience featuring modern American cuisine with locally sourced ingredients and creative presentations.",
    category: 'restaurants',
    subcategory: 'american',
    address: {
      street: '789 Culinary Drive',
      city: 'Uptown',
      state: 'NY',
      zipCode: '10025',
      coordinates: { lat: 40.7831, lng: -73.9712 }
    },
    contact: {
      phone: '(555) 456-7890',
      email: 'reservations@gourmetbites.com',
      website: 'https://gourmetbites.com'
    },
    rating: 4.9,
    reviewCount: 203,
    isVerified: true,
    images: [
      '/images/gourmet-dining.jpg',
      '/images/gourmet-dish.jpg',
      '/images/gourmet-bar.jpg'
    ],
    hours: {
      monday: { open: '17:00', close: '23:00', isOpen: false },
      tuesday: { open: '17:00', close: '23:00', isOpen: true },
      wednesday: { open: '17:00', close: '23:00', isOpen: true },
      thursday: { open: '17:00', close: '23:00', isOpen: true },
      friday: { open: '17:00', close: '24:00', isOpen: true },
      saturday: { open: '17:00', close: '24:00', isOpen: true },
      sunday: { open: '17:00', close: '22:00', isOpen: true }
    },
    services: ['Fine Dining', 'Wine Pairing', 'Private Events', 'Chef\'s Table'],
    priceRange: '$$$$',
    features: ['Upscale', 'Wine Selection', 'Vegan Options', 'Gluten-Free', 'Reservations Required'],
    owner: {
      id: 'owner3',
      name: 'Chef Marcus Johnson',
      email: 'marcus@gourmetbites.com'
    },
    createdAt: '2023-05-20T00:00:00Z',
    updatedAt: '2024-09-10T00:00:00Z'
  },
  {
    id: '4',
    name: 'Speedy Auto Repair',
    description: "Professional automotive repair services with certified mechanics and warranty on all work. Fast, reliable, and affordable.",
    category: 'automotive',
    subcategory: 'repair',
    address: {
      street: '321 Mechanic Street',
      city: 'Industrial',
      state: 'NY',
      zipCode: '10019',
      coordinates: { lat: 40.7614, lng: -73.9776 }
    },
    contact: {
      phone: '(555) 321-0987',
      email: 'service@speedyautorepair.com',
      website: 'https://speedyautorepair.com'
    },
    rating: 4.4,
    reviewCount: 156,
    isVerified: true,
    images: [
      '/images/speedy-garage.jpg',
      '/images/speedy-mechanic.jpg',
      '/images/speedy-tools.jpg'
    ],
    hours: {
      monday: { open: '07:00', close: '18:00', isOpen: true },
      tuesday: { open: '07:00', close: '18:00', isOpen: true },
      wednesday: { open: '07:00', close: '18:00', isOpen: true },
      thursday: { open: '07:00', close: '18:00', isOpen: true },
      friday: { open: '07:00', close: '18:00', isOpen: true },
      saturday: { open: '08:00', close: '16:00', isOpen: true },
      sunday: { open: '10:00', close: '15:00', isOpen: false }
    },
    services: ['Oil Changes', 'Brake Repair', 'Engine Diagnostics', 'Transmission Service', 'Tire Installation'],
    priceRange: '$$',
    features: ['Certified Mechanics', 'Warranty', 'Free Estimates', 'Loaner Cars', 'AAA Approved'],
    owner: {
      id: 'owner4',
      name: 'Mike Rodriguez',
      email: 'mike@speedyautorepair.com'
    },
    createdAt: '2023-07-08T00:00:00Z',
    updatedAt: '2024-08-22T00:00:00Z'
  },
  {
    id: '5',
    name: 'Bright Minds Academy',
    description: "Premier educational center offering tutoring, test prep, and enrichment programs for students of all ages.",
    category: 'education',
    subcategory: 'tutoring',
    address: {
      street: '654 Learning Lane',
      city: 'Educational District',
      state: 'NY',
      zipCode: '10022',
      coordinates: { lat: 40.7549, lng: -73.9840 }
    },
    contact: {
      phone: '(555) 234-5678',
      email: 'info@brightmindsacademy.com',
      website: 'https://brightmindsacademy.com'
    },
    rating: 4.7,
    reviewCount: 78,
    isVerified: true,
    images: [
      '/images/bright-classroom.jpg',
      '/images/bright-students.jpg',
      '/images/bright-tutoring.jpg'
    ],
    hours: {
      monday: { open: '15:00', close: '21:00', isOpen: true },
      tuesday: { open: '15:00', close: '21:00', isOpen: true },
      wednesday: { open: '15:00', close: '21:00', isOpen: true },
      thursday: { open: '15:00', close: '21:00', isOpen: true },
      friday: { open: '15:00', close: '20:00', isOpen: true },
      saturday: { open: '09:00', close: '17:00', isOpen: true },
      sunday: { open: '10:00', close: '16:00', isOpen: true }
    },
    services: ['SAT/ACT Prep', 'Math Tutoring', 'Reading Comprehension', 'College Counseling', 'Summer Programs'],
    priceRange: '$$$',
    features: ['Certified Teachers', 'Small Groups', 'One-on-One', 'Progress Tracking', 'Free Assessment'],
    owner: {
      id: 'owner5',
      name: 'Dr. Jennifer Chen',
      email: 'jennifer@brightmindsacademy.com'
    },
    createdAt: '2023-09-12T00:00:00Z',
    updatedAt: '2024-09-05T00:00:00Z'
  }
]

export const mockReviews: Review[] = [
  {
    id: 'rev1',
    businessId: '1',
    userId: 'user1',
    userName: 'Maria Rodriguez',
    userAvatar: '/avatars/maria.jpg',
    rating: 5,
    title: 'Absolutely phenomenal!',
    content: "Tony's Italian Kitchen exceeded all my expectations. The pasta was perfectly al dente, the sauce was rich and flavorful, and the service was impeccable. The atmosphere felt like being welcomed into a family home. Can't wait to return!",
    helpfulCount: 23,
    createdAt: '2024-09-15T19:30:00Z',
    response: {
      content: "Maria, thank you so much for your wonderful review! It means the world to our family to hear that you felt at home with us. We can't wait to welcome you back for another memorable meal.",
      ownerName: 'Tony Marcello',
      createdAt: '2024-09-16T10:15:00Z'
    }
  },
  {
    id: 'rev2',
    businessId: '1',
    userId: 'user2',
    userName: 'David Kim',
    rating: 4,
    title: 'Great food, cozy atmosphere',
    content: "Enjoyed a lovely dinner here with my wife. The chicken parmigiana was excellent and the tiramisu was the perfect end to the meal. The only minor complaint was that it was quite busy and we had to wait a bit for our table.",
    helpfulCount: 15,
    createdAt: '2024-09-10T20:45:00Z'
  },
  {
    id: 'rev3',
    businessId: '2',
    userId: 'user3',
    userName: 'Ashley Thompson',
    userAvatar: '/avatars/ashley.jpg',
    rating: 5,
    title: 'Best gym in the city!',
    content: "I've been a member for 6 months and Metro Fitness has transformed my fitness journey. The equipment is always clean and well-maintained, the staff is incredibly helpful, and the group classes are motivating and fun.",
    helpfulCount: 31,
    createdAt: '2024-09-12T14:20:00Z',
    response: {
      content: "Ashley, thank you for being such a dedicated member! Your progress has been inspiring to watch. Keep up the amazing work!",
      ownerName: 'Sarah Mitchell',
      createdAt: '2024-09-13T09:00:00Z'
    }
  },
  {
    id: 'rev4',
    businessId: '2',
    userId: 'user4',
    userName: 'James Wilson',
    rating: 4,
    title: 'Good facilities, friendly staff',
    content: "Metro Fitness has everything I need for my workouts. The trainers are knowledgeable and the facilities are top-notch. My only suggestion would be to expand the cardio area as it can get crowded during peak hours.",
    helpfulCount: 18,
    createdAt: '2024-09-08T07:30:00Z'
  }
]

export const mockCategories: Category[] = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: 'utensils',
    description: 'Dining establishments and eateries',
    businessCount: 1250,
    subcategories: [
      { id: 'italian', name: 'Italian', businessCount: 89 },
      { id: 'american', name: 'American', businessCount: 156 },
      { id: 'asian', name: 'Asian', businessCount: 134 },
      { id: 'mexican', name: 'Mexican', businessCount: 78 }
    ]
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    icon: 'heart',
    description: 'Healthcare and wellness services',
    businessCount: 890,
    subcategories: [
      { id: 'clinics', name: 'Medical Clinics', businessCount: 203 },
      { id: 'dental', name: 'Dental', businessCount: 156 },
      { id: 'fitness', name: 'Fitness Centers', businessCount: 89 },
      { id: 'spa', name: 'Spas & Wellness', businessCount: 67 }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: 'car',
    description: 'Auto repair and services',
    businessCount: 567,
    subcategories: [
      { id: 'repair', name: 'Auto Repair', businessCount: 234 },
      { id: 'dealerships', name: 'Dealerships', businessCount: 89 },
      { id: 'parts', name: 'Auto Parts', businessCount: 123 },
      { id: 'detailing', name: 'Car Detailing', businessCount: 56 }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'graduation-cap',
    description: 'Educational services and institutions',
    businessCount: 445,
    subcategories: [
      { id: 'tutoring', name: 'Tutoring', businessCount: 167 },
      { id: 'schools', name: 'Schools', businessCount: 89 },
      { id: 'training', name: 'Training Centers', businessCount: 123 },
      { id: 'childcare', name: 'Childcare', businessCount: 66 }
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Shopping',
    icon: 'shopping-bag',
    description: 'Stores and shopping centers',
    businessCount: 1100,
    subcategories: [
      { id: 'clothing', name: 'Clothing', businessCount: 345 },
      { id: 'electronics', name: 'Electronics', businessCount: 234 },
      { id: 'grocery', name: 'Grocery', businessCount: 156 },
      { id: 'home', name: 'Home & Garden', businessCount: 189 }
    ]
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: 'briefcase',
    description: 'Legal, financial, and business services',
    businessCount: 780,
    subcategories: [
      { id: 'legal', name: 'Legal Services', businessCount: 234 },
      { id: 'accounting', name: 'Accounting', businessCount: 189 },
      { id: 'consulting', name: 'Consulting', businessCount: 156 },
      { id: 'marketing', name: 'Marketing', businessCount: 123 }
    ]
  }
]

export const mockUsers: User[] = [
  {
    id: 'user1',
    name: 'Maria Rodriguez',
    email: 'maria@example.com',
    avatar: '/avatars/maria.jpg',
    role: 'customer',
    reviews: ['rev1'],
    favorites: ['1', '2'],
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'owner1',
    name: 'Tony Marcello',
    email: 'tony@tonysitaliankitchen.com',
    role: 'business_owner',
    businesses: ['1'],
    createdAt: '2023-01-10T00:00:00Z'
  },
  {
    id: 'owner2',
    name: 'Sarah Mitchell',
    email: 'sarah@metrofitnessnyc.com',
    role: 'business_owner',
    businesses: ['2'],
    createdAt: '2023-03-05T00:00:00Z'
  }
]