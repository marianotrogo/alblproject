import images from '../assets/images';

const Marcas = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Marcas</h2>
      <div 
        className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-md bg-white p-2"
          >
            <img 
              src={src} 
              alt={`Marca ${index + 1}`} 
              className="object-contain w-full h-28 lg:h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marcas;