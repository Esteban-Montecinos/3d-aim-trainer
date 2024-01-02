export default function Footer() {
  return (
    <div className="absolute bottom-0 flex flex-row items-center justify-between w-full gap-4 p-4 bg-gradient-to-t from-black/50 to-transparent">
      <span className="text-xs uppercase ">
        Desarrollado por:{" "}
        <a
          href="https://github.com/Esteban-Montecinos"
          className="text-sky-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esteban Montecinos
        </a>
      </span>
      <span className="text-xs uppercase ">
        Modelo de mapa:{" "}
        <a
          href="https://sketchfab.com/Keremz"
          className="text-sky-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kerem Kavalci
        </a>
      </span>
    </div>
  );
}
