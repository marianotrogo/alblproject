import { Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider font-bold">
        Contacto
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8">
        {/* Casa Central */}
        <article className="w-full lg:w-[30%] p-4">
          <div className="p-8 border border-neutral-700 rounded-xl shadow-md bg-neutral-100">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Casa Central</h3>
            <p className="text-neutral-600 mb-6">
              <span className="block">Av. Francisco de Aguirre 2250</span>
              <span className="block">San Miguel de Tucumán - T4001</span>
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="text-green-600 w-5 h-5" />
                <span className="ml-2 text-neutral-700">Teléfono: 0381 427-7768</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-blue-600 w-5 h-5" />
                <span className="ml-2 text-neutral-700">Lunes a Viernes 08:00 a 12:30</span>
              </li>
            </ul>
            <a
              href="mailto:contacto@antoniolabruna.com.ar"
              className="block w-full mt-8 py-3 text-center text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-200"
            >
              Contactar
            </a>
          </div>
        </article>

        {/* Sucursal */}
        <article className="w-full lg:w-[30%] p-4">
          <div className="p-8 border border-neutral-700 rounded-xl shadow-md bg-neutral-100">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Sucursal</h3>
            <p className="text-neutral-600 mb-6">
              <span className="block">Roldán 53</span>
              <span className="block">Salta - A4400</span>
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="text-green-600 w-5 h-5" />
                <span className="ml-2 text-neutral-700">Teléfono: 0387 431-3856</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-blue-600 w-5 h-5" />
                <span className="ml-2 text-neutral-700">Lunes a Viernes 08:00 a 12:30</span>
              </li>
            </ul>
            <a
              href="mailto:contacto@antoniolabruna.com.ar"
              className="block w-full mt-8 py-3 text-center text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-200"
            >
              Contactar
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;