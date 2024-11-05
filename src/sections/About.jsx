import Globe from "react-globe.gl";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      //   stiffness: 400,
      //   damping: 40,
      duration: 3,
      staggerChildren: 0.2,
    },
  },
};
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ommykmathy@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space py-20 overflow-hidden" id="about">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <motion.div variants={variants} className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hey I&apos;am Omar</p>
              <p className="grid-subtext">
                With 7 years of experience, I have honed my skills in frontend
                and backend development using modern technologies
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={variants} className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid5.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                <ul className="list-disc">
                  <li>
                    Javascript/Typescript with focus on React/Next.js and
                    Node.js/Express.js ecosystems
                  </li>
                  <li>Php/Laravel</li>
                  <li>MySQL, PostgreSQL and MongoDB</li>
                </ul>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={variants} className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[
                  {
                    lat: -1.2910302611254834,
                    lng: 36.89596108465714,
                    text: "My location",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I&apos;m based in Kenya, with remote work available.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10 btn"
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={variants} className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                is not just my professional but more of passion
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={variants} className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />

                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  ommykmathy@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
