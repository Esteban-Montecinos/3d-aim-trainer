import { useStore } from "../hooks/useStore";
import { TimerIcon } from "./timer-svg";

export default function Header() {
  const score = useStore((state) => state.score);
  const timer = useStore((state) => state.timer);
  const hits = useStore((state) => state.hits);
  const accuracy = useStore((state) => state.accuracy);
  const reset = useStore((state) => state.reset);
  const setStatus = useStore((state) => state.setStatus);
  const status = useStore((state) => state.status);

  const reiniciar = () =>{
    reset();
    setStatus("initial");
  }
  const cambiarMira = () =>{
    setStatus("custom");
  }
  return (
    <div className="absolute top-0 flex flex-row items-start justify-between w-full gap-4 px-4 pt-2 bg-gradient-to-b from-black/50 to-transparent">
      <div className="flex flex-row w-40 py-2">
      {status === "playing" && <button onClick={reiniciar} className="px-2 py-1 text-sm border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800">Reiniciar partida</button>}
        {status === "initial" && <button onClick={cambiarMira} className="px-2 py-1 text-sm border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800">Cambiar mira</button>}
        {status === "custom" && <button onClick={reiniciar} className="px-2 py-1 text-sm border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800">Guardar mira</button>}
      </div>
      <div className="flex flex-row items-end justify-center gap-4 p-4">
        <div className="flex flex-col w-48 gap-1">
          <span className="text-lg font-medium text-left uppercase text-neutral-200">
            puntuación
          </span>
          <span className="p-2 text-xl font-semibold text-center border border-emerald-800 bg-gradient-to-b from-emerald-800 to-transparent">
            {score}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 w-28">
          <span className="inline-flex justify-center w-14">
            <TimerIcon className=" size-8" />
          </span>
          <span
            className={`${
              timer < 11
                ? "text-red-700 animate-jump animate-infinite animate-duration-1000"
                : "text-neutral-200"
            } w-full py-1 text-3xl font-bold text-center `}
          >
            {Math.round((timer / 1) * 100) / 100}
          </span>
        </div>
        <div className="flex flex-col w-48 gap-1">
          <span className="text-lg font-medium text-right uppercase text-neutral-200">
            Aciertos
          </span>
          <span className="p-2 text-xl font-semibold text-center border border-sky-800 bg-gradient-to-b from-sky-800 to-transparent">
            {hits}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="w-40 text-right uppercase">Puntería</span>
        <span className="w-40 px-2 py-1 text-xl font-semibold text-center border border-sky-800 bg-gradient-to-b from-sky-800 to-transparent">
          {Math.round((isNaN(accuracy) ? 0 : accuracy  / 1) * 100) / 100} %
        </span>
      </div>
    </div>
  );
}
