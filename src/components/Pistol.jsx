import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from '../hooks/useControls';
import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';
import gunshot from '/9mm_sound.ogg';
import useSound from 'use-sound';
export function Model() {
  const [play] = useSound(gunshot, {volume:0.1});
  const isShooting = useControls((state) => state.isShooting);
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    type: "Dynamic",
    position: [0, 0, 5],
    rotation: [0, 0, 0]
  }));
  const pos = useRef([0, 0, 5]);
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/pistol.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
  const animaciones = Object.values(actions)
    if (isShooting) {
      play()
      animaciones[2].play()
      animaciones[0].stop();
    }else{
      animaciones[0].play()
      animaciones[2].stop();
    }

}, [actions, isShooting,play])
  
  useEffect(() => {
    api.position.subscribe((p) => {
      pos.current = p;
    });
  }, [api.position]);
  useFrame(() => {
    
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
    group.current.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
        group.current.quaternion.copy(camera.quaternion);
  });
 
  return (
    <group>
<mesh ref={ref} />
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene"  scale={0.4} position={[0.03, -0.11,-0.03]} rotation={[0, Math.PI, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2,0, 0]}>
          <group name="3ab9f780f2294ec8ba398c31f25c6b54fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2" >
              <group name="RootNode">
                <group name="arms" rotation={[-Math.PI / 2,0, 0]} scale={100} />
                <group name="Armature" rotation={[-Math.PI / 2,0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" rotation={[-Math.PI / 2,0, 0]} scale={100} />
                    <group name="Object_90" rotation={[-Math.PI / 2,0, 0]} scale={100} />
                    <group name="Object_92" rotation={[-Math.PI / 2,0, 0]} scale={100} />
                    <group name="Object_94" rotation={[-Math.PI / 2,0, 0]} scale={100} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.arms} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials.Material} skeleton={nodes.Object_91.skeleton} />
                    <skinnedMesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials.Material} skeleton={nodes.Object_93.skeleton} />
                    <skinnedMesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials.Material} skeleton={nodes.Object_95.skeleton} />
                  </group>
                </group>
                <group name="xd_frame" rotation={[-Math.PI / 2,0, 0]} scale={100}/>
                <group name="xd_frame001" rotation={[-Math.PI / 2,0, 0]} scale={100} />
                <group name="xd_frame002" rotation={[-Math.PI / 2,0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </group>
  )
}

useGLTF.preload('/pistol.glb')
