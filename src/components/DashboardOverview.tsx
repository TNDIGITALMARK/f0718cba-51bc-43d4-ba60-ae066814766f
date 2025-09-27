'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Eye,
  Phone,
  Star,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  Globe
} from 'lucide-react'

export function DashboardOverview() {
  const stats = [
    {
      title: 'Total Views',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: Eye
    },
    {
      title: 'Phone Calls',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: Phone
    },
    {
      title: 'Reviews',
      value: '127',
      change: '+15%',
      changeType: 'positive',
      icon: Star
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.1',
      changeType: 'positive',
      icon: TrendingUp
    }
  ]

  const recentActivity = [
    {
      type: 'review',
      message: 'New 5-star review from Maria Rodriguez',
      time: '2 hours ago',
      action: 'Respond'
    },
    {
      type: 'view',
      message: '25 new profile views today',
      time: '4 hours ago',
      action: null
    },
    {
      type: 'call',
      message: 'Phone call from potential customer',
      time: '6 hours ago',
      action: null
    },
    {
      type: 'update',
      message: 'Business hours updated successfully',
      time: '1 day ago',
      action: null
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Tony!</h1>
          <p className="text-gray-600 mt-2">Here's how your business is performing</p>
        </div>
        <Badge className="bg-green-100 text-green-800 border-green-200">
          Business Active
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  stat.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from last month</span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
                {activity.action && (
                  <Button size="sm" variant="outline">
                    {activity.action}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <Button className="w-full justify-start h-12">
              <MessageSquare className="w-4 h-4 mr-3" />
              Respond to Recent Reviews
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              <Calendar className="w-4 h-4 mr-3" />
              Update Business Hours
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              <Users className="w-4 h-4 mr-3" />
              View Customer Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              <Globe className="w-4 h-4 mr-3" />
              Edit Business Profile
            </Button>
          </div>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">Performance charts coming soon</p>
          </div>
        </div>
      </Card>
    </div>
  )
}