import {
  // OrbitControls,
  PerspectiveCamera,
  // ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
// import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
// import Cube from "../components/Cube";
import RobotPlayground from "../components/RobotPlayground";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import cv from "/doc/cv.pdf";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Omar <span className="waving-hand">🖐</span>
        </p>
        <p className="capitalize hero_tag text-gray_gradient">
          fullstack developer
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          {/* <OrbitControls enableRotate enableZoom={false} enableSpan /> */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            /> */}
            {/* <ScrollControls damping={0.2} pages={2}>
              <RobotPlayground
                position={sizes.deskPosition}
                rotation={[0, Math.PI / 90, 0]}
                scale={4}
              />
            </ScrollControls> */}
            <HeroCamera isMobile={isMobile}>
              <RobotPlayground
                position={sizes.deskPosition}
                rotation={[0, Math.PI / 90, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              {/* <Target position={sizes.targetPosition} /> */}
              <ReactLogo position={sizes.reactLogoPosition} />
              {/* <Cube position={sizes.cubePosition} /> */}
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-3 left-0 right-0 w-full z-10 c-space flex sm:flex-row items-center justify-center gap-2">
        <a href="#about" className="w-fit">
          <Button
            name="Know Me"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 btn"
          />
        </a>
        <a href={cv} download="omar-cv" rel="noreferrer" className="w-fit">
          <Button
            name="Download CV"
            containerClass="sm:w-fit w-full sm:min-w-96 btn_alt"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
