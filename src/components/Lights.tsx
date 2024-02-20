import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { AmbientLight, PointLight } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Lights = () => {
  const snap = useSnapshot(state);
  const pointLight1 = useRef<PointLight>(null!);
  const pointLight2 = useRef<PointLight>(null!);
  const ambientLight = useRef<AmbientLight>(null!);

  useFrame((_, delta) => {
    easing.damp(pointLight1.current, "intensity", snap.section === "me" ? 1000 : 0, 0.25, delta);
    easing.damp(pointLight2.current, "intensity", snap.section === "me" ? 1000 : 0, 0.25, delta);
    easing.damp(ambientLight.current, "intensity", snap.section === "me" ? 0 : 1, 0.25, delta);
  });

  return (
    <>
      <pointLight ref={pointLight1} position={[20, 0, 0]} />
      <pointLight ref={pointLight2} position={[-20, 0, 0]} />
      <ambientLight ref={ambientLight} />
    </>
  );
};

export default Lights;
