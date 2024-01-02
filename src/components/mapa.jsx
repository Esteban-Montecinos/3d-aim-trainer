import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useStore } from "../hooks/useStore";

export function Mapa() {
  const setModelLoaded = useStore((state) => state.setModelLoaded);
  const mapRef = useRef();
  useEffect(() => {
    setModelLoaded(false);
    const loader = new GLTFLoader();
    loader.load("/map.glb", (gltf) => {
      const mapModel = gltf.scene;
      mapModel.scale.set(2, 2, 2);
      mapModel.rotation.set(0, Math.PI , 0);
      mapModel.position.set(0,0,1);
      mapRef.current.add(mapModel);
      setModelLoaded(true);
    });
  }, []);

  return <mesh ref={mapRef} />;
}