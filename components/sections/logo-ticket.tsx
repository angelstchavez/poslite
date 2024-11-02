"use client";

import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";

const LogoTicket = () => {
  const logos = [
    acmeLogo,
    quantumLogo,
    echoLogo,
    celestialLogo,
    pulseLogo,
    apexLogo,
  ];

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]">
          <motion.div
            className="flex gap-14 animate-scroll mask-gradient pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <Image key={index} src={logo} alt="" className="w-auto h-8" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicket;
