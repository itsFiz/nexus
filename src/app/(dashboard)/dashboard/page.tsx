"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Briefcase,
  Target,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import LoadingScreen from '@/app/components/Loading';

const DashboardHome = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for dashboard data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      title: "Active Ventures",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Briefcase
    },
    {
      title: "Team Members",
      value: "24",
      change: "+3",
      trend: "up",
      icon: Users
    },
    {
      title: "Monthly Revenue",
      value: "RM 85K",
      change: "-5%",
      trend: "down",
      icon: TrendingUp
    },
    {
      title: "Projects",
      value: "12",
      change: "+4",
      trend: "up",
      icon: Target
    }
  ];

  const recentActivities = [
    {
      title: "New team member joined",
      description: "Sarah Chen joined Design Team",
      time: "2 hours ago",
      icon: Users
    },
    {
      title: "Project milestone achieved",
      description: "CareerRPG reached 10k users",
      time: "5 hours ago",
      icon: Target
    },
    {
      title: "New venture proposal",
      description: "AI-driven healthcare solution proposed",
      time: "1 day ago",
      icon: Briefcase
    }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getRoleDisplay = (role: string) => {
    return role.toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} context="dashboard" />
      
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {getGreeting()}, {user?.name?.split(' ')[0]}!
            </h1>
            <p className="text-gray-400 flex items-center gap-2">
              <span>{getRoleDisplay(user?.role || '')}</span>
              {user?.profile?.department && (
                <>
                  <span className="text-gray-500">•</span>
                  <span>{user.profile.department}</span>
                </>
              )}
            </p>
          </div>
          <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Schedule Meeting</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 border border-white/10 rounded-xl p-6 backdrop-blur-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/5 rounded-lg">
                  <metric.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  <span>{metric.change}</span>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold">{metric.value}</h3>
              <p className="text-gray-400">{metric.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                Revenue Trends
              </h2>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart Component Here
            </div>
          </div>

          <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-400" />
                Resource Allocation
              </h2>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1">
                <option>By Department</option>
                <option>By Project</option>
                <option>By Venture</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart Component Here
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-400" />
            Recent Activity
          </h2>
          <div className="space-y-6">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 bg-white/5 rounded-lg">
                  <activity.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p className="text-gray-400">{activity.description}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;