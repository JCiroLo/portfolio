import { RenderCallback, useFrame } from "@react-three/fiber";

const useSectionFrame = (callback: RenderCallback, isActive: boolean, renderPriority?: number | undefined) => {
  useFrame((state, delta, frame) => {
    if (isActive) {
      callback(state, delta, frame);
    }
  }, renderPriority);
};

export default useSectionFrame;
