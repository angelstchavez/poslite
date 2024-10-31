import Image from "next/image";
import logo from "@/assets/logosaas.png";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="inline-flex relative">
          <Image src={logo} alt={"Saas Logo"} height={40} width={40} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Acerca de</a>
          <a href="#">Funcionalidades</a>
          <a href="#">Clientes</a>
          <a href="#">Actualizaciones</a>
          <a href="#">Ayuda</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 text-[#BCBCBC]">
          <FaXTwitter size={24} />
          <FaInstagram size={24} />
          <FaLinkedin size={24} />
          <FaPinterest size={24} />
          <FaYoutube size={24} />
        </div>
        <p className="mt-6">
          &copy; 2024 POSLite. Reservados todos los derechos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
