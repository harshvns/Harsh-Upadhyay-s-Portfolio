import React from 'react'
import Button from './Button'
import img1 from '../assets/Weather.png'
import img2 from '../assets/hero.png'
import img3 from '../assets/chess.jpg'

const Work = () => {
  return (
    <div>
        <Button/>
    <div>
      <div className='pl-10 pt-10 text-9xl font-black'>I SOMETIMES DO GREAT WORK</div>
      <div className='pl-10 text-9xl font-black' style={{WebkitTextStroke: '2px white',color: 'transparent'}}>OTHERS TIME I DO MEDIOCORE</div>
    </div>
    <div className='grid grid-cols-2 gap-10'>
        <div className='pl-20 pt-20'><img src={img1} style={{width: '450px', height: '300px'}} alt="" /></div>
        <div className='pr-20 pt-40'><img src={img2}  style={{width: '450px', height: '300px'}} alt="" /></div>
        <div className='pl-20 pt-20'><img src={img3} style={{width: '450px', height: '300px'}} alt="" /></div>
        <div>Box4</div>
        <div>Box5</div>
        <div>Box6</div>
        <div>Box7</div>
        <div>Box8</div>
    </div>
    </div>
  )
}

export default Work
