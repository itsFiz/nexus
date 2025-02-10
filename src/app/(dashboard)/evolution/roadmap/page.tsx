"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, TrendingUp, Users, Wallet,
  Clock, DollarSign,
  ArrowUpRight,
  LucideIcon,
  Package,
} from 'lucide-react';
import roadmapData from '@/lib/validators/data/evolution';
import { 
  PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, Legend, CartesianGrid
} from 'recharts';
import Image from 'next/image';

type YearKey = '2025' | '2026' | '2028' | '2030' | '2040';

type RoadmapData = {
  [key in YearKey]: {
    structure: string;
    valuation: string;
    funding: string;
    status: string;
    team: {
      total: number;
      breakdown: {
        [key: string]: number;
      };
      keyHires: string[];
    };
    financials: {
      revenue: {
        target: string;
        breakdown: {
          [key: string]: string;
        };
      };
      burnRate: string;
      runway: string;
    };
    ventures: {
      [key: string]: {
        status: string;
        users?: string;
        revenue?: string;
        stage?: string;
        [key: string]: string | undefined;
      };
    };
    subsidiaries: Array<{
      name: string;
      revenue: string;
      stage: string;
      ventures?: Array<{
        name: string;
        revenue: string;
        valuation?: string;
        stage?: string;
      }>;
      units?: Array<{
        name: string;
        revenue: string;
        stage?: string;
      }>;
    }>;
    equity: {
      founders: string;
      investors: string;
      esop: string;
      details: string;
    };
    milestones: string[];
    risks: string[];
  };
};

type Venture = {
  name: string;
  valuation?: string;
  revenue?: string;
  stage?: string;
};

type Unit = {
  name: string;
  revenue?: string;
  ventures?: Venture[];
};

const COLORS = ['#9333ea', '#60a5fa', '#4ade80', '#f87171', '#facc15'];

const formatCurrency = (value: string) => {
  return parseInt(value.replace(/[^0-9]/g, ''));
};

