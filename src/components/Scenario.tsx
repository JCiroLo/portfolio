import { FC, useEffect, useRef } from "react";
import { ACESFilmicToneMapping, Color, Fog, Group, PerspectiveCamera as THREEPerspectiveCamera, Texture, Vector2 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useFBO } from "@react-three/drei";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { Stack } from "@mui/material";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { AboutScene, CameraRig, MeScene, ProjectsScene, TransitionPlane } from ".";
import state from "../store";
import { SECTIONS_INDEX } from "../utilities/constants";

import { type Sections } from "../utilities/types";

const config = {
  camera: {
    getFov(section: Sections) {
      const options: Record<Sections, number> = {
        me: 120,
        about: 50,
        experience: 75,
        projects: 45,
        contact: 45,
      };

      return options[section];
    },
    getPosition(section: Sections) {
      const options: Record<Sections, [number, number, number]> = {
        me: [0, 0, 20],
        about: [0, 5.5, 10],
        experience: [0, 0, 10],
        projects: [0, 0, 10],
        contact: [0, 0, 20],
      };

      return options[section];
    },
    getTarget(section: Sections) {
      const options: Record<Sections, [number, number, number]> = {
        me: [0, 0, 0],
        about: [0, 0, 0],
        experience: [0, 0, 0],
        projects: [0, 0, 0],
        contact: [0, 0, 0],
      };

      return options[section];
    },
  },
  effects: {
    bloom: {
      getIntensity(section: Sections) {
        const options: Record<Sections, number> = {
          me: 5,
          about: 1,
          experience: 1,
          projects: 0,
          contact: 0,
        };

        return options[section];
      },
    },
    chromaticAberration: {
      getOffset(section: Sections) {
        const options: Record<Sections, [number, number]> = {
          me: [0.001, 0.001],
          about: [0, 0],
          experience: [0, 0],
          projects: [0, 0],
          contact: [0, 0],
        };

        return options[section];
      },
    },
  },
};

const ScenarioWrapper: FC = () => {
  const { section } = useSnapshot(state);

  const colorRef = useRef<Color>(null!);
  const fogRef = useRef<Fog>(null!);
  const renderCamera = useRef<THREEPerspectiveCamera>(null!);

  const sceneMe = useRef<Group>(null!);
  const sceneAbout = useRef<Group>(null!);
  const sceneProjects = useRef<Group>(null!);

  const renderTargetMe = useFBO();
  const renderTargetAbout = useFBO();
  const renderTargetProjects = useFBO();

  const bloomEffect = useRef(null!);
  const chromaticAberrationEffect = useRef(null!);

  const textures = useRef<Texture[]>([renderTargetMe.texture, renderTargetAbout.texture, renderTargetProjects.texture]);

  useFrame(({ gl, scene }) => {
    gl.setRenderTarget(renderTargetMe);

    sceneMe.current.visible = true;
    sceneAbout.current.visible = false;
    sceneProjects.current.visible = false;

    gl.render(scene, renderCamera.current);

    gl.setRenderTarget(renderTargetAbout);

    sceneMe.current.visible = false;
    sceneAbout.current.visible = true;
    sceneProjects.current.visible = false;

    gl.render(scene, renderCamera.current);

    gl.setRenderTarget(renderTargetProjects);

    sceneMe.current.visible = false;
    sceneAbout.current.visible = false;
    sceneProjects.current.visible = true;

    gl.render(scene, renderCamera.current);

    sceneMe.current.visible = false;
    sceneAbout.current.visible = false;
    sceneProjects.current.visible = false;

    gl.setRenderTarget(null);
  });

  useFrame((_, delta) => {
    const { bloom, chromaticAberration } = config.effects;

    // Effects
    easing.damp(bloomEffect.current, "intensity", bloom.getIntensity(section), 0.25, delta * 2);
    easing.damp2((chromaticAberrationEffect.current as { offset: Vector2 }).offset, chromaticAberration.getOffset(section), 0.25, delta);

    // Background Color
    easing.dampC(colorRef.current, section === "me" ? 0x000000 : 0x171720, 0.25, delta);

    // Fog
    easing.damp(fogRef.current, "far", section === "experience" ? 10 : 50, 0.1, delta);

    // Camera
    easing.damp(renderCamera.current, "fov", config.camera.getFov(section), 0.1, delta);
    easing.damp3(renderCamera.current.position, config.camera.getPosition(section), 0.25, delta);

    renderCamera.current.updateProjectionMatrix();
  });

  useEffect(() => {
    renderCamera.current.lookAt(0, 0, 0);
  }, []);

  return (
    <>
      <color ref={colorRef} attach="background" args={[0x000000]} />
      <fog ref={fogRef} attach="fog" args={[0x171720, 0, 50]} />

      <PerspectiveCamera ref={renderCamera} near={0.5} />

      <TransitionPlane nextTexture={textures.current[SECTIONS_INDEX[section]]} />

      <CameraRig>
        <group ref={sceneMe}>
          <MeScene />
        </group>
        <group ref={sceneAbout}>
          <AboutScene />
        </group>
        <group ref={sceneProjects}>
          <ProjectsScene />
        </group>
      </CameraRig>

      <EffectComposer autoClear>
        <Bloom ref={bloomEffect} luminanceThreshold={0.05} luminanceSmoothing={0} mipmapBlur={true} />
        <ChromaticAberration ref={chromaticAberrationEffect} radialModulation={false} modulationOffset={0} />
      </EffectComposer>
    </>
  );
};

const Scenario: FC = () => {
  return (
    <Stack position="fixed" sx={{ inset: 0 }}>
      <Canvas
        gl={{
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 3.4,
        }}
        eventSource={document.getElementById("root")!}
        eventPrefix="client"
      >
        <ScenarioWrapper />
      </Canvas>
    </Stack>
  );
};

export default Scenario;
