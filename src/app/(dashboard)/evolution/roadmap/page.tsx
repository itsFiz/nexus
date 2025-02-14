"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, TrendingUp, Users, Wallet,
  ArrowUpRight,
  LucideIcon,
  Package,
  ChevronDown,
  ChevronRight,
  Code2,
  Presentation,
  Sparkles,
  Lightbulb,
  Flame,
  Timer,
  Target
} from 'lucide-react';
import roadmapData from '@/lib/validators/data/evolution';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Legend, CartesianGrid
} from 'recharts';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type TeamStructure = { 
  members: TeamMember[] 
} | { 
  [key: string]: { members: TeamMember[] } 
};

type TeamBreakdown = { [category: string]: TeamStructure };

type Entity = {
  name: string;
  revenue?: string;
  stage?: string;
  description?: string;
  services?: string[];
  divisions?: Entity[];
  units?: Entity[];
};

// Add type for divisions/units
type EntityWithChildren = Entity & {
  divisions?: EntityWithChildren[];
  units?: EntityWithChildren[];
};

// Add type for subsidiary data
type SubsidiaryData = {
  name: string;
  divisions?: EntityWithChildren[];
  units?: EntityWithChildren[];
  description?: string;
  services?: string[];
};

const EvolutionRoadmap = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin')
    },
  });

  const [selectedYear, setSelectedYear] = useState<keyof typeof roadmapData>('2024');
  const [selectedTab, setSelectedTab] = useState('overview');
  const [expandedSubsidiaries, setExpandedSubsidiaries] = useState<{[key: string]: boolean}>({});
  const [yearRange, setYearRange] = useState<{ start: string; end: string }>({
    start: '2024',
    end: '2050'
  });

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-t-4 border-violet-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-4 border-blue-500 animate-spin-reverse"></div>
          <div className="absolute inset-4 rounded-full border-b-4 border-emerald-500 animate-spin"></div>
        </div>
      </div>
    );
  }

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

  const renderEntityCard = (entity: EntityWithChildren, depth: number = 0) => {
    return (
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
            {(entity.description || getSubsidiaryDescription(entity.name)) && (
              <p className="text-sm text-gray-400 mt-1">
                {entity.description || getSubsidiaryDescription(entity.name)}
              </p>
            )}
            {entity.revenue && (
              <p className="text-sm text-gray-400">Revenue: {entity.revenue}</p>
            )}
            {entity.stage && (
              <p className="text-sm text-gray-400">Stage: {entity.stage}</p>
            )}
            {(entity.services || getSubsidiaryDetails(entity.name)) && (
              <div className="mt-2">
                <p className="text-sm text-gray-400">Services:</p>
                <ul className="list-disc list-inside mt-1">
                  {(entity.services || getSubsidiaryDetails(entity.name)).map((service: string, index: number) => (
                    <li key={index} className="text-sm text-gray-300">{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {(entity.divisions || entity.units) && (
          <div className="mt-4 space-y-3">
            {entity.divisions?.map((division: EntityWithChildren, index: number) => (
              <div key={index} className="ml-4">
                {renderEntityCard(division, depth + 1)}
              </div>
            ))}
            {entity.units?.map((unit: EntityWithChildren, index: number) => (
              <div key={index} className="ml-4">
                {renderEntityCard(unit, depth + 1)}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

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

  const renderTeamBreakdown = (_: string, breakdown: TeamBreakdown) => {
    return Object.entries(breakdown)
      .map(([category, structure]) => {
        const count = 'members' in structure && Array.isArray(structure.members)
          ? structure.members.length 
          : Object.values(structure as { [key: string]: { members: TeamMember[] } })
              .reduce((sum, s) => s.members.length, 0);
        return `${count} ${category}`;
      })
      .join(' / ') || 'No breakdown available';
  };

  const convertCurrencyToNumber = (value: string): number => {
    // Remove 'RM' and any commas, then get the number and suffix
    const cleanValue = value.replace(/[RM,\s]/g, '');
    const match = cleanValue.match(/^(\d+\.?\d*)([KMB])?$/i);
    
    if (!match) return 0;
    
    const num = parseFloat(match[1]);
    const suffix = match[2]?.toUpperCase() || '';
    
    switch (suffix) {
      case 'K': return num * 1000;
      case 'M': return num * 1000000;
      case 'B': return num * 1000000000;
      default: return num;
    }
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
          {/* Year Selection with Progress Line */}
          <div className="flex items-center gap-2 relative min-w-[600px]">
            {/* Background Line - Made more visible */}
            <div className="absolute h-1 bg-gray-600/50 top-1/2 -translate-y-1/2 left-0 right-0 -z-20 w-full" />
            
            {/* Progress Line */}
            <div 
              className="absolute h-1 bg-gradient-to-r from-violet-500 to-blue-500 top-1/2 -translate-y-1/2 left-0 -z-10" 
              style={{
                width: `${(Object.keys(roadmapData).indexOf(selectedYear as string) + 1) * 100 / Object.keys(roadmapData).length}%`
              }}
            />
            
            {Object.keys(roadmapData).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year as keyof typeof roadmapData)}
                className={`
                  px-4 py-2 rounded-lg transition-all relative
                  ${selectedYear === year 
                    ? 'bg-violet-500 text-white ring-2 ring-violet-400 ring-offset-2 ring-offset-gray-900' 
                    : 'bg-gray-900 border border-white/10 text-gray-400 hover:bg-white/5'
                  }
                `}
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
              value: roadmapData[selectedYear as keyof typeof roadmapData].structure,
              subValue: roadmapData[selectedYear as keyof typeof roadmapData].status
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
              value: roadmapData[selectedYear as keyof typeof roadmapData].valuation,
              subValue: roadmapData[selectedYear as keyof typeof roadmapData].funding || 'N/A'
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
              value: roadmapData[selectedYear as keyof typeof roadmapData].team.total,
              subValue: renderTeamBreakdown(String(selectedYear), roadmapData[selectedYear as keyof typeof roadmapData].team.breakdown as TeamBreakdown)
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
              value: roadmapData[selectedYear as keyof typeof roadmapData].financials.revenue.target,
              subValue: `Burn: ${roadmapData[selectedYear as keyof typeof roadmapData].financials.burnRate}`
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
                      {roadmapData[selectedYear as keyof typeof roadmapData].milestones.map((milestone: string, index: number) => (
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
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(roadmapData[selectedYear as keyof typeof roadmapData].financials.revenue.breakdown).map(([category, amount]) => {
                      const getIconConfig = (cat: string) => {
                        switch (cat.toLowerCase()) {
                          case 'product':
                            return { icon: Code2, color: 'text-violet-400' };
                          case 'consulting':
                            return { icon: Presentation, color: 'text-blue-400' };
                          case 'animation':
                            return { icon: Sparkles, color: 'text-emerald-400' };
                          default:
                            return { icon: Code2, color: 'text-gray-400' };
                        }
                      };

                      const { icon: Icon, color } = getIconConfig(category);

                      return (
                        <div key={category} className="bg-gray-800/50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className={`w-5 h-5 ${color}`} />
                            <div className="text-sm text-gray-400 capitalize">{category}</div>
                          </div>
                          <div className="text-lg font-semibold text-gray-200">{amount}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Equity Distribution */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Equity Distribution</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-violet-400" />
                        <div className="text-sm text-gray-400">Founders</div>
                      </div>
                      <div className="text-lg font-semibold text-gray-200">
                        {roadmapData[selectedYear as keyof typeof roadmapData].equity?.founders}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-blue-400" />
                        <div className="text-sm text-gray-400">Investors</div>
                      </div>
                      <div className="text-lg font-semibold text-gray-200">
                        {roadmapData[selectedYear as keyof typeof roadmapData].equity?.investors}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-emerald-400" />
                        <div className="text-sm text-gray-400">ESOP</div>
                      </div>
                      <div className="text-lg font-semibold text-gray-200">
                        {roadmapData[selectedYear as keyof typeof roadmapData].equity?.esop}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-400 italic">
                    {roadmapData[selectedYear as keyof typeof roadmapData].equity?.details}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'ventures' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(roadmapData[selectedYear as keyof typeof roadmapData].ventures).map(([name, data]) => (
                <div key={name}>
                  {renderVentureCard(name, data as { status: string; [key: string]: string | number })}
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'team' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(roadmapData[selectedYear as keyof typeof roadmapData].team.breakdown).map(([department, structure]) => (
                <div key={department} className="bg-gray-900 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 capitalize">{department}</h3>
                  <div className="space-y-4">
                    {'members' in structure ? (
                      // Handle flat structure
                      (structure as { members: TeamMember[] }).members.map((member: TeamMember, index: number) => (
                        <div key={index}>
                          {renderTeamMember(member)}
                        </div>
                      ))
                    ) : (
                      // Handle nested structure
                      Object.entries(structure as { [key: string]: { members: TeamMember[] } }).map(([role, { members }]) => (
                        <div key={role}>
                          <h4 className="text-sm font-medium text-gray-400 mb-2 capitalize">{role}</h4>
                          <div className="space-y-3">
                            {members.map((member: TeamMember, index: number) => (
                              <div key={index}>
                                {renderTeamMember(member)}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'financials' && (
            <div className="space-y-6">
              {/* Financial Metrics Cards */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Financial Metrics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Flame className="w-5 h-5 text-red-400" />
                      <div className="text-sm text-gray-400">Monthly Burn Rate</div>
                    </div>
                    <div className="text-lg font-semibold text-gray-200">
                      {roadmapData[selectedYear as keyof typeof roadmapData].financials.burnRate}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="w-5 h-5 text-green-400" />
                      <div className="text-sm text-gray-400">Runway</div>
                    </div>
                    <div className="text-lg font-semibold text-gray-200">
                      {roadmapData[selectedYear as keyof typeof roadmapData].financials.runway}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      <div className="text-sm text-gray-400">Revenue Target</div>
                    </div>
                    <div className="text-lg font-semibold text-gray-200">
                      {roadmapData[selectedYear as keyof typeof roadmapData].financials.revenue.target}
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Breakdown Card */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Revenue Breakdown</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(roadmapData[selectedYear as keyof typeof roadmapData].financials.revenue.breakdown).map(([category, amount]) => {
                    const getIconConfig = (cat: string) => {
                      switch (cat.toLowerCase()) {
                        case 'product':
                          return { icon: Code2, color: 'text-violet-400' };
                        case 'consulting':
                          return { icon: Presentation, color: 'text-blue-400' };
                        case 'animation':
                          return { icon: Sparkles, color: 'text-emerald-400' };
                        default:
                          return { icon: Code2, color: 'text-gray-400' };
                      }
                    };

                    const { icon: Icon, color } = getIconConfig(category);

                    return (
                      <div key={category} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-5 h-5 ${color}`} />
                          <div className="text-sm text-gray-400 capitalize">{category}</div>
                        </div>
                        <div className="text-lg font-semibold text-gray-200">{amount}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Financial Growth Chart */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Financial Growth</h3>
                
                {/* Year Range Selector */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-400">From:</label>
                    <select 
                      value={yearRange.start}
                      onChange={(e) => setYearRange(prev => ({ ...prev, start: e.target.value }))}
                      className="bg-gray-800 text-gray-300 rounded-md px-2 py-1"
                    >
                      {Object.keys(roadmapData).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-400">To:</label>
                    <select 
                      value={yearRange.end}
                      onChange={(e) => setYearRange(prev => ({ ...prev, end: e.target.value }))}
                      className="bg-gray-800 text-gray-300 rounded-md px-2 py-1"
                    >
                      {Object.keys(roadmapData).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Growth Chart */}
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={Object.keys(roadmapData)
                      .filter(year => year >= yearRange.start && year <= yearRange.end)
                      .map(year => ({
                        year,
                        revenue: convertCurrencyToNumber(roadmapData[year as keyof typeof roadmapData].financials.revenue.target),
                        burn: convertCurrencyToNumber(roadmapData[year as keyof typeof roadmapData].financials.burnRate)
                      }))}
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9ca3af" />
                    <YAxis 
                      domain={['auto', 'auto']}
                      tickFormatter={(value) => {
                        if (value >= 1000000000) return `${(value / 1000000000)}B`;
                        if (value >= 1000000) return `${(value / 1000000)}M`;
                        if (value >= 1000) return `${(value / 1000)}K`;
                        return value;
                      }}
                      stroke="#9ca3af"
                    />
                    <Tooltip 
                      contentStyle={{ background: '#1f2937', border: 'none' }}
                      formatter={(value: number) => [`RM ${value.toLocaleString()}`, '']}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      name="Revenue Target"
                      stroke="#9333ea"
                      fill="#9333ea"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="burn"
                      name="Burn Rate"
                      stroke="#60a5fa"
                      fill="#60a5fa"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {selectedTab === 'risks' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapData[selectedYear as keyof typeof roadmapData].risks?.map((risk: string, index: number) => (
                <div key={index} className="bg-gray-900 border border-white/10 rounded-xl p-6">
                  <span className="text-gray-400">{risk}</span>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'structure' && (
            <div className="space-y-6">
              {roadmapData[selectedYear as keyof typeof roadmapData].subsidiaries.map((subsidiary: SubsidiaryData, index: number) => (
                <div 
                  key={index} 
                  className="w-full"
                  onClick={() => setExpandedSubsidiaries(prev => ({
                    ...prev,
                    [subsidiary.name]: !prev[subsidiary.name]
                  }))}
                >
                  <motion.div className="cursor-pointer w-full">
                    <div className="flex items-start gap-2 w-full">
                      <div className="pt-6">
                        {expandedSubsidiaries[subsidiary.name] ? 
                          <ChevronDown size={20} /> : 
                          <ChevronRight size={20} />
                        }
                      </div>
                      <div className="flex-1">
                        {renderEntityCard({
                          ...subsidiary,
                          divisions: expandedSubsidiaries[subsidiary.name] ? subsidiary.divisions : [],
                          units: expandedSubsidiaries[subsidiary.name] ? subsidiary.units : [],
                          description: subsidiary.description || getSubsidiaryDescription(subsidiary.name),
                          services: subsidiary.services || getSubsidiaryDetails(subsidiary.name)
                        })}
                      </div>
                    </div>
                  </motion.div>
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
                data={Object.keys(roadmapData).map((year) => ({
                  year,
                  team: roadmapData[year as keyof typeof roadmapData].team.total,
                  revenue: convertCurrencyToNumber(roadmapData[year as keyof typeof roadmapData].financials.revenue.target)
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
                    name === 'team' ? `${value} members` : `RM ${value.toLocaleString()}`,
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

const getSubsidiaryDescription = (name: string): string => {
  const descriptions: { [key: string]: string } = {
    'NexzGen Labs': 'Technology Research & Development Hub',
    'NexzGen Digital': 'Digital Products & Services Division',
    'NexzGen Ventures': 'Strategic Investment & Innovation Arm',
  };
  return descriptions[name] || '';
};

const getSubsidiaryDetails = (name: string): string[] => {
  const details: { [key: string]: string[] } = {
    'NexzGen Labs': [
      'Advanced Technology Research',
      'Product Development & Innovation',
      'Technical Consulting Services',
      'Enterprise Solutions Development',
      'Digital Transformation Projects'
    ],
    'NexzGen Digital': [
      'Digital Product Management',
      'Software as a Service (SaaS)',
      'Digital Marketing Solutions',
      'User Experience Design',
      'Data Analytics Services'
    ],
    'NexzGen Ventures': [
      'Strategic Investments',
      'Startup Incubation',
      'Corporate Innovation Programs',
      'Venture Capital Management',
      'Partnership Development'
    ],
  };
  return details[name] || [];
};