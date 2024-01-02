import { useStore } from "../hooks/useStore";


export const Crosshair = () => {
  const status = useStore((state) => state.status);
  const color = useStore((state) => state.color);
  const setColor = useStore((state) => state.setColor);
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1"
      >
        <line x1="12" y1="5" x2="12" y2="10"></line>
        <line x1="12" y1="14" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="10" y2="12"></line>
        <line x1="14" y1="12" x2="19" y2="12"></line>
      </svg>
      {status === "custom" && (
        <div className="flex flex-col items-center justify-center p-4 bg-neutral-800">
          <label>
            Color:
            <input type="color" value={color} onChange={handleColorChange} />
          </label>
        </div>
      )}
    </div>
  );
};
