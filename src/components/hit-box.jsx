import { usePlane } from "@react-three/cannon";
import { Texture } from "../images/textures";
import { MeshBasicMaterial } from "three";
import { useStore } from "../hooks/useStore";

export function HitBox() {
  const incrementFails = useStore((state) => state.incrementFails);
  const status = useStore((state) => state.status);
  
  const setStatus = useStore((state) => state.setStatus);
  const resetScore = useStore((state) => state.resetScore);
  
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
    position: [0, 0, 7],
  }));
  Texture.repeat.set(7, 16);
  const transparentMaterial = new MeshBasicMaterial({
    transparent: true,
    opacity: 0,
  });

  function hit() {
    if (status === 'playing') {
      incrementFails()
    }
    if(status === 'initial'){
      resetScore()
      setStatus('playing')
    }
  }
  return (
    <group>
      <mesh ref={ref1} onClick={hit} material={transparentMaterial}>
        <planeGeometry attach="geometry" args={[12, 12]} />
      </mesh>
      <mesh ref={refPiso} onClick={hit}>
        <planeGeometry attach="geometry" args={[10, 10]} material={transparentMaterial}/>
      </mesh>
      <mesh ref={ref3} onClick={hit} material={transparentMaterial}>
        <planeGeometry attach="geometry" args={[10, 10]} />
      </mesh>
      <mesh ref={ref4} onClick={hit} material={transparentMaterial}>
        <planeGeometry attach="geometry" args={[10, 10]} />
      </mesh>
      <mesh ref={refTecho} onClick={hit} material={transparentMaterial}>
        <planeGeometry attach="geometry" args={[10, 10]} />
      </mesh>
      <mesh ref={ref6} onClick={hit}>
        <planeGeometry attach="geometry" args={[10, 10]} />
        <meshStandardMaterial attach="material" map={Texture} />
      </mesh>
    </group>
  );
}
