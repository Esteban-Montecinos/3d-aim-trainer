import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(persist((set) => ({
  cubes: [],
  score: 0,
  timer: 20.0,
  hits: 0,
  fails: 0,
  accuracy: 0,
  status: "initial",
  positionsX: [-0.3, 0.3],
  positionsY: [0.3, -0.3],
  color: "#00ff00",
  isBestScore: false,
  modelLoaded: false,
  setModelLoaded: (modelLoaded) => set(() => ({ modelLoaded })),
  setColor: (color) => set(() => ({ color })),
  addCube: (x, y) =>
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: crypto.randomUUID(),
          pos: [x, y, 2],
          color: "SandyBrown",
        },
      ],
    })),
  removeCube: (id) =>
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    })),
  setScore: (newScore) => set((state) => ({ score: state.score + newScore })),
  resetScore: () =>
    set(() => ({
      score: 0,
      accuracy: 0,
      fails: 0,
      cubes: [
        {
          id: crypto.randomUUID(),
          pos: [0.3, -0.3, 2],
          color: "SandyBrown",
        },
        {
          id: crypto.randomUUID(),
          pos: [-0.3, 0.3, 2],
          color: "SandyBrown",
        },
      ],
    })),
  setTimer: (lessTimer, addTimer) => set((state) => ({ timer: state.timer - lessTimer + addTimer })),
  incrementHits: () => set((state) => ({ hits: state.hits + 1 })),
  incrementFails: () => set((state) => ({ fails: state.fails + 1 })),
  setAccuracy: () =>
    set((state) => ({
      accuracy: (state.hits / (state.hits + state.fails)) * 100,
    })),
  addPositionX: (x) =>
    set((state) => ({ positionsX: [...state.positionsX, -x, x] })),
  addPositionY: (y) =>
    set((state) => ({ positionsY: [...state.positionsY, y] })),
  setStatus: (status) => set(() => ({ status })),
  reset: () =>
    set(() => ({
      timer: 20.0,
      hits: 0,
      positionsX: [0.3, -0.3],
      positionsY: [0.3, -0.3],
      cubes: [],
      isBestScore: false,
    })),
  bestScore: 0,
  setBestScore: () =>
    set((state) => ({
      bestScore: state.score > state.bestScore ? state.score : state.bestScore, isBestScore: state.score > state.bestScore
    })),
    setIsBestScore: (isBestScore) => set(() => ({ isBestScore })),
}),
{
  name: "store-3d-aim-trainer",
}
)
);
