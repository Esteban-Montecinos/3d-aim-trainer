import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import { usePosition } from "../hooks/usePosition";
import { BoxTexture } from "../images/textures";
import { useControls } from "../hooks/useControls";

export const Box = ({ id, position, color }) => {
  const removeCube = useStore((state) => state.removeCube);
  const setIsShooting = useControls((state) => state.setIsShooting);
  const incrementHits = useStore((state) => state.incrementHits);
  const setScore = useStore((state) => state.setScore);
  const addCube = useStore((state) => state.addCube);
  const { generarPosicionAleatoria } = usePosition();
  const hits = useStore((state) => state.hits);
  const addPositionX = useStore((state) => state.addPositionX);
  const addPositionY = useStore((state) => state.addPositionY);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  return (
    <mesh
      ref={ref}
      scale={0.5}
      onClick={(e) => {
        e.stopPropagation();
        removeCube(id);
        setScore(15)
        incrementHits();
        setIsShooting(true);
        const { x, y } = generarPosicionAleatoria();
        addCube(x, y);
        if (hits === 25) {
          addPositionX(0.9);
          const { x, y } = generarPosicionAleatoria();
          addCube(x, y);
        } else if (hits === 50) {
          addPositionY(0.9);
        } else if (hits === 75) {
          addPositionY(-0.9);
        }
        setTimeout(() => {
          setIsShooting(false);
        }, "100");
      }}
    >
      <boxGeometry  attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color={color}
        map={BoxTexture}
      />
    </mesh>
  );
};
