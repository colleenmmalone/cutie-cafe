
import splash from '../assets/splash.jpg';

export function Hero() {
  return (
    <div className="w-full m-0 p-0">

      {/* position absolute, z=1,  */}
      <div className='hero-splash h-[calc(100vh-95px)] sm:h-[calc(100vh-64px)] w-screen p-0 m-0 bg-cover bg-center overflow-scroll'>
        {/* <img src={splash} alt="splash showing person pouring coffee"
          className='h-full w-full absolute img-cover' /> */}
        <div className='h-[200%] flex items-center'>
          {/* <div className='border-1 rounded-lg border-white flex'> */}
          <h1 className='text-white text-4xl text-center mt-auto mb-[50vh] mx-auto border-1 rounded-lg py-2 px-6 bg-[#3079]'>Where caffeine meets cute!</h1>
          {/* </div> */}
        </div>
      </div>

    </div>
  );
}
