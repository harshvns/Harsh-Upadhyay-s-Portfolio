import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import img from "../assets/Portfolio_img.png"

const Menu = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Button clicked!');
    navigate('/');
  };
  const aboutButtonClick=()=>{
    console.log('About Button clicked');
    navigate('/about');
  }
  const workButtonClick=()=>{
    console.log("work button clicked");
    navigate('/work');
  }
  return (
    <>
    <Button onClick={handleButtonClick}/>
    <div className="flex flex-row items-center justify-center min-h-screen">
      <div className=''><img src={img} style={{width:'320px',height:'500px'}} alt="" /></div>
      
      <div className='ml-0 pl-60'>
        <div className='text-8xl font-black pb-20 pt-10'><button onClick={workButtonClick}>WORK</button></div>
        <div className='text-8xl font-black pb-10'><button onClick={aboutButtonClick}>ABOUT</button></div>
        <div className="flex flex-row">
          <div>
          <div className='pt-20 pr-10 mt-5'>harshpravinupadhyay@gmail.com</div>
          <div className='pt-5 pr-20 font-size:1.25rem'>+91 8787073217</div>
          </div>
          <div className='flex flex-col items-end'>
          <div className='pt-20 pl-40'><a href="https://github.com/harshvns" target='blank'><button><BsGithub style={{ fontSize: '1.5rem' }} /></button></a></div>
          <div className='pt-10'><a href="https://www.linkedin.com/in/harsh-upadhyay-46b99a247/" target="_blank"><button><FaLinkedinIn style={{ fontSize: '1.5rem' }} /></button></a></div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Menu
