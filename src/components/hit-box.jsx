import { usePlane } from "@react-three/cannon";
import { Texture } from "../images/textures";
import { MeshBasicMaterial } from "three";
import { useStore } from "../hooks/useStore";
import { useControls } from "../hooks/useControls";

export function HitBox() {
  const setIsShooting = useControls((state) => state.setIsShooting);
  const incrementFails = useStore((state) => state.incrementFails);
  const status = useStore((state) => state.status);
  
  const [ref1] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, -1],
  }));
  const [refPiso] = usePlane(() => ({ //piso
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -5, 5],
  }));
  const [ref3] = usePlane(() => ({
    rotation: [0, -Math.PI / 2, 0],
    position: [5, 0, 5],
  }));
  const [ref4] = usePlane(() => ({
    rotation: [0, Math.PI / 2, 0],
    position: [-5, 0, 5],
  }));
  const [refTecho] = usePlane(() => ({ //techo
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 5, 5],
  }));
  const [ref6] = usePlane(() => ({
    rotation: [0, Math.PI, 0],
    position: [0, 0, 10],
  }));
  Texture.repeat.set(6, 6);
  const transparentMaterial = new MeshBasicMaterial({
    transparent: true,
    opacity: 0,
  });

  function hit() {
    if (status === 'playing') {
      incrementFails()
      setIsShooting(true);
      setTimeout(() => {
        setIsShooting(false);
      }, "100");
    }

  }
  return (
    <group>
      <mesh ref={ref1} onClick={hit} material={transparentMaterial}>
        <planeGeometry attach="geometry" args={[12, 12]} />
      </mesh>
      <mesh ref={refPiso} onClick={hit} material={transparentMaterial}>
        <planeGeometry attach="geometry" args={[12, 12]} />
        
      </mesh>
      <mesh ref={ref3} onClick={hit} material={transparentMaterial} >
        <planeGeometry attach="geometry" args={[12, 12]} />
        
      </mesh>
      <mesh ref={ref4} onClick={hit} material={transparentMaterial} >
        <planeGeometry attach="geometry" args={[12, 12]} />
        
      </mesh>
      <mesh ref={refTecho} onClick={hit} material={transparentMaterial} >
        <planeGeometry attach="geometry" args={[12, 12]} />
        
      </mesh>
      <mesh ref={ref6} onClick={hit}>
        <planeGeometry attach="geometry" args={[12, 12]} />
        <meshStandardMaterial attach="material" map={Texture} color="DimGray" />
      </mesh>
    </group>
  );
}
