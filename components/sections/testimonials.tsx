"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Como diseñador experimentado siempre en busca de herramientas innovadoras, Framer.com captó mi atención de inmediato.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "La productividad de nuestro equipo se ha disparado desde que comenzamos a usar esta herramienta.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Esta aplicación ha transformado por completo la forma en que gestiono mis proyectos y plazos.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Me sorprendió lo rápido que pudimos integrar esta aplicación en nuestro flujo de trabajo.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planificar y ejecutar eventos nunca ha sido tan fácil. Esta aplicación me ayuda a mantener el control de todos los detalles, asegurando que nada se pase por alto.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "La personalización y las capacidades de integración de esta aplicación son de primera categoría.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adoptar esta aplicación para nuestro equipo ha optimizado nuestra gestión de proyectos y mejorado la comunicación en todos los niveles.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Con esta aplicación, podemos asignar tareas, seguir el progreso y gestionar documentos, todo en un solo lugar.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Su interfaz fácil de usar y sus funciones robustas satisfacen nuestras diversas necesidades.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  testimonials: typeof testimonials;
  className?: string;
  duration?: number;
}) => {
  const { testimonials, className } = props;

  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className={twMerge("flex flex-col gap-6", className)}
      >
        {/* Duplicate testimonials to create a seamless loop */}
        {[...testimonials, ...testimonials].map(
          ({ text, imageSrc, name, username }, idx) => (
            <div
              key={idx}
              className="bg-white p-10 border border-[#F1F1F1] rounded-2xl shadow-[0_7px_14px_#EAEAEA] max-w-xs"
            >
              <p className="mb-4 text-gray-700">{text}</p>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-medium tracking-tight leading-5">{name}</p>
                  <p className="tracking-tight leading-5">{username}</p>
                </div>
              </div>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Testimonios
          </div>
        </div>
        <div className="flex justify-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Lo que dicen nuestros usuarios
          </h2>
        </div>
        <p className="max-w-[540px] mx-auto text-center text-[22px] leading-[30px] tracking-tight mt-5">
          Desde un diseño intuitivo hasta funciones de powerfill, nuestra
          aplicación se ha convertido en una herramienta esencial para los
          usuarios de todo el mundo.
        </p>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
            duration={20}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden md:flex"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
