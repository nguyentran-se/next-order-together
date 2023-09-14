import { create } from 'zustand';

interface ISidebarstore {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
}

export const useSidebarStore = create<ISidebarstore>((set) => ({
  isCollapsed: false,
  setIsCollapsed: (val: boolean) => set((state) => ({ isCollapsed: val })),
}));