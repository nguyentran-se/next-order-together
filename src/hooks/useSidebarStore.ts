import { create } from 'zustand';

interface ISidebarstore {
  isSidebarCollapsed: boolean;
  setSidebarCollapsed: (val: boolean) => void;
} 

export const useSidebarStore = create<ISidebarstore>((set) => ({
  isSidebarCollapsed: false,
  setSidebarCollapsed: (val: boolean) => set((state) => ({ isSidebarCollapsed: val })),
}));