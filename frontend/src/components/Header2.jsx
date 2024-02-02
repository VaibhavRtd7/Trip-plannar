// import React from 'react'
import video from "../assets/vid/bgvid.mp4"

function Header2() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative">
        <video
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"
        ></video>

        <div className="text-white text-center z-10">
          <h1 className="text-8xl font-bold transition duration-300 hover:text-yellow-500">
            FIRSTFLIGHT TRAVELS
          </h1>
          <p className="mt-4 text-2xl">
            Plan your trip with us and travel around the world with the most
            affordable packages!
          </p>
          <button className="mt-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold    rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Header2;





{
  /* <div className='relative header2 m-3 bg-cyan-100 h-[100vh]'>
  <h1> This is header2</h1>
  <video src="../src/assets/vid/bgvid.mp4" type="video/mp4" autoPlay muted loop className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"></video>
    <h1 className="z-40">FIRSTFLIGHT TRAVELS</h1>
        <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
        <a href="./register.html">Register Now!</a>
        
        </div>
<div>
          
<video src="../src/assets/vid/bgvid.mp4" type="video/mp4" autoPlay muted loop className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"></video>
<h1 className="z-40">FIRSTFLIGHT TRAVELS</h1>
<p>Plan your trip with us and travel around the world with the most affordable packages!</p>
<a href="./register.html">Register Now!</a>
</div> */
}

{/* <a
  href=""
  className="inline-block mt-4 px-8 py-3 bg-white  hover:bg-yellow-500 text-black rounded transition duration-300 text-xl "
>

  Register Now!
</a> */}