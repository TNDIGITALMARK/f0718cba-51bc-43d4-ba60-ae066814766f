'use client'

import { Header } from '@/components/Header'
import { DashboardSidebar } from '@/components/DashboardSidebar'
import { DashboardOverview } from '@/components/DashboardOverview'
import { BusinessManagement } from '@/components/BusinessManagement'
import { ReviewManagement } from '@/components/ReviewManagement'
import { DashboardAnalytics } from '@/components/DashboardAnalytics'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />
      case 'business':
        return <BusinessManagement />
      case 'reviews':
        return <ReviewManagement />
      case 'analytics':
        return <DashboardAnalytics />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}