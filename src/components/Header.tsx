'use client'

import { Search, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">ConnectHub</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative flex items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Find local services..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-l-md focus:border-primary focus:ring-primary"
                />
              </div>
              <Button className="rounded-l-none px-6">
                Search
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-primary">
              Categories
            </Button>
            <Link href="/dashboard">
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                Dashboard
              </Button>
            </Link>
            <Button variant="ghost" className="text-gray-600 hover:text-primary">
              Add Business
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-primary">
              About
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}