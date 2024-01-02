import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function Mapa() {
  const mapRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/map.glb", (gltf) => {
      const mapModel = gltf.scene;

      mapModel.scale.set(2, 2, 2);
      mapModel.rotation.set(0, Math.PI , 0);
      mapModel.position.set(0,0,1);
      mapRef.current.add(mapModel);
    });
  }, []);

  return <mesh ref={mapRef} />;
}