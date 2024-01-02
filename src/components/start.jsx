import { useStore } from "../hooks/useStore";
import { TrophyFillIcon } from "./trophy-fill-svg";
import { TrophyIcon } from "./trophy-svg";

export default function Start() {
  const status = useStore((state) => state.status);
  const score = useStore((state) => state.score);
  const bestScore = useStore((state) => state.bestScore);
  const setStatus = useStore((state) => state.setStatus);
  const resetScore = useStore((state) => state.resetScore);
  const handleStart = () => {
    if (status === "initial") {
      resetScore();
      setStatus("playing");
    }
  };

  return (
    <div className="absolute left-0 flex flex-col items-center justify-center w-full top-36 h-fit">
      <div
        className={`${
          status === "initial" ? "animate-jump-in" : "animate-jump-out"
        } flex flex-col gap-6 p-4 w-80 bg-neutral-900 `}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center justify-center text-neutral-300">
            <TrophyIcon className="size-8 " />
            <h1 className="text-sm uppercase">Puntuación</h1>
            <p className="text-sm">{score}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-amber-300">
            <TrophyFillIcon className="size-8" />
            <h1 className="text-sm uppercase">Mejor puntuación</h1>
            <p className="text-sm">{bestScore}</p>
          </div>
        </div>
        <button
          onClick={handleStart}
          className="px-2 py-1 text-sm uppercase border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800"
        >
          Comenzar
        </button>
      </div>
    </div>
  );
}
