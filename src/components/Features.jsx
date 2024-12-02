import image1 from '../assets/images/direccion/1.png';
import image2 from '../assets/images/direccion/2.png';
import image3 from '../assets/images/direccion/3.png';

const Features = () => {
  return (
    <section className="relative mt-20 border-b border-neutral-800 pb-20">
      {/* Header */}
      <div className="text-center">
        <span className="bg-gray-300 text-black-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Nosotros
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide font-bold">
          Dirección General
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20 gap-12">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img 
            src={image1} 
            alt="Oficina de Dirección General - Imagen 1" 
            className="h-40 w-auto rounded-lg shadow-md"
          />
          <img 
            src={image2} 
            alt="Depósito Principal - Imagen 2" 
            className="h-40 w-auto rounded-lg shadow-md"
          />
          <img 
            src={image3} 
            alt="Centro de Distribución - Imagen 3" 
            className="h-40 w-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <article className="max-w-3xl text-neutral-500 text-justify px-4 lg:px-0">
          <p className="mb-6 leading-relaxed">
            Contamos con una importante infraestructura, compuesta por oficinas y depósitos de más de 
            <strong> 10.000 m²</strong> cubiertos, en condiciones de brindar un servicio de excelente calidad.
          </p>
          <p className="mb-6 leading-relaxed">
            A principios de 2013 nos trasladamos a un nuevo Centro de Distribución con más de 
            <strong> 5.000 m²</strong> de depósito y una totalidad de 
            <strong> 7.000 m²</strong> de superficie.
          </p>
          <p className="mb-6 leading-relaxed">
            Con una cartera de más de 
            <strong> 5.000 empresas minoristas</strong> y clientes activos, logramos poner al alcance de la gente 
            los más de <strong>16.000 artículos</strong> que componen nuestro variado stock.
          </p>
          <p className="leading-relaxed">
            La capacitación permanente y el excelente clima laboral que 
            <strong> ANTONIO F. LA BRUNA S.R.L.</strong> brinda a sus colaboradores logra que las más de 
            <strong> 100 personas</strong> que componen nuestro equipo tomen como propia la pasión y vocación 
            de servicio, sumando la experiencia que sólo empresas líderes pueden transmitir.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;