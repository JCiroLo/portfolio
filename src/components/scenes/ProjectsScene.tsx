import { FC, useEffect, useRef, useState } from "react";
import { Group, MathUtils } from "three";
import { useEnvironment } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { ObjectIpad } from "..";
import state from "../../store";
import contents from "../../contents";
import { useSectionFrame } from "../../hooks";

type ProjectsProps = JSX.IntrinsicElements["group"];

const Projects: FC<ProjectsProps> = (props) => {
  const { section, slide } = useSnapshot(state);

  const currentSlide = slide.projects;
  const [currentTexture, setCurrentTexture] = useState(contents.projects.contents[0].preview);

  const presetTexture = useEnvironment({ preset: "sunset" });

  const ipadRef = useRef<Group>(null!);
  const cubesRef = useRef<Group>(null!);
  // const roundedBox1 = useRef<Mesh>(null!);
  // const roundedBox2 = useRef<Mesh>(null!);
  // const roundedBox3 = useRef<Mesh>(null!);

  useSectionFrame((_, delta) => {
    // if (currentSlide === 0) {
    //   roundedBox1.current.rotation.x += delta * 0.1;
    //   roundedBox1.current.rotation.y += delta * 0.1;

    //   roundedBox2.current.rotation.x += delta * 0.1;
    //   roundedBox2.current.rotation.y += delta * 0.01;

    //   roundedBox3.current.rotation.x += delta * 0.01;
    //   roundedBox3.current.rotation.y += delta * 0.1;
    // }

    // easing.damp3(cubesRef.current.scale, currentSlide !== 0 ? [0, 0, 0] : [1, 1, 1], 0.1, delta);
    easing.damp3(ipadRef.current.scale, currentSlide === 0 ? [0, 0, 0] : [1, 1, 1], 0.1, delta);
    easing.damp3(ipadRef.current.scale, currentSlide === 0 ? [0, 0, 0] : [1, 1, 1], 0.1, delta);
    ipadRef.current.rotation.y = MathUtils.lerp(ipadRef.current.rotation.y, Math.PI * 2 * currentSlide, delta * 2);
  }, section === "projects");

  useEffect(() => {
    if (currentSlide !== 0) {
      setTimeout(() => {
        setCurrentTexture(contents.projects.contents[currentSlide - 1].preview);
      }, 250);
    }
  }, [currentSlide]);

  return (
    <group position={[3, 0, 0]} {...props}>
      <group ref={ipadRef}>
        <ObjectIpad envMap={presetTexture} textureSrc={currentTexture} scale={8} position={[3, 0, 0]} />
      </group>

      {/* <group ref={cubesRef} position={[-3, 0, 0]}>
        <RoundedBox ref={roundedBox1} radius={0.15} smoothness={16} position={[-3, 2, 0]} scale={[1.5, 1.5, 1.5]}>
          <MeshTransmissionMaterial envMap={presetTexture} thickness={2} anisotropy={0.1} chromaticAberration={0.04} />
        </RoundedBox>

        <RoundedBox ref={roundedBox2} radius={0.15} smoothness={16} position={[4, 1, 0]} scale={[1.5, 1.5, 1.5]}>
          <MeshTransmissionMaterial envMap={presetTexture} thickness={2} anisotropy={0.1} chromaticAberration={0.04} />
        </RoundedBox>

        <RoundedBox ref={roundedBox3} radius={0.15} smoothness={16} position={[-2, -2, 0]} scale={[1, 1, 1]}>
          <MeshTransmissionMaterial envMap={presetTexture} thickness={2} anisotropy={0.1} chromaticAberration={0.04} />
        </RoundedBox>
      </group> */}
    </group>
  );
};

export default Projects;
