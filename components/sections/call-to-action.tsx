"use client";

import { Button } from "../ui/button";
import { VscArrowRight } from "react-icons/vsc";
import startImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Regístrese gratis hoy
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.img
            src={startImage.src}
            alt={"Star Image"}
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt={"Spring Image"}
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Button>Obtener gratis</Button>
          <Button variant="outline">
            <span>Aprender más</span>
            <VscArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
