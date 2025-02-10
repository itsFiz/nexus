'use client';

import { createContext, useContext, useState } from 'react';
import roadmapData from '@/lib/validators/data/evolution';

// contexts/EvolutionContext.tsx
type EvolutionContextType = {
  isEditMode: boolean;
  setEditMode: (mode: boolean) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  evolutionData: typeof roadmapData;
  updateEvolution: (year: string, data: any) => Promise<void>;
};

const EvolutionContext = createContext<EvolutionContextType>({} as EvolutionContextType);

export function EvolutionProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setEditMode] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [evolutionData, setEvolutionData] = useState(roadmapData);

  const updateEvolution = async (year: string, data: any) => {
    try {
      setEvolutionData(prev => ({
        ...prev,
        [year as keyof typeof roadmapData]: {
          ...prev[year as keyof typeof roadmapData],
          ...data
        }
      }));
    } catch (error) {
      console.error('Update failed:', error);
      throw error;
    }
  };

  return (
    <EvolutionContext.Provider value={{
      isEditMode,
      setEditMode,
      selectedYear,
      setSelectedYear,
      evolutionData,
      updateEvolution
    }}>
      {children}
    </EvolutionContext.Provider>
  );
}

export const useEvolution = () => useContext(EvolutionContext);