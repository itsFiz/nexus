export type CompanyEvolution = {
  id: string;
  year: number;
  structure: string;
  valuation: string;
  funding?: string;
  status: string;
  team: {
    total: number;
    breakdown: Record<string, Record<string, number>>;
  };
  teamTotal: number;
  teamBreakdown: TeamBreakdown;
  keyHires: string[];
  revenueTarget: string;
  revenueBreakdown: Record<string, string>;
  burnRate: string;
  runway: string;
  ventures: Record<string, {
    status: string;
    users?: string;
    revenue?: string;
    completion?: string;
  }>;
  subsidiaries: Array<{
    name: string;
    status: string;
    ownership: string;
  }>;
  equity: {
    founders: string;
    investors: string;
    esop: string;
    details: string;
  };
  milestones: string[];
  risks: string[];
  userId: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Department = {
  count: number;
  members?: TeamMember[];
};

export type TeamBreakdown = {
  coFounders: Record<string, Department>;
  advisors: Record<string, Department>;
  interns: Record<string, Department>;
  freelancers: Record<string, Department>;
};

export type EvolutionData = {
  structure: string;
  valuation: string;
  funding: string | null;
  status: string;
  team: {
    total: number;
    breakdown: TeamBreakdown;
  };
  revenueTarget: string;
  revenueBreakdown: Record<string, string>;
  burnRate: string;
  runway: string;
  ventures: Record<string, {
    status: string;
    users?: string;
    revenue?: string;
    completion?: string;
  }>;
  subsidiaries: Array<{
    name: string;
    status: string;
    ownership: string;
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

export type RoadmapData = {
  [year: string]: EvolutionData;
}; 