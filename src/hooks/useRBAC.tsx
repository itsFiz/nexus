// hooks/useRBAC.tsx
import { useAuth } from '@/hooks/useAuth';
import { UserRole, hasPermission, RoleHierarchy } from '@/types/roles';

export function useRBAC() {
  const { user } = useAuth();

  const checkPermission = (permission: string): boolean => {
    if (!user || !user.role) return false;
    return hasPermission(user.role as UserRole, permission);
  };

  const hasRole = (role: UserRole): boolean => {
    if (!user || !user.role) return false;
    const userRole = user.role as UserRole;
    
    // Direct role match
    if (userRole === role) return true;
    
    // Check role hierarchy
    const checkHierarchy = (currentRole: UserRole): boolean => {
      const subordinateRoles = RoleHierarchy[currentRole] || [];
      return subordinateRoles.includes(role) || 
        subordinateRoles.some((subRole: UserRole) => checkHierarchy(subRole));
    };
    
    return checkHierarchy(userRole);
  };

  const canAccess = (roles: UserRole[]): boolean => {
    return roles.some(role => hasRole(role));
  };

  return {
    checkPermission,
    hasRole,
    canAccess,
    userRole: user?.role as UserRole | undefined
  };
}

// Components/RBAC.tsx
interface RBACProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  requiredPermission?: string;
  fallback?: React.ReactNode;
}

export function RBAC({ 
  children, 
  requiredRole, 
  requiredPermission, 
  fallback = null 
}: RBACProps) {
  const { hasRole, checkPermission } = useRBAC();

  if (requiredRole && !hasRole(requiredRole)) {
    return fallback;
  }

  if (requiredPermission && !checkPermission(requiredPermission)) {
    return fallback;
  }

  return <>{children}</>;
}

