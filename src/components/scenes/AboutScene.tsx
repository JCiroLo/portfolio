import { useRef } from "react";
import { Group } from "three";
import { Stars, useEnvironment } from "@react-three/drei";
import { ObjectPixelWorld } from "..";
import { useSectionFrame } from "../../hooks";
import { useSnapshot } from "valtio";
import state from "../../store";

const About = () => {
  const { section } = useSnapshot(state);
  const presetTexture = useEnvironment({ preset: "sunset" });

  const pixelWorld = useRef<Group>(null!);

  useSectionFrame((_, delta) => {
    pixelWorld.current.rotation.y -= delta * 0.25;
  }, section === "about" || section === "experience");

  return (
    <>
      <ObjectPixelWorld ref={pixelWorld} envMap={presetTexture} position={[0, 0, 0]} />
      <Stars />
    </>
  );
};

export default About;
