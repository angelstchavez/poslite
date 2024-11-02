import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa6";

const pricingTiers = [
  {
    title: "Gratis",
    monthlyPrice: 0,
    buttonText: "Comienza gratis",
    popular: false,
    inverse: false,
    features: [
      "Hasta 5 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "2GB de almacenamiento",
      "Integraciones",
      "Soporte básico",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Regístrate ahora",
    popular: true,
    inverse: true,
    features: [
      "Hasta 50 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "50GB de almacenamiento",
      "Integraciones",
      "Soporte prioritario",
      "Soporte avanzado",
      "Soporte para exportación",
    ],
  },
  {
    title: "Negocios",
    monthlyPrice: 19,
    buttonText: "Regístrate ahora",
    popular: false,
    inverse: false,
    features: [
      "Hasta 5 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "200GB de almacenamiento",
      "Integraciones",
      "Administrador de cuenta dedicado",
      "Campos personalizados",
      "Analíticas avanzadas",
      "Capacidades de exportación",
      "Acceso a API",
      "Características avanzadas de seguridad",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          Precios
        </h2>
        <p className="max-w-[540px] mx-auto text-center text-[22px] leading-[30px] tracking-tight mt-5">
          Gratis para siempre, actualiza para obtener tareas ilimitadas, mejor
          seguridad y funciones exclusivas.
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={twMerge(
                "bg-white p-10 border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs",
                tier.inverse && "bg-black text-white border-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-black/50">
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${tier.monthlyPrice}
                </span>
                <span className="tracking-tight font-bold marker:text-black/50">
                  /mes
                </span>
              </div>
              <Button
                className={twMerge(
                  "w-full mt-[30px]",
                  tier.inverse && "bg-white text-black"
                )}
              >
                {tier.buttonText}
              </Button>

              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-4">
                    <FaCheck className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
