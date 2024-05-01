// components/avatar-renderer.tsx

"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import Avatar from "../../avatar";

const ModelRenderer = () => {
  return (
    <div className="w-full h-auto aspect-[24/25]">
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center h-[calc(100vh-300px)] font-bold text-[30px] font-mono text-white">
            loading...
          </div>
        }
      >
        <Canvas
          shadows="basic"
          // adjust camera parameters according to your needs
          camera={{
            position: [0, -5, 1.5],
            fov: 50,
            castShadow: true,
            zoom: 1.3,
          }}
          className="w-full h-full"
        >
          <OrbitControls />
          <ambientLight intensity={1.5} />
          <Environment preset="sunset" />
          <directionalLight intensity={0.8} />
          <Avatar />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ModelRenderer;