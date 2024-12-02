import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-neutral-900 text-neutral-200 py-10">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
    {/* Redes Sociales */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Seguinos:</h3>
      <ul className="space-y-3">
        <li>
          <a
            className="flex items-center space-x-3 hover:text-green-500 transition duration-200"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-3 hover:text-blue-500 transition duration-200"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-3 hover:text-blue-700 transition duration-200"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>

    {/* Enlaces Útiles */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Enlaces Útiles:</h3>
      <ul className="space-y-3">
        <li>
          <a
            href="#about"
            className="hover:text-green-500 transition duration-200"
          >
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-green-500 transition duration-200"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-green-500 transition duration-200"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>

    {/* Información de Contacto */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Información de Contacto:</h3>
      <ul className="space-y-3">
        <li>
          <span className="block">Teléfono: 0381 427-7768</span>
        </li>
        <li>
          <span className="block">Email: contacto@antoniolabruna.com.ar</span>
        </li>
        <li>
          <span className="block">
            Dirección: Av. Francisco de Aguirre 2250, Tucumán
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="mt-10 text-center border-t border-neutral-700 pt-6 text-sm px-4">
    &copy; {new Date().getFullYear()} Antonio F. La Bruna SRL. Todos los derechos reservados.
  </div>
</footer>
  );
};

export default Footer;