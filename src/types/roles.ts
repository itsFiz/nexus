// types/roles.ts

export enum UserRole {
    // Executive Level
    FOUNDER = 'FOUNDER',           // Complete access to all systems and strategic decisions
    EXECUTIVE = 'EXECUTIVE',       // C-level access to all operational data and systems
    
    // Leadership Level
    VENTURE_LEAD = 'VENTURE_LEAD',      // Leadership access for specific venture
    CREATIVE_DIRECTOR = 'CREATIVE_DIRECTOR', // Leadership access for animation and creative
    TECH_LEAD = 'TECH_LEAD',         // Technical leadership access
    HR_MANAGER = 'HR_MANAGER',        // Access to talent management and HR systems
    
    // Operational Level
    PRODUCT_MANAGER = 'PRODUCT_MANAGER',   // Product development and metrics
    DEVELOPER = 'DEVELOPER',         // Technical development access
    DESIGNER = 'DESIGNER',          // Design system and creative assets
    ANALYST = 'ANALYST',           // Data and analytics access
    
    // Department Specific
    FINANCE_ADMIN = 'FINANCE_ADMIN',     // Financial systems access
    MARKETING_ADMIN = 'MARKETING_ADMIN',   // Marketing and content management
    HR_ADMIN = 'HR_ADMIN',          // HR systems and recruitment
    
    // Project Level
    PROJECT_LEAD = 'PROJECT_LEAD',      // Project-specific management
    TEAM_MEMBER = 'TEAM_MEMBER',       // Basic team member access
    
    // External
    INVESTOR = 'INVESTOR',          // Investor dashboard access
    PARTNER = 'PARTNER',           // Partner/Vendor specific access
    MENTOR = 'MENTOR',            // Mentorship and training systems
    
