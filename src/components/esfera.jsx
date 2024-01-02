import { useSphere } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import { usePosition } from "../hooks/usePosition";
import { SphereTexture } from "../images/textures";

export const Esfera = ({ id, position, color }) => {
  const removeCube = useStore((state) => state.removeCube);
  const incrementHits = useStore((state) => state.incrementHits);
  const setScore = useStore((state) => state.setScore);
  const addCube = useStore((state) => state.addCube);
  const { generarPosicionAleatoria } = usePosition();
  const hits = useStore((state) => state.hits);
  const addPositionX = useStore((state) => state.addPositionX);
  const addPositionY = useStore((state) => state.addPositionY);
  const [ref] = useSphere(() => ({
    type: "Static",
    position,
  }));
  return (
    <mesh
      ref={ref}
      scale={0.35}
      onClick={(e) => {
        e.stopPropagation();
        removeCube(id);
        setScore(15)
        incrementHits();
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
      }}
    >
      <sphereGeometry  attach="geometry" args={[0.75]}/>
      <meshStandardMaterial
        attach="material"
        color={color}
        map={SphereTexture}
      />
    </mesh>
  );
};
