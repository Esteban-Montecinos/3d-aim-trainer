import { useStore } from "../hooks/useStore";

export default function Footer() {
  const reset = useStore((state) => state.reset);
  const setBestScore = useStore((state) => state.setBestScore);
  const setStatus = useStore((state) => state.setStatus);
  const status = useStore((state) => state.status);
  const reiniciar = () =>{
    reset();
    setBestScore();
    setStatus("initial");
  }
  const cambiarMira = () =>{
    setStatus("custom");
  }
  return (
    <div className="absolute bottom-0 flex flex-row items-center justify-between w-full gap-4 px-4 pb-2 bg-gradient-to-t from-black/50 to-transparent">
      <div className="flex flex-row items-center">
        <span  className="text-xs uppercase ">Modelo de mapa: <a href="https://sketchfab.com/Keremz" className="text-sky-400" target="_blank" rel="noopener noreferrer">Kerem Kavalci</a></span>
        
      </div>
      <div className="flex flex-row gap-2">
      {status === "playing" && <button onClick={reiniciar} className="px-2 py-1 text-sm border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800">Reiniciar partida</button>}
        {status === "initial" && <button onClick={cambiarMira} className="px-2 py-1 text-sm border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800">Cambiar mira</button>}
        {status === "custom" && <button onClick={reiniciar} className="px-2 py-1 text-sm border border-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 hover:border-neutral-800">Guardar mira</button>}
      </div>
    </div>
  );
}
