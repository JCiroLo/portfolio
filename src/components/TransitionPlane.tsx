import { FC, useEffect, useRef } from "react";
import { ShaderMaterial, Texture, Vector4 } from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { easing } from "maath";
import transitions from "../shaders/transitions";

extend({ ShaderMaterial });

const transitionShader = {
  uniforms: {
    tCurrentTexture: { value: new Texture() },
    tNextTexture: { value: new Texture() },
    progress: { value: 0 },
    time: { value: 0 },
    resolution: { value: new Vector4() },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  fragmentShader: transitions.boom,
};

type TransitionPlaneProps = {
  nextTexture: Texture;
};

const TransitionPlane: FC<TransitionPlaneProps> = ({ nextTexture }) => {
  const viewport = useThree((state) => state.viewport);
  const materialRef = useRef<ShaderMaterial>(null!);
  const currentTexture = useRef<Texture>(new Texture());

  useFrame(({ clock }, delta) => {
    materialRef.current.uniforms.time.value = clock.elapsedTime;
    materialRef.current.uniforms.tNextTexture.value = nextTexture;
    materialRef.current.uniforms.tCurrentTexture.value = currentTexture.current;

    if (materialRef.current.uniforms.progress.value !== 1) {
      easing.damp(materialRef.current.uniforms.progress, "value", 1, 0.25, delta);
    }
  });

  useEffect(() => {
    materialRef.current.uniforms.progress.value = 0;

    const timer = setTimeout(() => {
      currentTexture.current = nextTexture;
    }, 750);

    return () => clearTimeout(timer);
  }, [nextTexture]);

  useEffect(() => {
    const aspect = viewport.height / viewport.width;

    let a1;
    let a2;

    if (viewport.height / viewport.width > aspect) {
      a1 = (viewport.width / viewport.height) * aspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = viewport.height / viewport.width / aspect;
    }

    materialRef.current.uniforms.resolution.value.x = viewport.width;
    materialRef.current.uniforms.resolution.value.y = viewport.height;
    materialRef.current.uniforms.resolution.value.z = a1;
    materialRef.current.uniforms.resolution.value.w = a2;
  }, [viewport.height, viewport.width]);

  return (
    <mesh>
      <planeGeometry attach="geometry" args={[viewport.width, viewport.height]} />
      <shaderMaterial ref={materialRef} attach="material" args={[transitionShader]} toneMapped={false} />
    </mesh>
  );
};

export default TransitionPlane;
