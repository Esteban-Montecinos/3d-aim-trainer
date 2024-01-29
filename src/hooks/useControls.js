import { create } from "zustand";

export const useControls = create(
    (set) => ({
      isShooting: false,
      setIsShooting: (bool) => set(() => ({ isShooting: bool })),
    })
);
