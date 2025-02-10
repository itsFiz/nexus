"use client";
import { 
    createContext, 
    useContext, 
    useState, 
    useEffect, 
    ReactNode,
    useMemo,
    useCallback
  } from 'react';
  import { useRouter } from 'next/navigation';
  import type { UserRole } from '@prisma/client';
  
  interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    profile?: {
      avatar?: string | null;
      department?: string | null;
      position?: string | null;
    } | null;
    ventureAccess?: {
      ventureName: string;
      role: string;
    }[];
  }
  
  interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
  }
  
  interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
    updateProfile: (data: Partial<User['profile']>) => Promise<void>;
    // hasPermission: (permission: string) => boolean;
    hasVentureAccess: (ventureName: string, role?: string) => boolean;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AuthState>({
      user: null,
      isLoading: true,
      error: null
    });
    
    const router = useRouter();
  
    const refreshUser = useCallback(async () => {
      try {
        const response = await fetch('/api/auth/session');
        if (!response.ok) {
          throw new Error('Session invalid');
        }
        
        const data = await response.json();
        
        if (!data.user) {
          // If no user data, clear state and redirect to login
          setState(prev => ({ 
            ...prev, 
            user: null,
            error: null,
            isLoading: false
          }));
          router.push('/');
          return;
        }

        setState(prev => ({ 
          ...prev, 
          user: data.user,
          error: null,
          isLoading: false
        }));
      } catch (error) {
        console.error('Failed to refresh user:', error);
        setState(prev => ({ 
          ...prev, 
          user: null,
          error: 'Failed to refresh session',
          isLoading: false
        }));
        router.push('/');
      }
    }, [router]);
  
    useEffect(() => {
      refreshUser();
    }, [refreshUser]);
  
    const login = async (email: string, password: string) => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
  
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.error || 'Login failed');
        }
  
        setState(prev => ({ ...prev, user: data.user }));
        router.push('/dashboard');
      } catch (error) {
        setState(prev => ({ 
          ...prev, 
          error: error instanceof Error ? error.message : 'Login failed' 
        }));
        throw error;
      } finally {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };
  
    const logout = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true }));
        await fetch('/api/auth/logout', { method: 'POST' });
        setState({ user: null, isLoading: false, error: null });
        router.push('/');
      } catch (error) {
        console.error('Logout failed:', error);
        setState(prev => ({ 
          ...prev, 
          error: 'Logout failed' 
        }));
      } finally {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };
  
    const updateProfile = async (data: Partial<User['profile']>) => {
      try {
        setState(prev => ({ ...prev, isLoading: true }));
        
        const response = await fetch('/api/auth/profile', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update profile');
        }
  
        await refreshUser();
      } catch (error) {
        setState(prev => ({ 
          ...prev, 
          error: 'Failed to update profile' 
        }));
        throw error;
      } finally {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };
  
    // const hasPermission = useMemo(() => {
    //   return (permission: string): boolean => {
    //     if (!state.user) return false;
        
    //     // Import and use the permission checking logic from roles.ts
    //     // This will be based on the user's role and the permission requested
    //     return false; // Placeholder - implement actual logic
    //   };
    // }, [state.user]);
  
    const hasVentureAccess = useMemo(() => {
      return (ventureName: string, role?: string): boolean => {
        if (!state.user?.ventureAccess) return false;
        
        const access = state.user.ventureAccess.find(
          va => va.ventureName === ventureName
        );
        
        if (!access) return false;
        if (!role) return true;
        
        return access.role === role;
      };
    }, [state.user]);
  
    const value = {
      ...state,
      login,
      logout,
      refreshUser,
      updateProfile,
      // hasPermission,
      hasVentureAccess
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }