"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, LineChart, Rocket, Building2, Database,
  BookOpen, Handshake, FlaskConical, Briefcase, TrendingUp, 
  Shield, MessageSquare, Target, Wallet, ScrollText, CheckCircle,
  Scale, Settings, FileText, PieChart, Network, Medal,
  Calendar, FileSearch, Layers, AlertCircle, GanttChart, Binary,
  Globe, Mail, BellRing, Workflow,
  ChevronRight,
  ChevronLeft,
  Bell,
  Search,
  User,
  LogOut,
  ChartBar,
  Bookmark,
  UserCheck,
  CalendarRange,
  CalendarDays,
  Plane,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Milestone,
  Coins,
  GitBranch,
  Home,
  History
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const navigationItems = [
  {
    section: "Overview",
    items: [
      { 
        name: "Dashboard", 
        icon: LayoutDashboard, 
        path: "/dashboard",
        subItems: [
          { name: "Main", icon: Home, path: "/dashboard" },
          { name: "Executive", icon: Target, path: "/dashboard/executive" },
          { name: "Department", icon: PieChart, path: "/dashboard/department" },
          { name: "Team", icon: Users, path: "/dashboard/team" }
        ]
      },
      { 
        name: "Analytics", 
        icon: LineChart, 
        path: "/analytics",
        subItems: [
          { name: "Performance", icon: TrendingUp, path: "/analytics/performance" },
          { name: "Growth", icon: LineChart, path: "/analytics/growth" },
          { name: "Reports", icon: FileText, path: "/analytics/reports" }
        ]
      }
    ]
  },
  {
    section: "Core Operations",
    items: [
      { 
        name: "Talent Hub", 
        icon: Users, 
        path: "/talent",
        subItems: [
          { name: "Applications", icon: Briefcase, path: "/talent/applications" },
          { name: "Talent Pool", icon: Database, path: "/talent/pool" },
          { name: "Evaluations", icon: CheckCircle, path: "/talent/evaluations" },
          { name: "Team Analytics", icon: LineChart, path: "/talent/analytics" },
          { name: "Interviews", icon: Calendar, path: "/talent/interviews" }
        ]
      },
      { 
        name: "Financial Center", 
        icon: Wallet, 
        path: "/finance",
        subItems: [
          { name: "Investment Portfolio", icon: TrendingUp, path: "/finance/investments" },
          { name: "Financial Models", icon: LineChart, path: "/finance/models" },
          { name: "Funding Rounds", icon: Coins, path: "/finance/funding" },
          { name: "Investor Relations", icon: Handshake, path: "/finance/investors" },
          { name: "Budget", icon: Database, path: "/finance/budget" },
          { name: "Reports", icon: FileText, path: "/finance/reports" }
        ]
      },
      { 
        name: "Venture Suite", 
        icon: Rocket, 
        path: "/ventures",
        subItems: [
          { name: "Performance", icon: TrendingUp, path: "/ventures/performance" },
          { name: "Resources", icon: Database, path: "/ventures/resources" },
          { name: "Strategy", icon: Target, path: "/ventures/strategy" },
          { name: "Pipeline", icon: Workflow, path: "/ventures/pipeline" }
        ]
      },
      { 
        name: "Company Evolution", 
        icon: GitBranch, // Add to imports
        path: "/evolution",
        subItems: [
          { name: "Roadmap Timeline", icon: Milestone, path: "/evolution/roadmap" },
          { name: "Valuation History", icon: TrendingUp, path: "/evolution/valuation" },
          { name: "Team Growth", icon: Users, path: "/evolution/team" }
        ]
      }
    ]
  },
  {
    section: "Management",
    items: [
      { 
        name: "Operations Hub", 
        icon: Building2, 
        path: "/operations",
        subItems: [
          { name: "Process Management", icon: Workflow, path: "/operations/processes" },
          { name: "Resource Planning", icon: GanttChart, path: "/operations/resources" },
          { 
            name: "Workforce Management", 
            icon: Users, 
            path: "/operations/workforce",
            subItems: [
              {
                name: "Attendance",
                icon: Clock ,
                path: "/operations/workforce/attendance",
                subItems: [
                  { name: "Daily Tracking", icon: ClipboardCheck, path: "/operations/workforce/attendance/daily" },
                  { name: "Timesheets", icon: CalendarClock, path: "/operations/workforce/attendance/timesheets" },
                  { name: "Work Schedules", icon: Calendar, path: "/operations/workforce/attendance/schedules" }
                ]
              },
              {
                name: "Leave Management",
                icon: Plane,
                path: "/operations/workforce/leave",
                subItems: [
                  { name: "Leave Calendar", icon: CalendarDays, path: "/operations/workforce/leave/calendar" },
                  { name: "Request Leave", icon: CalendarRange, path: "/operations/workforce/leave/request" },
                  { name: "Approvals", icon: UserCheck, path: "/operations/workforce/leave/approvals" },
                  { name: "Leave Types", icon: Bookmark, path: "/operations/workforce/leave/types" },
                  { name: "Leave Balance", icon: ChartBar, path: "/operations/workforce/leave/balance" },
                  { name: "History", icon: History, path: "/operations/workforce/leave/history" }
                ]
              },
              { 
                name: "Reports & Analytics",
                icon: FileText,
                path: "/operations/workforce/reports",
                subItems: [
                  { name: "Attendance Reports", icon: ChartBar, path: "/operations/workforce/reports/attendance" },
                  { name: "Leave Reports", icon: ChartBar, path: "/operations/workforce/reports/leave" },
                  { name: "Team Coverage", icon: Users, path: "/operations/workforce/reports/coverage" }
                ]
              },
              {
                name: "Settings",
                icon: Settings,
                path: "/operations/workforce/settings",
                subItems: [
                  { name: "Work Policies", icon: FileText, path: "/operations/workforce/settings/policies" },
                  { name: "Leave Policies", icon: FileText, path: "/operations/workforce/settings/leave-policies" },
                  { name: "Holidays", icon: Calendar, path: "/operations/workforce/settings/holidays" },
                  { name: "Notifications", icon: AlertCircle, path: "/operations/workforce/settings/notifications" }
                ]
              }
            ]
          },
          { name: "Quality Control", icon: CheckCircle, path: "/operations/quality" },
          { name: "Efficiency Metrics", icon: LineChart, path: "/operations/metrics" }
        ]
      },
      { 
        name: "Knowledge Vault", 
        icon: BookOpen, 
        path: "/knowledge",
        subItems: [
          { name: "IP Documentation", icon: ScrollText, path: "/knowledge/ip" },
          { name: "Learning Resources", icon: BookOpen, path: "/knowledge/learning" },
          { name: "Technical Docs", icon: FileSearch, path: "/knowledge/technical" },
          { name: "Best Practices", icon: Medal, path: "/knowledge/practices" }
        ]
      },
      { 
        name: "Partnership Portal", 
        icon: Handshake, 
        path: "/partners",
        subItems: [
          { name: "Partner Management", icon: Users, path: "/partners/management" },
          { name: "Deal Flow", icon: Workflow, path: "/partners/deals" },
          { name: "Agreements", icon: FileText, path: "/partners/agreements" },
          { name: "Performance", icon: LineChart, path: "/partners/performance" }
        ]
      }
    ]
  },
  {
    section: "Innovation & Intelligence",
    items: [
      { 
        name: "Innovation Lab", 
        icon: FlaskConical, 
        path: "/innovation",
        subItems: [
          { name: "R&D Projects", icon: Rocket, path: "/innovation/projects" },
          { name: "Tech Stack", icon: Layers, path: "/innovation/tech" },
          { name: "Experiments", icon: Binary, path: "/innovation/experiments" },
          { name: "Progress", icon: Target, path: "/innovation/progress" }
        ]
      },
      { 
        name: "Market Intelligence", 
        icon: Globe, 
        path: "/market",
        subItems: [
          { name: "Research", icon: FileSearch, path: "/market/research" },
          { name: "Analytics", icon: LineChart, path: "/market/analytics" },
          { name: "Competitors", icon: Target, path: "/market/competitors" },
          { name: "Trends", icon: TrendingUp, path: "/market/trends" }
        ]
      }
    ]
  },
  {
    section: "Compliance & Communications",
    items: [
      { 
        name: "Compliance & Risk", 
        icon: Shield, 
        path: "/compliance",
        subItems: [
          { name: "Regulatory", icon: Scale, path: "/compliance/regulatory" },
          { name: "Risk Management", icon: AlertCircle, path: "/compliance/risk" },
          { name: "Audit Trails", icon: FileSearch, path: "/compliance/audits" },
          { name: "Security", icon: Shield, path: "/compliance/security" }
        ]
      },
      { 
        name: "Communication Hub", 
        icon: MessageSquare, 
        path: "/communications",
        subItems: [
          { name: "Internal Updates", icon: BellRing, path: "/communications/internal" },
          { name: "External Relations", icon: Network, path: "/communications/external" },
          { name: "PR Management", icon: Globe, path: "/communications/pr" },
          { name: "Announcements", icon: Mail, path: "/communications/announcements" }
        ]
      }
    ]
  }
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>("Talent Hub");

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Primary Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-screen bg-gray-900 border-r border-white/10 z-30 flex flex-col"
      >
        {/* Logo */}
        <div className="h-32 flex-shrink-0 flex items-center justify-center px-4 border-b border-white/10 relative">
          {isSidebarOpen && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src="/images/nexzgenlogo.png"
              alt="Nexus"
              className="h-28"
            />
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute right-4 p-2 hover:bg-white/10 rounded-full transition-colors border border-white/10"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-8 flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-600">
          {navigationItems.map((section, index) => (
            <div key={index}>
              {isSidebarOpen && (
                <h3 className="text-sm font-semibold text-gray-400 mb-4">
                  {section.section}
                </h3>
              )}
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      onClick={() => {
                        if (item.subItems) {
                          setExpandedItem(expandedItem === item.name ? null : item.name);
                        }
                      }}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <item.icon 
                        size={20} 
                        className="text-violet-400 group-hover:text-violet-500"
                      />
                      {isSidebarOpen && (
                        <span className="flex-1 text-left group-hover:text-violet-500">
                          {item.name}
                        </span>
                      )}
                      {isSidebarOpen && item.subItems && (
                        <ChevronRight
                          size={16}
                          className={`transition-transform ${
                            expandedItem === item.name ? 'rotate-90' : ''
                          }`}
                        />
                      )}
                    </button>
                    {/* Sub-items */}
                    {isSidebarOpen && item.subItems && expandedItem === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.path}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <subItem.icon 
                                size={16} 
                                className="text-gray-400 group-hover:text-violet-500"
                              />
                              <span className="group-hover:text-violet-500">
                                {subItem.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-[280px]' : 'ml-[80px]'}`}>
        {/* Header */}
        <header className="h-16 border-b border-white/10 bg-gray-900/50 backdrop-blur-xl fixed top-0 right-0 left-0 z-20 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/50 w-64"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 hover:bg-white/10 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full" />
            </button>

            {/* Enhanced User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 p-2 hover:bg-white/10 rounded-lg"
              >
                {user?.profile?.avatar ? (
                  <img
                    src={user.profile.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <span>{user?.name || 'User'}</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-lg shadow-xl py-2">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-semibold">{user?.name}</p>
                    <p className="text-sm text-gray-400">{user?.email}</p>
                    {user?.role && (
                      <p className="text-xs text-violet-400 mt-1">
                        {user.role.replace('_', ' ')}
                      </p>
                    )}
                  </div>
                  
                  <div className="px-2 py-2">
                    <button
                      onClick={() => router.push('/profile')}
                      className="w-full flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg text-gray-300 text-sm"
                    >
                      <User size={16} />
                      <span>Profile Settings</span>
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg text-red-400 text-sm mt-1"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="pt-16 min-h-screen bg-gradient-to-b from-black to-gray-900">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;