import { FC, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { Color, Group, Vector2 } from "three";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { CameraRig, MeScene } from ".";
import state from "../store";

const ScenarioWrapper: FC = () => {
  const { section } = useSnapshot(state);

  const colorRef = useRef<Color>(null!);
  const sceneRef = useRef<Group>(null!);

  useFrame((_, delta) => {
    easing.dampC(colorRef.current, section === "me" ? 0x000000 : 0x171720, 0.25, delta);
    easing.damp3(sceneRef.current.scale, section === "me" ? [1, 1, 1] : [0, 0, 0], 0.1, delta);
  });

  return (
    <>
      <color ref={colorRef} attach="background" args={[0x171720]} />

      <CameraRig>
        <group ref={sceneRef}>
          <MeScene />
        </group>
      </CameraRig>

      <EffectComposer autoClear>
        <Bloom intensity={1} luminanceThreshold={0.05} luminanceSmoothing={0} mipmapBlur={true} />
        <ChromaticAberration offset={new Vector2(0.001, 0.001)} radialModulation={false} modulationOffset={0} />
      </EffectComposer>
    </>
  );
};

const ScenarioMobile: FC = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Canvas
        // gl={{
        //   toneMapping: ACESFilmicToneMapping,
        //   toneMappingExposure: 3.4,
        // }}
        camera={{ position: [0, 0, 20], fov: 120 }}
        eventSource={document.getElementById("root")!}
        eventPrefix="client"
      >
        <ScenarioWrapper />
      </Canvas>
    </div>
  );
};

export default ScenarioMobile;
