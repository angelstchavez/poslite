"use client";

import { VscArrowRight } from "react-icons/vsc";
import { Button } from "../ui/button";

import codImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#001E80,#ffffff_100%)] overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Versión 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Mejora la productividad
            </h1>
            <p className="text-xl tracking-tight mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <Button>Obtener gratis</Button>
              <Button variant="outline">
                <span>Aprender más</span>
                <VscArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={codImage.src}
              alt="Cod Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="Cylinder Image"
              width="220"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Noodle Image"
              width="220"
              className="hidden lg:block absolute top-[524px] left-[448px]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
