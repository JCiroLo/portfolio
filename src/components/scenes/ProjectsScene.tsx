import { FC, useEffect, useRef, useState } from "react";
import { Group, MathUtils } from "three";
import { useEnvironment } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { ObjectBanana, ObjectIpad, ObjectIphone } from "..";
import state from "../../store";
import contents from "../../contents";
import { useSectionFrame } from "../../hooks";

type ProjectsProps = JSX.IntrinsicElements["group"];

const Projects: FC<ProjectsProps> = (props) => {
  const { section, slide } = useSnapshot(state);

  const currentSlide = slide.projects;
  const [currentProject, setCurrentProject] = useState(contents.projects.contents[0]);

  const presetTexture = useEnvironment({ preset: "sunset" });

  const ipadRef = useRef<Group>(null!);
  const iphoneRef = useRef<Group>(null!);
  const bananaRef = useRef<Group>(null!);

  useSectionFrame((_, delta) => {
    // if (currentSlide === 0) {
    //   bananaRef.current.rotation.x += delta * 0.1;
    //   bananaRef.current.rotation.y += delta * 0.1;
    // }

    easing.damp3(bananaRef.current.scale, currentSlide !== 0 ? [0, 0, 0] : [1, 1, 1], 0.1, delta);
    easing.damp3(ipadRef.current.scale, currentSlide === 0 || currentProject.isMobile ? [0, 0, 0] : [1, 1, 1], 0.1, delta);
    easing.damp3(iphoneRef.current.scale, currentSlide === 0 || !currentProject.isMobile ? [0, 0, 0] : [1, 1, 1], 0.1, delta);

    ipadRef.current.rotation.y = MathUtils.lerp(ipadRef.current.rotation.y, Math.PI * 2 * currentSlide, delta * 2);
    iphoneRef.current.rotation.y = MathUtils.lerp(ipadRef.current.rotation.y, Math.PI * 2 * currentSlide, delta * 2);
  }, section === "projects");

  useEffect(() => {
    if (currentSlide !== 0) {
      setTimeout(() => {
        setCurrentProject(contents.projects.contents[currentSlide - 1]);
      }, 250);
    }
  }, [currentSlide]);

  return (
    <group position={[3, 0, 0]} {...props}>
      <group ref={ipadRef}>
        <ObjectIpad envMap={presetTexture} textureSrc={currentProject.preview} scale={8} position={[3, 0, 0]} />
      </group>

      <group ref={iphoneRef}>
        <ObjectIphone envMap={presetTexture} textureSrc={currentProject.preview} scale={6} position={[0, 0, 0]} />
      </group>

      <group ref={bananaRef} position={[-3, 0, 0]}>
        <ObjectBanana envMap={presetTexture} />
      </group>
    </group>
  );
};

export default Projects;