    // Special Access
    AUDITOR = 'AUDITOR',           // Audit and compliance access
    TEMP_ACCESS = 'TEMP_ACCESS'       // Temporary restricted access
  }
  
  export const ModulePermissions = {
    VENTURES: {
      VIEW: 'ventures:view',
      CREATE: 'ventures:create',
      EDIT: 'ventures:edit',
      DELETE: 'ventures:delete',
      MANAGE_TEAM: 'ventures:manage_team',
      VIEW_METRICS: 'ventures:view_metrics',
      VIEW_FINANCIALS: 'ventures:view_financials'
    },
    PROJECTS: {
      VIEW: 'projects:view',
      CREATE: 'projects:create',
      EDIT: 'projects:edit',
      DELETE: 'projects:delete',
      ASSIGN_MEMBERS: 'projects:assign_members',
      VIEW_METRICS: 'projects:view_metrics'
    },
    HR: {
      VIEW_EMPLOYEES: 'hr:view_employees',
      MANAGE_EMPLOYEES: 'hr:manage_employees',
      VIEW_PAYROLL: 'hr:view_payroll',
      MANAGE_PAYROLL: 'hr:manage_payroll',
      RECRUITMENT: 'hr:recruitment'
    },
    FINANCE: {
      VIEW_REPORTS: 'finance:view_reports',
      MANAGE_BUDGETS: 'finance:manage_budgets',
      APPROVE_EXPENSES: 'finance:approve_expenses',
      VIEW_INVESTMENTS: 'finance:view_investments'
    },
    ANALYTICS: {
      VIEW_DASHBOARDS: 'analytics:view_dashboards',
      CREATE_REPORTS: 'analytics:create_reports',
      EXPORT_DATA: 'analytics:export_data'
    },
    CREATIVE: {
      VIEW_ASSETS: 'creative:view_assets',
      MANAGE_ASSETS: 'creative:manage_assets',
      APPROVE_DESIGNS: 'creative:approve_designs',
      MANAGE_BRAND: 'creative:manage_brand'
    },
    MARKETING: {
      VIEW_CAMPAIGNS: 'marketing:view_campaigns',
      CREATE_CAMPAIGNS: 'marketing:create_campaigns',
      MANAGE_CONTENT: 'marketing:manage_content',
      ANALYZE_METRICS: 'marketing:analyze_metrics'
    },
    SYSTEM: {
      AUDIT_LOG: 'system:audit_log',
      MANAGE_USERS: 'system:manage_users',
      MANAGE_ROLES: 'system:manage_roles',
      VIEW_LOGS: 'system:view_logs'
    }
  } as const;
  
  export const RolePermissions: Record<UserRole, string[]> = {
    [UserRole.FOUNDER]: Object.values(ModulePermissions).flatMap(module => Object.values(module)),
    
    [UserRole.EXECUTIVE]: [
      ...Object.values(ModulePermissions.VENTURES),
      ...Object.values(ModulePermissions.FINANCE),
      ...Object.values(ModulePermissions.ANALYTICS),
      ModulePermissions.HR.VIEW_EMPLOYEES,
      ModulePermissions.HR.VIEW_PAYROLL,
      ModulePermissions.SYSTEM.VIEW_LOGS
    ],
    
    [UserRole.VENTURE_LEAD]: [
      ModulePermissions.VENTURES.VIEW,
      ModulePermissions.VENTURES.EDIT,
      ModulePermissions.VENTURES.MANAGE_TEAM,
      ModulePermissions.VENTURES.VIEW_METRICS,
      ModulePermissions.VENTURES.VIEW_FINANCIALS,
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.PROJECTS.CREATE,
      ModulePermissions.PROJECTS.EDIT,
      ModulePermissions.PROJECTS.ASSIGN_MEMBERS,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS,
      ModulePermissions.ANALYTICS.CREATE_REPORTS
    ],
    
    [UserRole.CREATIVE_DIRECTOR]: [
      ...Object.values(ModulePermissions.CREATIVE),
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.PROJECTS.CREATE,
      ModulePermissions.PROJECTS.EDIT,
      ModulePermissions.PROJECTS.ASSIGN_MEMBERS,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.TECH_LEAD]: [
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.PROJECTS.CREATE,
      ModulePermissions.PROJECTS.EDIT,
      ModulePermissions.PROJECTS.ASSIGN_MEMBERS,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS,
      ModulePermissions.SYSTEM.VIEW_LOGS
    ],
    
    [UserRole.HR_MANAGER]: [
      ...Object.values(ModulePermissions.HR),
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.PRODUCT_MANAGER]: [
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.PROJECTS.CREATE,
      ModulePermissions.PROJECTS.EDIT,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS,
      ModulePermissions.ANALYTICS.CREATE_REPORTS
    ],
    
    [UserRole.DEVELOPER]: [
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.PROJECTS.EDIT,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.DESIGNER]: [
      ModulePermissions.CREATIVE.VIEW_ASSETS,
      ModulePermissions.CREATIVE.MANAGE_ASSETS,
      ModulePermissions.PROJECTS.VIEW
    ],
    
    [UserRole.ANALYST]: [
      ...Object.values(ModulePermissions.ANALYTICS),
      ModulePermissions.VENTURES.VIEW_METRICS,
      ModulePermissions.PROJECTS.VIEW_METRICS
    ],
    
    [UserRole.FINANCE_ADMIN]: [
      ...Object.values(ModulePermissions.FINANCE),
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS,
      ModulePermissions.ANALYTICS.CREATE_REPORTS
    ],
    
    [UserRole.MARKETING_ADMIN]: [
      ...Object.values(ModulePermissions.MARKETING),
      ModulePermissions.CREATIVE.VIEW_ASSETS,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.HR_ADMIN]: [
      ModulePermissions.HR.VIEW_EMPLOYEES,
      ModulePermissions.HR.MANAGE_EMPLOYEES,
      ModulePermissions.HR.RECRUITMENT
    ],
    
    [UserRole.PROJECT_LEAD]: [
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.PROJECTS.EDIT,
      ModulePermissions.PROJECTS.ASSIGN_MEMBERS,
      ModulePermissions.PROJECTS.VIEW_METRICS
    ],
    
    [UserRole.TEAM_MEMBER]: [
      ModulePermissions.PROJECTS.VIEW
    ],
    
    [UserRole.INVESTOR]: [
      ModulePermissions.VENTURES.VIEW,
      ModulePermissions.VENTURES.VIEW_METRICS,
      ModulePermissions.VENTURES.VIEW_FINANCIALS,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.PARTNER]: [
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.MENTOR]: [
      ModulePermissions.PROJECTS.VIEW,
      ModulePermissions.ANALYTICS.VIEW_DASHBOARDS
    ],
    
    [UserRole.AUDITOR]: [
      ...Object.values(ModulePermissions.SYSTEM),
      ModulePermissions.FINANCE.VIEW_REPORTS,
      ModulePermissions.HR.VIEW_EMPLOYEES,
      ModulePermissions.VENTURES.VIEW
    ],
    
    [UserRole.TEMP_ACCESS]: [
      ModulePermissions.PROJECTS.VIEW
    ]
  };
  
  export const RoleHierarchy: Record<UserRole, UserRole[]> = {
    [UserRole.FOUNDER]: [
      UserRole.EXECUTIVE
    ],
    
    [UserRole.EXECUTIVE]: [
      UserRole.VENTURE_LEAD,
      UserRole.CREATIVE_DIRECTOR,
      UserRole.TECH_LEAD,
      UserRole.HR_MANAGER,
      UserRole.FINANCE_ADMIN
    ],
    
    [UserRole.VENTURE_LEAD]: [
      UserRole.PRODUCT_MANAGER,
      UserRole.PROJECT_LEAD
    ],
    
    [UserRole.CREATIVE_DIRECTOR]: [
      UserRole.DESIGNER,
      UserRole.PROJECT_LEAD
    ],
    
    [UserRole.TECH_LEAD]: [
      UserRole.DEVELOPER,
      UserRole.PROJECT_LEAD
    ],
    
    [UserRole.HR_MANAGER]: [
      UserRole.HR_ADMIN
    ],
    
    [UserRole.PRODUCT_MANAGER]: [
      UserRole.PROJECT_LEAD
    ],
    
    [UserRole.PROJECT_LEAD]: [
      UserRole.TEAM_MEMBER
    ],
    
    [UserRole.HR_ADMIN]: [],
    [UserRole.FINANCE_ADMIN]: [],
    [UserRole.MARKETING_ADMIN]: [],
    [UserRole.DEVELOPER]: [],
    [UserRole.DESIGNER]: [],
    [UserRole.ANALYST]: [],
    [UserRole.TEAM_MEMBER]: [],
    [UserRole.INVESTOR]: [],
    [UserRole.PARTNER]: [],
    [UserRole.MENTOR]: [],
    [UserRole.AUDITOR]: [],
    [UserRole.TEMP_ACCESS]: []
  };
  
  export const hasPermission = (userRole: UserRole, permission: string): boolean => {
    const rolePermissions = RolePermissions[userRole] || [];
    
    // Check direct permissions
    if (rolePermissions.includes(permission)) {
      return true;
    }
    
    // Check inherited permissions through role hierarchy
    const checkHierarchy = (role: UserRole): boolean => {
      const subordinateRoles = RoleHierarchy[role] || [];
      return subordinateRoles.some(subRole => {
        const subRolePermissions = RolePermissions[subRole] || [];
        return subRolePermissions.includes(permission) || checkHierarchy(subRole);
      });
    };
    
    return checkHierarchy(userRole);
  };