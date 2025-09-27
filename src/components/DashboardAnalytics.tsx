'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Eye,
  Phone,
  Star,
  Users,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Filter
} from 'lucide-react'

export function DashboardAnalytics() {
  const monthlyStats = [
    { month: 'Jan', views: 2100, calls: 45, reviews: 12 },
    { month: 'Feb', views: 2300, calls: 52, reviews: 15 },
    { month: 'Mar', views: 2800, calls: 61, reviews: 18 },
    { month: 'Apr', views: 2400, calls: 48, reviews: 14 },
    { month: 'May', views: 3100, calls: 68, reviews: 22 },
    { month: 'Jun', views: 2900, calls: 65, reviews: 19 }
  ]

  const keyMetrics = [
    {
      title: 'Profile Views',
      value: '18,542',
      change: '+15.3%',
      changeType: 'positive',
      period: 'Last 30 days',
      icon: Eye
    },
    {
      title: 'Phone Calls',
      value: '342',
      change: '+8.7%',
      changeType: 'positive',
      period: 'Last 30 days',
      icon: Phone
    },
    {
      title: 'New Reviews',
      value: '28',
      change: '+22.1%',
      changeType: 'positive',
      period: 'Last 30 days',
      icon: Star
    },
    {
      title: 'Customer Engagement',
      value: '4.2%',
      change: '-2.1%',
      changeType: 'negative',
      period: 'Conversion rate',
      icon: Users
    }
  ]

  const topSources = [
    { source: 'Google Search', percentage: 45, visits: 8234 },
    { source: 'Direct', percentage: 28, visits: 5102 },
    { source: 'Social Media', percentage: 15, visits: 2735 },
    { source: 'Referrals', percentage: 12, visits: 2187 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Track your business performance and customer insights</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.title} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-3 rounded-lg ${
                  metric.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <div className="flex items-center">
                  {metric.changeType === 'positive' ? (
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.title}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.period}</p>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">Interactive Chart</p>
              <p className="text-sm text-gray-400">Views, Calls & Reviews over time</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-blue-600">2,847</div>
              <div className="text-xs text-gray-500">Avg Views</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-600">57</div>
              <div className="text-xs text-gray-500">Avg Calls</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-purple-600">17</div>
              <div className="text-xs text-gray-500">Avg Reviews</div>
            </div>
          </div>
        </Card>

        {/* Top Traffic Sources */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Traffic Sources</h3>
          <div className="space-y-4">
            {topSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{source.source}</span>
                    <span className="text-sm text-gray-600">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">{source.visits.toLocaleString()} visits</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Demographics */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Demographics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Age 25-34</span>
                <span className="text-sm font-medium">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Age 35-44</span>
                <span className="text-sm font-medium">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Age 45-54</span>
                <span className="text-sm font-medium">22%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Other</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Peak Hours */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Activity Hours</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">12:00 PM - 1:00 PM</span>
              <Badge className="bg-red-100 text-red-800 border-red-200">Peak</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">7:00 PM - 8:00 PM</span>
              <Badge className="bg-orange-100 text-orange-800 border-orange-200">High</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">6:00 PM - 7:00 PM</span>
              <Badge className="bg-orange-100 text-orange-800 border-orange-200">High</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">11:00 AM - 12:00 PM</span>
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">8:00 PM - 9:00 PM</span>
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>
            </div>
          </div>
        </Card>

        {/* Quick Insights */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Insights</h3>
          <div className="space-y-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Growing Audience</span>
              </div>
              <p className="text-xs text-green-700">Your views increased by 15% this month</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Great Reviews</span>
              </div>
              <p className="text-xs text-blue-700">You received 8 five-star reviews this week</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">High Engagement</span>
              </div>
              <p className="text-xs text-purple-700">Customers spend avg 2.3 min on your profile</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}