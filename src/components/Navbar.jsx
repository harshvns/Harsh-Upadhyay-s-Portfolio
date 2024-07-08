import React from 'react';
import Button from './Button';
import img1 from '../assets/Weather.png';
import Hero from '../assets/hero.png'
import chess from '../assets/chess.jpg'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Button clicked!');
    navigate('/menu');
  };
  return (
    <>
    <div className='p-30 items-center justify-center min-h-screen p-4'>
      <h1 className='font-custom font-extra-bold text-custom-size leading-tight px-20 pt-20 pb-10'>
        I HELP BUSINESSES STAND OUT
      </h1>
      <p className='pl-20 pb-20'>Crafting unforgettable visual identities and extraordinary websites.</p>
      <p className='pl-20 font-thin text-sm'>
        You can scroll if you want to, you can leave your friends behind <br />
        ’Cause your friends don't scroll and if they don't scroll <br />
        Well they're no friends of mine.
      </p>
      <Button onClick={handleButtonClick}/>
      {/* <Button onClick={handleButtonClick}></Button> */}
    </div>


    <div className="mb-20 mt-40 relative pt-10">
      <div className='flex flex-row'>
        <img className='pt-10' src={img1} style={{width: '850px', height: '480px'}} />
          <div className='pt-20 mt-20 '>
          <a href="https://weather-app-eta-navy-91.vercel.app/" target='blank'>
          <button class="w-40 h-40 bg-transparent rounded-full text-white text-xs flex justify-center items-center focus:outline-none border border-gray-300 hover:bg-blue-900 transition-all duration-500 transform hover:rotate-45">
          VIEW PROJECT
          </button>
          </a>
          </div>
          <div  className='absolute top-0 right-5 mt-40 pt-10'>  <span className="inline-block transform rotate-90 text-9xl font-black tracking-widest" style={{WebkitTextStroke: '1px grey',color: 'transparent'}}>01</span></div>
      </div>
    <div className="absolute top-0 left-0  pl-60 text-white" style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
     <p className="text-9xl font-extrabold" style={{WebkitTextStroke: '2px white',color: 'transparent'}}>CLIMA</p>
    </div>
    </div>



  <div className=" mt-60 relative pt-10">
    <div className='flex flex-row'>
      <img className='pt-10' src={Hero} style={{width: '850px', height: '480px'}} />
      <div className='pt-20 mt-20 '>
          <a href="https://educational-website-sigma.vercel.app/" target='blank'>
          <button class="w-40 h-40 bg-transparent rounded-full text-white text-xs flex justify-center items-center focus:outline-none border border-gray-300 hover:bg-green-400 transition-all duration-500 transform hover:rotate-45">
          VIEW PROJECT
          </button>
          </a>
          </div>
          <div  className='absolute top-0 right-5 mt-40 pt-10'>  <span className="inline-block transform rotate-90 text-9xl font-black tracking-widest" style={{WebkitTextStroke: '1px grey',color: 'transparent'}}>02</span></div>
    </div>
      <div className="absolute top-0 left-0 w-full pl-60 text-white" style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
      <p className="text-9xl font-extrabold" style={{WebkitTextStroke: '2px white',color: 'transparent'}}>EDUSITY</p>
      </div>
  </div>



  <div className="mb-10 mt-60 relative pt-10">
  <div className='flex flex-row'>    
    <img className='pt-10' src={chess} style={{width: '850px', height: '480px'}} />
    <div className='pt-20 mt-20 '>
          <a href="">
          <button class="w-40 h-40 bg-transparent rounded-full text-white text-xs flex justify-center items-center focus:outline-none border border-gray-300 hover:bg-orange-400 transition-all duration-500 transform hover:rotate-45">
          VIEW PROJECT
          </button>
          </a>
    </div>
          <div  className='absolute top-0 right-5 mt-40 pt-10'>  <span className="inline-block transform rotate-90 text-9xl font-black tracking-widest" style={{WebkitTextStroke: '1px grey',color: 'transparent'}}>03</span></div>
  </div>
    <div className="absolute top-0 left-0 w-full pl-60 text-white" style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
    <p className="text-9xl font-extrabold" style={{WebkitTextStroke: '2px white',color: 'transparent'}}>SATRANJ</p>
    </div>
  </div>



  <div className="flex flex-col relative pt-10 items-center justify-center min-h-screen">
    <button className='flex flex-col justify-center items-center' onClick={handleButtonClick}><div className='flex font-extrabold text-8xl' style={{WebkitTextStroke: '2px white',color: 'transparent'}}>HARSH</div>
    <div className='text-8xl font-extrabold' style={{WebkitTextStroke: '2px white',color: 'transparent'}}>UPADHYAY</div>
    </button>
  </div>

  </>
  );
};

export default Navbar;
