import local from '../assets/images/back.png'
const HeroSecction = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Representamos Marcas Lideres
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Distribuimos en el mercado Nacional e Internacional</p>
      <div className="flex mt-10 justify-center">
        <img src={local} alt="" className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' />
      </div>
    </div>
  )
}

export default HeroSecction