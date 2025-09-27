'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle
} from 'lucide-react'

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard
    },
    {
      id: 'business',
      label: 'Business Management',
      icon: Building2
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: MessageSquare
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: HelpCircle
    }
  ]

  return (
    <aside className="w-64 min-h-screen bg-sidebar-background border-r border-sidebar-border">
      <div className="p-6">
        {/* Dashboard Header Image */}
        <div className="mb-6">
          <Image
            src="/generated/dashboard-analytics.png"
            alt="Dashboard Analytics"
            width={200}
            height={120}
            className="w-full h-24 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-sidebar-foreground">Dashboard</h2>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            )
          })}
        </nav>

        {/* Business Info Card */}
        <Card className="mt-8 p-4 bg-sidebar-accent border-sidebar-border">
          <h3 className="font-medium text-sidebar-accent-foreground mb-2">Your Business</h3>
          <p className="text-sm text-sidebar-foreground mb-3">Tony's Italian Kitchen</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-sidebar-foreground/70">Status:</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
        </Card>
      </div>
    </aside>
  )
}