const EvolutionRoadmap = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>('2025');
  const [selectedTab, setSelectedTab] = useState('overview');

  const renderMetricCard = ({ 
    icon: Icon,
    label,
    value,
    subValue,
    trend 
  }: {
    icon: LucideIcon;
    label: string;
    value: string | number;
    subValue?: string;
    trend?: number;
  }) => (
    <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-white/5 rounded-lg">
          <Icon className="w-5 h-5 text-purple-400" />
        </div>
        {trend && (
          <span className={`flex items-center text-sm ${
            trend > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            <ArrowUpRight className="w-4 h-4" />
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <h3 className="text-sm text-gray-400 mb-1">{label}</h3>
      <p className="text-2xl font-semibold">{value}</p>
      {subValue && (
        <p className="text-sm text-gray-400 mt-1">{subValue}</p>
      )}
    </div>
  );

  const renderVentureCard = (name: string, data: {
    status: string;
    [key: string]: string | number;
  }) => (
    <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Logo or default icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5">
            {data.logo ? (
              <Image
                src={data.logo as string}
                alt={`${name} logo`}
                width={32}
                height={32}
                className="rounded"
              />
            ) : (
              <Package className="w-6 h-6 text-purple-400" />
            )}
          </div>
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
          data.status === 'MVP Launch' ? 'bg-purple-400/10 text-purple-400' :
          data.status === 'Development' ? 'bg-blue-400/10 text-blue-400' :
          data.status === 'Not Started' ? 'bg-gray-400/10 text-gray-400' :
          data.status === 'Beta' ? 'bg-green-400/10 text-green-400' :
          data.status === 'Live' ? 'bg-emerald-400/10 text-emerald-400' :
          'bg-yellow-400/10 text-yellow-400'
        }`}>
          {data.status === 'Live' && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
          )}
          {data.status}
        </span>
      </div>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => {
          if (key === 'status' || key === 'logo') return null;
          return (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-gray-400 capitalize">{key}:</span>
              <span className="font-medium">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderEntityCard = (entity: {
    name: string;
    revenue?: string;
    valuation?: string;
    status?: string;
    ownership?: string;
    ventures?: Venture[];
    units?: Unit[];
  }, depth = 0) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`bg-gray-900 border border-white/10 p-6 rounded-xl ${
        depth === 0 ? 'border-l-4 border-l-violet-500' :
        depth === 1 ? 'border-l-4 border-l-blue-500' :
        'border-l-4 border-l-green-500'
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-gray-200">{entity.name}</h3>
          {entity.revenue && (
            <p className="text-sm text-gray-400">Revenue: {entity.revenue}</p>
          )}
          {entity.valuation && (
            <p className="text-sm text-gray-400">Valuation: {entity.valuation}</p>
          )}
          {entity.status && (
            <p className="text-sm text-gray-400">Status: {entity.status}</p>
          )}
        </div>
        {entity.ownership && (
          <span className="px-3 py-1 bg-violet-400/10 text-violet-400 rounded-full text-sm">
            {entity.ownership}
          </span>
        )}
      </div>
      {entity.ventures && (
        <div className="mt-4 space-y-3">
          {entity.ventures.map((venture, index) => (
            <div key={index} className="ml-4">
              {renderEntityCard(venture, depth + 1)}
            </div>
          ))}
        </div>
      )}
      {entity.units && (
        <div className="mt-4 space-y-3">
          {entity.units.map((unit, index) => (
            <div key={index} className="ml-4">
              {renderEntityCard(unit, depth + 1)}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );

  const renderTeamMember = (member: { name: string; role: string; image?: string }) => (
    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
      <Image
        src={member.image || '/images/profiledefault.jpg'} 
        alt={member.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <div className="text-gray-200 font-medium">{member.name}</div>
        <div className="text-sm text-gray-400">{member.role}</div>
      </div>
    </div>
  );

  const renderTeamBreakdown = (category: string, roles: { [key: string]: { members?: Array<{ name: string; role: string; image?: string }> } }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-900 border border-white/10 p-6 rounded-xl border-l-4 border-l-violet-500 mb-4"
    >
      <h3 className="font-semibold text-lg text-gray-200 capitalize mb-4">{category}</h3>
      {Object.entries(roles).map(([role, { members = [] }]) => (
        <div key={role} className="mb-4">
          <h4 className="text-gray-400 capitalize mb-3">{role}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {members?.map((member, idx) => (
              <div key={idx}>
                {renderTeamMember(member)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );

  // Transform nested breakdown data for the pie chart
  const getTeamBreakdownData = () => {
    const breakdown = roadmapData[selectedYear].team.breakdown;
    const data: { name: string; value: number }[] = [];
    
    Object.entries(breakdown).forEach(([category, roles]) => {
      Object.entries(roles).forEach(([role, count]) => {
        data.push({
          name: `${category} ${role}`,
          value: count
        });
      });
    });
    
    return data;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Company Evolution</h1>
            <p className="text-gray-400">Track NexzGen&apos;s journey from startup to IPO</p>
          </div>
          <div className="flex gap-2">
            {Object.keys(roadmapData).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year as YearKey)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedYear === year 
                    ? 'bg-violet-500 text-white' 
                    : 'bg-gray-900 border border-white/10 text-gray-400 hover:bg-white/5'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Cards - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Structure Card - Spans 4 columns */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {renderMetricCard({
              icon: Building2,
              label: "Structure",
              value: roadmapData[selectedYear].structure,
              subValue: roadmapData[selectedYear].status
            })}
          </motion.div>

          {/* Valuation Card - Spans 2 columns */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {renderMetricCard({
              icon: Wallet,
              label: "Valuation",
              value: roadmapData[selectedYear].valuation,
              subValue: roadmapData[selectedYear].funding || 'N/A'
            })}
          </motion.div>

          {/* Team Size Card - Spans 3 columns */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {renderMetricCard({
              icon: Users,
              label: "Team Size",
              value: roadmapData[selectedYear].team.total,
              subValue: (() => {
                const coFounders = Object.values((roadmapData[selectedYear].team.breakdown as any).coFounders || {})
                  .reduce((total, dept: any) => total + (dept.members?.length || 0), 0);
                const interns = Object.values((roadmapData[selectedYear].team.breakdown as any).interns || {})
                  .reduce((total, dept: any) => total + (dept.members?.length || 0), 0);
                return `${coFounders} Co-Founders / ${interns} Interns`;
              })()
            })}
          </motion.div>

          {/* Revenue Target Card - Spans 3 columns */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {renderMetricCard({
              icon: TrendingUp,
              label: "Revenue Target",
              value: roadmapData[selectedYear].financials.revenue.target,
              subValue: `Burn: ${roadmapData[selectedYear].financials.burnRate}`
            })}
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-900 border border-white/10 rounded-lg p-1">
          <div className="flex space-x-1">
            {['overview', 'ventures', 'team', 'financials', 'risks', 'structure'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md ${
                  selectedTab === tab
                    ? 'bg-violet-500/10 text-violet-400'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {selectedTab === 'overview' && (
            <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Stage Overview</h3>
              <div className="space-y-6">
                {/* Milestones */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Milestones</h4>
                  <div className="space-y-3">
                    {roadmapData[selectedYear].milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-violet-500" />
                        <span className="text-gray-300">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Breakdown */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Revenue Breakdown</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(roadmapData[selectedYear].financials.revenue.breakdown).map(([category, amount]) => (
                      <div key={category} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 capitalize">{category}</div>
                        <div className="text-lg font-semibold text-gray-200">{amount}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equity Dilution */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Equity Distribution</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">Founders</div>
                      <div className="text-lg font-semibold text-violet-400">{roadmapData[selectedYear].equity.founders}</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">Investors</div>
                      <div className="text-lg font-semibold text-blue-400">{roadmapData[selectedYear].equity.investors}</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">ESOP</div>
                      <div className="text-lg font-semibold text-green-400">{roadmapData[selectedYear].equity.esop}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-400 italic">
                    {roadmapData[selectedYear].equity.details}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'ventures' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(roadmapData[selectedYear].ventures).map(([name, data]) => (
                <div key={name}>
                  {renderVentureCard(name, data as { status: string; [key: string]: string | number })}
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'team' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(roadmapData[selectedYear].team.breakdown).map(([category, roles], index) => (
                <div key={`${category}-${index}`}>
                  {typeof roles === 'object' ? renderTeamBreakdown(category, roles) : null}
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'financials' && (
            <div className="space-y-6">
              {/* Revenue Overview */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Revenue Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={Object.entries(roadmapData[selectedYear].financials.revenue.breakdown).map(([key, value]) => ({
                      name: key,
                      value: formatCurrency(value)
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ background: '#1f2937', border: 'none' }}
                      formatter={(value: number) => [`RM ${value}K`, 'Revenue']}
                    />
                    <Bar dataKey="value" fill="#9333ea" radius={[4, 4, 0, 0]}>
                      {Object.entries(roadmapData[selectedYear].financials.revenue.breakdown).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Financial Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Monthly Burn Rate</h4>
                  <div className="text-2xl font-semibold text-gray-200">
                    {roadmapData[selectedYear].financials.burnRate}
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Runway</h4>
                  <div className="text-2xl font-semibold text-gray-200">
                    {roadmapData[selectedYear].financials.runway}
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Revenue Target</h4>
                  <div className="text-2xl font-semibold text-gray-200">
                    {roadmapData[selectedYear].financials.revenue.target}
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Trend */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Financial Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={Object.keys(roadmapData).map(year => ({
                      year,
                      revenue: formatCurrency(roadmapData[year as YearKey].financials.revenue.target),
                      burn: formatCurrency(roadmapData[year as YearKey].financials.burnRate)
                    }))}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ background: '#1f2937', border: 'none' }}
                      formatter={(value: number) => [`RM ${value}K`, '']}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#9333ea" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                      name="Revenue Target"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="burn" 
                      stroke="#ef4444" 
                      fillOpacity={1} 
                      fill="url(#colorBurn)" 
                      name="Burn Rate"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {selectedTab === 'risks' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapData[selectedYear].risks.map((risk, index) => (
                <div key={index} className="bg-gray-900 border border-white/10 rounded-xl p-6">
                  <span className="text-gray-400">{risk}</span>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'structure' && (
            <div className="space-y-6">
              {roadmapData[selectedYear].subsidiaries?.map((subsidiary, index) => (
                <div key={index}>
                  {renderEntityCard(subsidiary)}
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedTab === 'overview' && (
          <div className="bg-gray-900 border border-white/10 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold mb-6">Growth Trajectory</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={Object.keys(roadmapData).map(year => ({
                  year,
                  team: roadmapData[year as YearKey].team.total,
                  revenue: formatCurrency(roadmapData[year as YearKey].financials.revenue.target)
                }))}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTeam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ background: '#1f2937', border: 'none' }}
                  formatter={(value: number, name: string) => [
                    name === 'team' ? `${value} members` : `RM ${value}K`,
                    name === 'team' ? 'Team Size' : 'Revenue Target'
                  ]}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="team" 
                  stroke="#9333ea" 
                  fillOpacity={1} 
                  fill="url(#colorTeam)" 
                  name="Team Size"
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#60a5fa" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  name="Revenue Target"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvolutionRoadmap;

// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
// }

// export const metadata = {
//   title: 'Evolution Roadmap',
//   description: 'Track NexzGen\'s journey from startup to IPO',
// }