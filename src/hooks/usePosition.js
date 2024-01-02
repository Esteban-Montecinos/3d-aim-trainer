import { useStore } from "./useStore";

export const usePosition = () => {
  const cubes = useStore((state) => state.cubes);
  const positionsX = useStore((state) => state.positionsX);
  const positionsY = useStore((state) => state.positionsY);
  const posicionOcupada = (posicion) => {
    return cubes.some(
      (cube) => cube.pos[0] === posicion.x && cube.pos[1] === posicion.y
    );
  };
  const generarPosicionAleatoria = () => {
    let nuevaPosicion;
    let indiceX;
    let indiceY;
    do {
      indiceX = Math.floor(Math.random() * positionsX.length);
      indiceY = Math.floor(Math.random() * positionsY.length);
      nuevaPosicion = {
        x: positionsX[indiceX],
        y: positionsY[indiceY],
      };
    } while (posicionOcupada(nuevaPosicion));
    return nuevaPosicion;
  };

  return { posicionOcupada, generarPosicionAleatoria };
};
