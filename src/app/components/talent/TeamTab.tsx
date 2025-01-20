import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Plus,
  Search,
  Filter,
  Users
} from 'lucide-react';

// Types for organizational structure
type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  imageUrl?: string;
  children?: TeamMember[];
};

// Sample org chart data
const orgData: TeamMember = {
  id: "1",
  name: "Hafiz Kadir",
  role: "Founder & CEO",
  department: "Executive",
  email: "hafiz@nexzgen.com",
  phone: "+60 11-1302 5474",
  location: "Kuala Lumpur",
  children: [
    {
      id: "2",
      name: "Andi A Ghani",
      role: "Chief Creative Officer",
      department: "Creative",
      email: "andi@nexzgen.com",
      phone: "+60 11-1111 1111",
      location: "Kuala Lumpur",
      children: [
        {
          id: "2-1",
          name: "Sarah Chen",
          role: "Design Director",
          department: "Creative",
          email: "sarah@nexzgen.com",
          phone: "+60 11-1111 2222",
          location: "Kuala Lumpur"
        },
        {
          id: "2-2",
          name: "Mike Ross",
          role: "Art Director",
          department: "Creative",
          email: "mike@nexzgen.com",
          phone: "+60 11-1111 3333",
          location: "Kuala Lumpur"
        }
      ]
    },
    {
      id: "3",
      name: "Putera Shazmin",
      role: "Chief Operations Officer",
      department: "Operations",
      email: "putera@nexzgen.com",
      phone: "+60 11-2222 2222",
      location: "Kuala Lumpur",
      children: [
        {
          id: "3-1",
          name: "Lisa Wong",
          role: "Operations Manager",
          department: "Operations",
          email: "lisa@nexzgen.com",
          phone: "+60 11-2222 3333",
          location: "Kuala Lumpur"
        },
        {
          id: "3-2",
          name: "David Kim",
          role: "Supply Chain Manager",
          department: "Operations",
          email: "david@nexzgen.com",
          phone: "+60 11-2222 4444",
          location: "Kuala Lumpur"
        }
      ]
    },
    {
      id: "4",
      name: "Aliff Farhat",
      role: "Chief Marketing Officer",
      department: "Marketing",
      email: "aliff@nexzgen.com",
      phone: "+60 11-3333 3333",
      location: "Kuala Lumpur",
      children: [
        {
          id: "4-1",
          name: "Emma Davis",
          role: "Marketing Director",
          department: "Marketing",
          email: "emma@nexzgen.com",
          phone: "+60 11-3333 4444",
          location: "Kuala Lumpur"
        },
        {
          id: "4-2",
          name: "Tom Wilson",
          role: "Digital Marketing Manager",
          department: "Marketing",
          email: "tom@nexzgen.com",
          phone: "+60 11-3333 5555",
          location: "Kuala Lumpur"
        }
      ]
    },
    {
      id: "5",
      name: "Tengku Amirul Haiqal",
      role: "Chief Product Officer",
      department: "Product",
      email: "tengku@nexzgen.com",
      phone: "+60 11-4444 4444",
      location: "Kuala Lumpur",
      children: [
        {
          id: "5-1",
          name: "Rachel Lee",
          role: "Product Director",
          department: "Product",
          email: "rachel@nexzgen.com",
          phone: "+60 11-4444 5555",
          location: "Kuala Lumpur"
        },
        {
          id: "5-2",
          name: "James Chen",
          role: "UX Director",
          department: "Product",
          email: "james@nexzgen.com",
          phone: "+60 11-4444 6666",
          location: "Kuala Lumpur"
        }
      ]
    }
  ]
};

// Node component for org chart
const OrgChartNode = ({ node, level = 0 }: { node: TeamMember; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(level < 1);
  const [showDetails, setShowDetails] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const bgColor = level === 0 ? 'bg-violet-500' : 'bg-gray-900';
  const borderColor = level === 0 ? 'border-violet-400' : 'border-white/10';

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative">
        {/* Node card */}
        <motion.div
          layout
          onClick={() => setShowDetails(!showDetails)}
          className={`relative z-10 w-64 ${bgColor} border ${borderColor} rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow mx-auto`}
        >
          {/* Member info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-blue-500 flex items-center justify-center text-lg font-bold">
              {node.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-semibold">{node.name}</h3>
              <p className="text-sm text-gray-400">{node.role}</p>
            </div>
          </div>

          {/* Expanded details */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-2 overflow-hidden"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{node.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{node.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{node.location}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand/collapse button */}
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-gray-800 border border-white/10 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
        </motion.div>

        {/* Children container with connecting lines */}
        {hasChildren && isExpanded && (
          <>
            {/* Vertical line from parent */}
            <div className="absolute left-1/2 h-8 w-px bg-white/10 -bottom-8 transform -translate-x-1/2" />
            
            {/* Container for children */}
            <div className="relative mt-16">
              {/* Horizontal line connecting all children */}
              {(hasChildren && node.children!.length > 1) && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                  <div className="h-px bg-white/10" style={{ width: `${node.children!.length - 1 * 320}px` }} />
                </div>
              )}
              
              {/* Children nodes */}
              <div className="flex gap-16 justify-center" style={{ minWidth: `${node.children!.length * 320}px` }}>
                {node.children?.map((child) => (
                  <div key={child.id} className="relative flex-1">
                    {/* Vertical line to child */}
                    <div className="absolute left-1/2 -top-8 h-8 w-px bg-white/10 transform -translate-x-1/2" />
                    <OrgChartNode node={child} level={level + 1} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TeamTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Users className="w-5 h-5 text-violet-400" />
            Organization Chart
          </h2>
          <p className="text-sm text-gray-400">View and manage team structure</p>
        </div>
        <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {/* Search and filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search team members..."
            className="w-full bg-gray-900 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
          />
        </div>
        <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg flex items-center gap-2 hover:bg-white/5">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Org Chart with improved centering */}
      <div className="relative overflow-auto">
        <div className="min-w-[1280px] w-full p-8">
          <div className="w-full flex justify-center">
            <div style={{ width: 'max-content' }}>
              <OrgChartNode node={orgData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTab;