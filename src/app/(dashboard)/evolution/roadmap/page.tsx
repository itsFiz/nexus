"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, TrendingUp, Users, Wallet,
  Clock, DollarSign,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';

type YearKey = keyof typeof roadmapData;

type RoadmapData = {
  [key: string]: {
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
        [key: string]: string;
      };
    };
    milestones: string[];
    risks: string[];
    divisions?: Array<{
      name: string;
      revenue: string;
      team: string;
      projects: string;
    }>;
    subsidiaries?: Array<{
      name: string;
      valuation?: string;
      revenue?: string;
      stage?: string;
      description?: string;
      ventures?: Array<{
        name: string;
        valuation: string;
        revenue: string;
        stage: string;
      }>;
      units?: Array<{
        name: string;
        revenue?: string;
        ventures?: Array<{
          name: string;
          revenue: string;
          stage?: string;
        }>;
      }>;
    }>;
    equity: {
      founders: string;
      investors: string;
      esop: string;
      details: string;
    };
  };
};

const roadmapData: RoadmapData = {
  '2024': {
    structure: "Sole Proprietorship",
    valuation: "RM 2M",
    funding: "Bootstrapped",
    status: "Bootstrapped",
    team: {
      total: 5,
      breakdown: { tech: 3, creative: 1, business: 1 },
      keyHires: ["CTO", "Lead Developer"]
    },
    financials: {
      revenue: {
        target: "RM 500K",
        breakdown: {
          consulting: "RM 300K",
          products: "RM 200K"
        }
      },
      burnRate: "RM 30K/month",
      runway: "12 months"
    },
    ventures: {
      CareerRPG: { status: "Development", users: "1K", focus: "MVP" },
      ServisLah: { status: "Development", focus: "Market Research" }
    },
    equity: {
      founders: "100%",
      investors: "0%",
      esop: "0%",
      details: "Bootstrapped"
    },
    milestones: [
      "MVP Launch",
      "Initial Traction",
      "Core Team Formation",
      "Market Validation"
    ],
    risks: [
      "Product-Market Fit",
      "Cash Flow",
      "Team Building"
    ],
    divisions: [
      {
        name: "Web Development",
        revenue: "RM 300K",
        team: "3 members",
        projects: "4 active"
      },
      {
        name: "Digital Marketing",
        revenue: "RM 200K",
        team: "2 members",
        projects: "3 active"
      }
    ]
  },
  '2025': {
    structure: "Sdn Bhd",
    valuation: "RM 5M",
    funding: "Pre-seed RM 1M",
    status: "Pre-seed",
    team: {
      total: 8,
      breakdown: { tech: 4, creative: 2, business: 2 },
      keyHires: ["Product Manager", "UI/UX Lead"]
    },
    financials: {
      revenue: {
        target: "RM 1M",
        breakdown: {
          products: "RM 600K",
          services: "RM 400K"
        }
      },
      burnRate: "RM 50K/month",
      runway: "18 months"
    },
    ventures: {
      CareerRPG: { status: "Beta", users: "5K", revenue: "RM 100K" },
      ServisLah: { status: "MVP", pilot: "2 cities" }
    },
    equity: {
      founders: "85%",
      investors: "10%",
      esop: "5%",
      details: "Pre-seed Round"
    },
    milestones: [
      "Company Incorporation",
      "Pre-seed Funding",
      "Team Expansion",
      "Beta Launch"
    ],
    risks: [
      "Market Adoption",
      "Runway Management",
      "Technical Scalability"
    ],
    divisions: [
      {
        name: "Web Development",
        revenue: "RM 500K",
        team: "4 members",
        projects: "6 active"
      },
      {
        name: "Digital Marketing",
        revenue: "RM 300K",
        team: "3 members",
        projects: "5 active"
      },
      {
        name: "Product Development",
        revenue: "RM 200K",
        team: "3 members",
        projects: "CareerRPG MVP"
      }
    ]
  },
  '2026': {
    structure: "Sdn Bhd",
    valuation: "RM 15M",
    funding: "Seed Round RM 5M",
    status: "Seed Round",
    team: {
      total: 15,
      breakdown: { tech: 8, creative: 4, business: 3 },
      keyHires: ["CMO", "Senior Engineers"]
    },
    financials: {
      revenue: {
        target: "RM 2.5M",
        breakdown: {
          products: "RM 1.5M",
          services: "RM 1M"
        }
      },
      burnRate: "RM 100K/month",
      runway: "24 months"
    },
    ventures: {
      CareerRPG: { status: "Growth", users: "20K", revenue: "RM 500K" },
      ServisLah: { status: "Expansion", revenue: "RM 200K" },
      Blanjer: { status: "Development", focus: "Fintech Solutions" }
    },
    equity: {
      founders: "75%",
      investors: "15%",
      esop: "10%",
      details: "Seed Round"
    },
    milestones: [
      "Seed Funding",
      "Product Scaling",
      "Market Expansion",
      "Revenue Growth"
    ],
    risks: [
      "Scaling Operations",
      "Market Competition",
      "Team Growth"
    ],
    subsidiaries: [
      {
        name: "NexzGen Digital",
        revenue: "RM 2M ARR",
        stage: "Growth",
        units: [
          {
            name: "Web Solutions",
            revenue: "RM 1.2M ARR"
          },
          {
            name: "Digital Marketing",
            revenue: "RM 800K ARR"
          }
        ]
      },
      {
        name: "NexzGen Products",
        revenue: "RM 500K ARR",
        stage: "Early Growth",
        units: [
          {
            name: "CareerRPG",
            revenue: "RM 300K ARR",
          },
          {
            name: "ServisLah",
            revenue: "RM 200K ARR",
          }
        ]
      }
    ]
  },
  '2028': {
    structure: "Holdings Sdn Bhd",
    valuation: "RM 50M",
    funding: "Series A RM 20M",
    status: "Series A",
    team: {
      total: 35,
      breakdown: { tech: 20, creative: 8, business: 7 },
      keyHires: ["COO", "Head of Growth", "Tech Lead"]
    },
    financials: {
      revenue: {
        target: "RM 8M",
        breakdown: {
          products: "RM 5M",
          services: "RM 3M"
        }
      },
      burnRate: "RM 300K/month",
      runway: "30 months"
    },
    ventures: {
      CareerRPG: { status: "Scaling", users: "100K", revenue: "RM 3M" },
      ServisLah: { status: "Regional", revenue: "RM 1M" },
      Blanjer: { status: "Launch", revenue: "RM 500K" }
    },
    subsidiaries: [
      {
        name: "NexzGen Studios",
        valuation: "RM 30M",
        revenue: "RM 5M ARR",
        stage: "Growth",
        ventures: [
          {
            name: "CareerRPG",
            valuation: "RM 40M",
            revenue: "RM 3M ARR",
            stage: "Series A"
          },
          {
            name: "ServisLah",
            valuation: "RM 15M",
            revenue: "RM 1M ARR",
            stage: "Seed"
          }
        ]
      },
      {
        name: "NexzGen Labs",
        revenue: "RM 3M ARR",
        stage: "Growth"
      }
    ],
    equity: {
      founders: "60%",
      investors: "30%",
      esop: "10%",
      details: "Series A"
    },
    milestones: [
      "Series A Funding",
      "Regional Expansion",
      "Corporate Restructuring",
      "Product Portfolio Growth"
    ],
    risks: [
      "Market Competition",
      "Talent Retention",
      "Operational Scaling"
    ]
  },
  '2030': {
    structure: "IPO Preparation",
    valuation: "RM 2B",
    funding: "Pre-IPO Round RM 500M",
    status: "Pre-IPO",
    team: {
      total: 500,
      breakdown: {
        tech: 250,
        creative: 120,
        business: 110,
        operations: 20
      },
      keyHires: [
        "Board of Directors",
        "IPO Advisory Team",
        "Investor Relations Head"
      ]
    },
    financials: {
      revenue: {
        target: "RM 300M ARR",
        breakdown: {
          products: "RM 200M",
          services: "RM 100M"
        }
      },
      burnRate: "RM 5M/month",
      runway: "60 months"
    },
    ventures: {
      CareerRPG: {
        status: "Market Leader",
        users: "2M",
        revenue: "RM 150M ARR"
      },
      ServisLah: {
        status: "Series C",
        revenue: "RM 80M ARR"
      },
      Blanjer: {
        status: "Series B",
        revenue: "RM 50M ARR"
      }
    },
    milestones: [
      "IPO Documentation",
      "Global Structure Setup",
      "Market Leadership",
      "Innovation Centers"
    ],
    risks: [
      "Market Conditions",
      "Regulatory Compliance",
      "Global Competition"
    ],
    subsidiaries: [
      {
        name: "Entertainment Division",
        units: [
          {
            name: "NexzGen Animation Studios",
            revenue: "RM 100M ARR"
          },
          {
            name: "NexzGen Games",
            revenue: "RM 50M ARR"
          }
        ]
      },
      {
        name: "Technology Division",
        units: [
          {
            name: "NexzGen R&D",
            ventures: [
              {
                name: "CareerRPG Global",
                revenue: "RM 200M ARR",
                stage: "Series C"
              },
              {
                name: "ServisLah International",
                revenue: "RM 80M ARR",
                stage: "Series B"
              }
            ]
          },
          {
            name: "NexzGen Labs",
            revenue: "RM 30M ARR"
          }
        ]
      }
    ],
    equity: {
      founders: "55%",
      investors: "35%",
      esop: "10%",
      details: "Series B & C"
    }
  },
  '2040': {
    structure: "KLSE:NXGN",
    valuation: "RM 10B",
    funding: "Sustainable Growth",
    status: "Market Leader",
    team: {
      total: 2000,
      breakdown: {
        tech: 1000,
        creative: 500,
        business: 400,
        operations: 100
      },
      keyHires: [
        "AI Research Directors",
        "Sustainability Officers",
        "Innovation Leaders"
      ]
    },
    financials: {
      revenue: {
        target: "RM 2B ARR",
        breakdown: {
          technology: "RM 800M",
          entertainment: "RM 600M",
          education: "RM 400M",
          financial: "RM 200M"
        }
      },
      burnRate: "RM 20M/month",
      runway: "Sustainable"
    },
    ventures: {
      CareerRPG: {
        status: "Industry Standard",
        users: "20M",
        revenue: "RM 1B ARR"
      },
      ServisLah: {
        status: "Global Platform",
        revenue: "RM 600M ARR"
      },
      Blanjer: {
        status: "Global Fintech",
        revenue: "RM 400M ARR"
      }
    },
    milestones: [
      "Global Innovation Leader",
      "Sustainable Tech Pioneer",
      "Next-Gen Tech Development",
      "Industry Standards Creation"
    ],
    risks: [
      "Technological Disruption",
      "Global Economic Changes",
      "Regulatory Evolution"
    ],
    subsidiaries: [
      {
        name: "Entertainment Division",
        units: [
          {
            name: "NexzGen Animation Studios",
            revenue: "RM 400M ARR"
          },
          {
            name: "NexzGen TV",
            revenue: "RM 200M ARR"
          },
          {
            name: "NexzGen Games",
            revenue: "RM 300M ARR"
          },
          {
            name: "NexzGen Esports",
            revenue: "RM 100M ARR"
          }
        ]
      },
      {
        name: "Technology Division",
        units: [
          {
            name: "NexzGen R&D",
            ventures: [
              {
                name: "CareerRPG Global",
                revenue: "RM 500M ARR"
              },
              {
                name: "ServisLah International",
                revenue: "RM 300M ARR"
              },
              {
                name: "Blanjer Fintech",
                revenue: "RM 200M ARR"
              }
            ]
          },
          {
            name: "NexzGen Labs",
            revenue: "RM 200M ARR"
          }
        ]
      },
      {
        name: "Venture Division",
        description: "Investment arm for new ventures and startups",
        revenue: "RM 2B AUM"
      }
    ],
    equity: {
      founders: "30%",
      investors: "60%",
      esop: "10%",
      details: "Public Listed"
    }
  }
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
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          data.status === 'MVP Launch' ? 'bg-purple-400/10 text-purple-400' :
          data.status === 'Development' ? 'bg-blue-400/10 text-blue-400' :
          'bg-green-400/10 text-green-400'
        }`}>
          {data.status}
        </span>
      </div>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => {
          if (key === 'status') return null;
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

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
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
          <motion.div
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {renderMetricCard({
              icon: Users,
              label: "Team Size",
              value: roadmapData[selectedYear].team.total,
              subValue: `${roadmapData[selectedYear].team.breakdown.tech} Tech / ${roadmapData[selectedYear].team.breakdown.creative} Creative`
            })}
          </motion.div>
          <motion.div
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
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

            {selectedTab === 'structure' && (
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Building2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{roadmapData[selectedYear].structure}</h3>
                    <p className="text-sm text-gray-400">Current corporate structure and divisions</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {roadmapData[selectedYear].divisions?.map((division, index) => (
                    <div key={index} className="mb-4">
                      {renderEntityCard(division)}
                    </div>
                  ))}
                  {roadmapData[selectedYear].subsidiaries?.map((subsidiary, index) => (
                    <div key={index} className="mb-4">
                      {renderEntityCard(subsidiary)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {selectedTab === 'ventures' && (
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                {renderVentureCard('CareerRPG', roadmapData[selectedYear].ventures.CareerRPG)}
                {renderVentureCard('ServisLah', roadmapData[selectedYear].ventures.ServisLah)}
                {'Blanjer' in roadmapData[selectedYear].ventures && 
                  renderVentureCard('Blanjer', roadmapData[selectedYear].ventures.Blanjer)}
              </div>
            )}
            {selectedTab === 'team' && (
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Team Breakdown</h3>
                <div className="space-y-6">
                  {Object.entries(roadmapData[selectedYear].team.breakdown).map(([role, count]) => (
                    <div key={role} className="flex justify-between text-sm">
                      <span className="text-gray-400 capitalize">{role}:</span>
                      <span className="font-medium text-gray-200">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedTab === 'financials' && (
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Financial Overview</h3>
                <div className="space-y-6">
                  {renderMetricCard({
                    icon: DollarSign,
                    label: "Revenue Target",
                    value: roadmapData[selectedYear].financials.revenue.target,
                    subValue: `Burn: ${roadmapData[selectedYear].financials.burnRate}`
                  })}
                  {renderMetricCard({
                    icon: Clock,
                    label: "Runway",
                    value: roadmapData[selectedYear].financials.runway,
                    subValue: roadmapData[selectedYear].financials.revenue.target
                  })}
                </div>
              </div>
            )}
            {selectedTab === 'risks' && (
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Risks</h3>
                <div className="space-y-6">
                  {roadmapData[selectedYear].risks.map((risk, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-400 capitalize">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
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