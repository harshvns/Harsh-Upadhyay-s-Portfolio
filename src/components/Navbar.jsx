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
      <p className='pl-20 pb-20'>By creating badass visual identities and awesome websites.</p>
      <p className='pl-20 font-thin text-sm'>
        You can scroll if you want to, you can leave your friends behind <br />
        ’Cause your friends don't scroll and if they don't scroll <br />
        Well they're no friends of mine.
      </p>
      <Button onClick={handleButtonClick}/>
      {/* <Button onClick={handleButtonClick}></Button> */}
    </div>
    <div className="mb-20 mt-40 relative pt-10">
    <img src={img1} style={{width: '850px', height: '430px'}} />
    <div className="absolute top-0 left-0 w-full pl-80 text-white" style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
      <p className="text-4xl   py--20 font-extrabold">OPOINT</p>
  </div>
  </div>
  <div className=" mt-60 relative pt-10">
      <img src={Hero} style={{width: '850px', height: '430px'}} />
      <div className="absolute top-0 left-0 w-full pl-80 text-white" style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
        <p className="text-4xl   py--20 font-extrabold">SPYSCAPE</p>
      </div>
  </div>
  <div className="mb-10 mt-60 relative pt-10">
    <img src={chess} style={{width: '850px', height: '430px'}} />
    <div className="absolute top-0 left-0 w-full pl-80 text-white" style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
        <p className="text-4xl   py--20 font-extrabold">SATRANJ</p>
      </div>
  </div>
  <div className="flex flex-col relative pt-10 items-center justify-center min-h-screen">
    <div className='flex font-extrabold text-8xl' style={{WebkitTextStroke: '2px white',color: 'transparent'}}>HARSH</div>
    <div className='text-8xl font-extrabold' style={{WebkitTextStroke: '2px white',color: 'transparent'}}>UPADHYAY</div>
  </div>

  </>
  );
};

export default Navbar;
