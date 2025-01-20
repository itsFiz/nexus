"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
  UserPlus,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import CandidateModal from '../../components/talent/CandidateModal';
import TeamTab from '../../components/talent/TeamTab';

// Candidate status options with colors
const statusOptions = {
  'New': { color: 'text-blue-400 bg-blue-400/10' },
  'In Review': { color: 'text-yellow-400 bg-yellow-400/10' },
  'Interview': { color: 'text-violet-400 bg-violet-400/10' },
  'Offered': { color: 'text-green-400 bg-green-400/10' },
  'Rejected': { color: 'text-red-400 bg-red-400/10' }
};

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  postedDate: string;
  applicants: number;
  status: 'open' | 'closed' | 'draft';
};

const JobsTab = () => {
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      postedDate: '2024-01-10',
      applicants: 45,
      status: 'open'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-400">{job.department}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm ${
                job.status === 'open' ? 'text-green-400 bg-green-400/10' :
                job.status === 'closed' ? 'text-red-400 bg-red-400/10' :
                'text-yellow-400 bg-yellow-400/10'
              }`}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Briefcase className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{job.experience}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <UserPlus className="w-4 h-4" />
                <span>{job.applicants} applicants</span>
              </div>
              <span className="text-sm text-gray-400">
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AnalyticsTab = () => {
  const metrics = [
    { title: 'Total Candidates', value: '2,456', change: '+12%', icon: Users },
    { title: 'Open Positions', value: '18', change: '+3', icon: Briefcase },
    { title: 'Time to Hire', value: '24d', change: '-2d', icon: Clock },
    { title: 'Acceptance Rate', value: '76%', change: '+5%', icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-violet-500/10 rounded-lg">
                <metric.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400">{metric.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className={`text-sm ${
                    metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TalentHub = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TalentHubContent />
    </Suspense>
  );
};

const TalentHubContent = () => {
  const searchParams = useSearchParams();
  const [selectedView, setSelectedView] = useState('team');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const view = searchParams.get('view');
    if (view) {
      setSelectedView(view);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (selectedView) {
      case 'team':
        return <TeamTab />;
      case 'jobs':
        return <JobsTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'candidates':
        return (
          <>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search candidates..."
                  className="w-full bg-gray-900 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                />
              </div>
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-white/5"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <select className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50">
                <option>Sort by: Recent</option>
                <option>Sort by: Status</option>
                <option>Sort by: Name</option>
              </select>
            </div>

            {/* Filters Panel */}
            {isFiltersOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-900 border border-white/10 rounded-lg relative z-10"
              >
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Status</label>
                  <div className="space-y-2">
                    {Object.keys(statusOptions).map((status) => (
                      <label key={status} className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-violet-600" />
                        <span>{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Department</label>
                  <div className="space-y-2">
                    {['Engineering', 'Design', 'Product', 'Marketing'].map((dept) => (
                      <label key={dept} className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-violet-600" />
                        <span>{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Experience</label>
                  <div className="space-y-2">
                    {['0-2 years', '2-5 years', '5-8 years', '8+ years'].map((exp) => (
                      <label key={exp} className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-violet-600" />
                        <span>{exp}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-lg font-bold">
                          {`${String.fromCharCode(65 + index)}${String.fromCharCode(75 + index)}`}
                        </div>
                        <div>
                          <h3 className="font-semibold">John Smith {index + 1}</h3>
                          <p className="text-sm text-gray-400">Senior Developer</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span>john{index + 1}@example.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>+1 234 567 890{index}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-white/5 rounded-full text-xs">React</span>
                      <span className="px-2 py-1 bg-white/5 rounded-full text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-white/5 rounded-full text-xs">TypeScript</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        Object.values(statusOptions)[index % 5].color
                      }`}>
                        {Object.keys(statusOptions)[index % 5]}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Applied 3d ago
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="p-2 hover:bg-white/5 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </button>
                      <button className="p-2 hover:bg-white/5 rounded-lg">
                        <Clock className="w-5 h-5 text-yellow-400" />
                      </button>
                      <button className="p-2 hover:bg-white/5 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-400" />
                      </button>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-violet-500 hover:bg-violet-700 rounded-lg text-sm">
                      <UserPlus className="w-4 h-4" />
                      Schedule
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm text-gray-400">Showing 1-6 of 24 candidates</span>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-lg ${
                      page === 1
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-900 border border-white/10 hover:bg-white/5'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-white/5">
                  Next
                </button>
              </div>
            </div>
          </>
        );
      default:
        return <TeamTab />;
    }
  };

  return (
    <div className="h-full">
      {renderContent()}
      
      <CandidateModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
};

export default TalentHub;