import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<Group>(null!);

  useFrame((state, delta) => {
    const rotation = [-state.pointer.y / 4, -state.pointer.x / 4, 0];

    // easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    easing.dampE(group.current.rotation, rotation as [number, number, number], 0.25, delta);

    state.camera.updateProjectionMatrix();
  });
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
