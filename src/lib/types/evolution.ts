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
  teamBreakdown: any;
  keyHires: string[];
  revenueTarget: string;
  revenueBreakdown: any;
  burnRate: string;
  runway: string;
  ventures: any;
  subsidiaries: any;
  equity: any;
  milestones: string[];
  risks: string[];
  userId: string;
}; 