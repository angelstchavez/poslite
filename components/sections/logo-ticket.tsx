import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

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
        <div className="relative overflow-hidden">
          <div className="flex gap-14 animate-scroll mask-gradient">
            {logos.concat(logos).map((logo, index) => (
              <Image key={index} src={logo} alt="" className="w-auto h-8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicket;
