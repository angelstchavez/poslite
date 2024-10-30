import Image from "next/image";
import Logo from "@/assets/logo.png";
import { VscArrowRight } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-primary text-primary-foreground text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Racionalice su flujo de trabajo y aumente su productividad
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Empieza gratis</p>
          <VscArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="POSLite Logo" height={40} width={40} />
            <IoMenu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-primary/60 items-center">
              <a href="#">Acerca de</a>
              <a href="#">Funcionalidades</a>
              <a href="#">Clientes</a>
              <a href="#">Actualizaciones</a>
              <a href="#">Ayuda</a>
              <Button className="tracking-tight">Obtener gratis</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
