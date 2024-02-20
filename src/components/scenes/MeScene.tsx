import { useRef } from "react";
import { BackSide, Mesh } from "three";
import { useSnapshot } from "valtio";
import state from "../../store";
import { useSectionFrame } from "../../hooks";

const config = {
  innerMesh: {
    thetaX: 0,
    thetaY: 0.2,
    thetaZ: 0.2,
  },
  outerMesh: {
    thetaX: 0,
    thetaY: 0.2,
    thetaZ: 0.2,
  },
};

const Me = () => {
  const { section } = useSnapshot(state);
  const innerMeshRef = useRef<Mesh>(null!);
  const outerMeshRef = useRef<Mesh>(null!);

  useSectionFrame((_, delta) => {
    innerMeshRef.current.rotation.x += delta * config.innerMesh.thetaX;
    innerMeshRef.current.rotation.y += delta * config.innerMesh.thetaY;
    innerMeshRef.current.rotation.z += delta * config.innerMesh.thetaZ;

    outerMeshRef.current.rotation.x += delta * config.outerMesh.thetaX;
    outerMeshRef.current.rotation.y += delta * config.outerMesh.thetaY;
    outerMeshRef.current.rotation.z += delta * config.outerMesh.thetaZ;
  }, section === "me");

  return (
    <group>
      <pointLight position={[20, 0, 0]} intensity={1000} />
      <pointLight position={[-20, 0, 0]} intensity={1000} />

      <mesh ref={innerMeshRef}>
        <icosahedronGeometry args={[10, 1]} />
        <meshStandardMaterial flatShading color={0x000000} metalness={1} roughness={0.5} />
      </mesh>

      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[30, 2]} />
        <meshStandardMaterial wireframe side={BackSide} metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
};

export default Me;
