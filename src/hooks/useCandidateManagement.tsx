import { useState, useCallback } from 'react';

interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  experience: string;
  salary: string;
  status: 'New' | 'In Review' | 'Interview' | 'Offered' | 'Rejected';
  skills: string[];
  resumeUrl?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  appliedDate: Date;
}

interface UseCandidatesReturn {
  candidates: Candidate[];
  isLoading: boolean;
  error: Error | null;
  addCandidate: (candidateData: Omit<Candidate, 'id' | 'appliedDate'>) => Promise<void>;
  updateCandidate: (id: string, updates: Partial<Candidate>) => Promise<void>;
  deleteCandidate: (id: string) => Promise<void>;
  updateCandidateStatus: (id: string, status: Candidate['status']) => Promise<void>;
  filterCandidates: (filters: {
    status?: Candidate['status'][];
    department?: string[];
    search?: string;
  }) => Candidate[];
}

export const useCandidates = (): UseCandidatesReturn => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addCandidate = useCallback(async (candidateData: Omit<Candidate, 'id' | 'appliedDate'>) => {
    try {
      setIsLoading(true);
      // Here you would typically make an API call
      const newCandidate: Candidate = {
        ...candidateData,
        id: Math.random().toString(36).substr(2, 9),
        appliedDate: new Date()
      };
      
      setCandidates(prev => [...prev, newCandidate]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add candidate'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateCandidate = useCallback(async (id: string, updates: Partial<Candidate>) => {
    try {
      setIsLoading(true);
      // Here you would typically make an API call
      setCandidates(prev =>
        prev.map(candidate =>
          candidate.id === id ? { ...candidate, ...updates } : candidate
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update candidate'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteCandidate = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      // Here you would typically make an API call
      setCandidates(prev => prev.filter(candidate => candidate.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete candidate'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateCandidateStatus = useCallback(async (id: string, status: Candidate['status']) => {
    try {
      setIsLoading(true);
      // Here you would typically make an API call
      setCandidates(prev =>
        prev.map(candidate =>
          candidate.id === id ? { ...candidate, status } : candidate
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update candidate status'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filterCandidates = useCallback(
    (filters: { status?: Candidate['status'][]; department?: string[]; search?: string }) => {
      return candidates.filter(candidate => {
        const matchesStatus = !filters.status?.length || filters.status.includes(candidate.status);
        const matchesDepartment =
          !filters.department?.length || filters.department.includes(candidate.department);
        const matchesSearch = !filters.search
          ? true
          : Object.values(candidate).some(
              value =>
                typeof value === 'string' &&
                value.toLowerCase().includes(filters.search!.toLowerCase())
            );

        return matchesStatus && matchesDepartment && matchesSearch;
      });
    },
    [candidates]
  );

  return {
    candidates,
    isLoading,
    error,
    addCandidate,
    updateCandidate,
    deleteCandidate,
    updateCandidateStatus,
    filterCandidates
  };
};