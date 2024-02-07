import hero from '../assets/illustration-hero.svg';
import music from '../assets/icon-music.svg';

export default function Summary() {
  return (
    <div className="grid grid-cols-1 rounded-3xl overflow-hidden max-w-sm ">
      <div className="">
        <img src={hero} alt="hero" />
      </div>
      <div className='bg-white flex flex-col items-center '>
        <h1 className='text-center font-black text-2xl pt-8 pb-5'>Order Summary</h1>
        <p className='text-center text-desaturatedBlue px-10 pb-5'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className='bg-veryPaleBlue  flex items-center w-10/12 p-4 justify-between rounded-2xl'>
          <img src={music} alt="music" />
          <div className='flex flex-col'>
            <h2 className=' font-bold'>Annual Plan </h2>
            <p className='text-desaturatedBlue'>$59.99/year</p>
          </div>
          <p className='text-brightBlue underline font-bold cursor-pointer'>Change</p>
        </div>
        <button className='bg-brightBlue drop-shadow-xl font-bold w-10/12 text-white p-5 mt-12 rounded-2xl cursor-pointer'>
          Proceed to Payment
        </button>
        <h3 className='text-center font-bold text-desaturatedBlue py-8 cursor-pointer'>Cancel Order</h3>
      </div>
    </div>
  )
}
