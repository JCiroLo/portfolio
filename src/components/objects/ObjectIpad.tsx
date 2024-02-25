/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-ObjectIpads/apple-ipad-pro-e5ffb3c80b2d4d6690249f8ee2bdafbe
Title: Apple iPad Pro
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect } from "react";
import { PUBLIC_PATH } from "../../utilities/constants";

type GLTFResult = GLTF & {
  nodes: {
    iPad_Pro_2020_Body_0: THREE.Mesh;
    iPad_Pro_2020_screen_0: THREE.Mesh;
    iPad_Pro_2020_bezel_0: THREE.Mesh;
    camera_module_Body_0: THREE.Mesh;
    camera_module_glass_0: THREE.Mesh;
    camera_module2_camera2_0: THREE.Mesh;
    camera_cameraframe_and_logo_0: THREE.Mesh;
    camera_glass_0: THREE.Mesh;
    camera1_camera1_0: THREE.Mesh;
    ["camera1_camera1(2)_0"]: THREE.Mesh;
    camera2_camera2_0: THREE.Mesh;
    LiDar_LiDar_0: THREE.Mesh;
    camera1001_camera1_0: THREE.Mesh;
    ["camera1001_camera1(2)_0"]: THREE.Mesh;
    camera_module2001_camera2001_0: THREE.Mesh;
    camera_module2001_Camera_Flash_0: THREE.Mesh;
    camera_module2001_Mic_0: THREE.Mesh;
    Apple_logo_cameraframe_and_logo_0: THREE.Mesh;
    Connector__0: THREE.Mesh;
    Front_camera_front_camera_0: THREE.Mesh;
    ["Front_camera_camera1(2)_0"]: THREE.Mesh;
    Front_camera_glass_0: THREE.Mesh;
    Speakers_Mic_0: THREE.Mesh;
    Speakers_Body_0: THREE.Mesh;
    power_button_Body_0: THREE.Mesh;
    Volume_button_Body_0: THREE.Mesh;
    Apple_Pencil_apple_pencil_0: THREE.Mesh;
    Apple_logo001_apple_pencil001_0: THREE.Mesh;
    Text_apple_pencil001_0: THREE.Mesh;
    Line_Line_0: THREE.Mesh;
  };
  materials: {
    Body: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    bezel: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    camera2: THREE.MeshStandardMaterial;
    cameraframe_and_logo: THREE.MeshStandardMaterial;
    camera1: THREE.MeshStandardMaterial;
    camera12: THREE.MeshStandardMaterial;
    LiDar: THREE.MeshStandardMaterial;
    ["camera2.001"]: THREE.MeshStandardMaterial;
    Camera_Flash: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    material_12: THREE.MeshStandardMaterial;
    front_camera: THREE.MeshStandardMaterial;
    apple_pencil: THREE.MeshStandardMaterial;
    ["apple_pencil.001"]: THREE.MeshStandardMaterial;
    Line: THREE.MeshStandardMaterial;
  };
};

type ObjectIpadProps = JSX.IntrinsicElements["group"] & {
  envMap: THREE.Texture;
  textureSrc: string;
};

const ObjectIpad = (props: ObjectIpadProps) => {
  const { nodes, materials } = useGLTF(`${PUBLIC_PATH}/objects/ipad/scene.glb`) as GLTFResult;

  useEffect(() => {
    const customTexture = new THREE.TextureLoader().load(props.textureSrc);

    materials.screen.map = customTexture;
    materials.screen.metalness = 1;
    materials.screen.roughness = 0.25;
  }, [materials.screen, props.textureSrc]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material.isMaterial) {
        material.envMap = props.envMap;
        material.needsUpdate = true;
      }
    });
  }, [materials, props.envMap]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.iPad_Pro_2020_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.iPad_Pro_2020_screen_0.geometry} material={materials.screen} />
        <mesh geometry={nodes.iPad_Pro_2020_bezel_0.geometry} material={materials.bezel} />
        <mesh geometry={nodes.camera_module_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.camera_module_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.camera_module2_camera2_0.geometry} material={materials.camera2} />
        <mesh geometry={nodes.camera_cameraframe_and_logo_0.geometry} material={materials.cameraframe_and_logo} />
        <mesh geometry={nodes.camera_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.camera1_camera1_0.geometry} material={materials.camera1} />
        <mesh geometry={nodes["camera1_camera1(2)_0"].geometry} material={materials.camera12} />
        <mesh geometry={nodes.camera2_camera2_0.geometry} material={materials.camera2} />
        <mesh geometry={nodes.LiDar_LiDar_0.geometry} material={materials.LiDar} />
        <mesh geometry={nodes.camera1001_camera1_0.geometry} material={materials.camera1} />
        <mesh geometry={nodes["camera1001_camera1(2)_0"].geometry} material={materials.camera12} />
        <mesh geometry={nodes.camera_module2001_camera2001_0.geometry} material={materials["camera2.001"]} />
        <mesh geometry={nodes.camera_module2001_Camera_Flash_0.geometry} material={materials.Camera_Flash} />
        <mesh geometry={nodes.camera_module2001_Mic_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Apple_logo_cameraframe_and_logo_0.geometry} material={materials.cameraframe_and_logo} />
        <mesh geometry={nodes.Connector__0.geometry} material={materials.material_12} />
        <mesh geometry={nodes.Front_camera_front_camera_0.geometry} material={materials.front_camera} />
        <mesh geometry={nodes["Front_camera_camera1(2)_0"].geometry} material={materials.camera12} />
        <mesh geometry={nodes.Front_camera_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.Speakers_Mic_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Speakers_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.power_button_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.Volume_button_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.Line_Line_0.geometry} material={materials.Line} position={[0, 0.017, 0.768]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
};

useGLTF.preload(`${PUBLIC_PATH}/objects/ipad/scene.glb`);

export default ObjectIpad;
