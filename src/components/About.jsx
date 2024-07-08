import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import sketch from '../assets/Portffolio_img.jpg'

const About = () => {
    const navigate = useNavigate();
    const handleButtonClick=()=>{
        navigate('/menu');
    }
  return (
    <div>
        <Button onClick={handleButtonClick}/>
      <div className='flex flex-row justify-center items-center'>
        <div className='pl-10'>
        <div className='pt-20 font-custom font-extra-bold text-custom-size leading-tight px-20 pt-20 pb-10 tracking-wide'>NICE TO MEET YOU</div>
        <div className='px-20 text-lg leading-8 tracking-wider'style={{width:'700px'}}>Hello, I'm Harsh, dedicated to leveraging my expertise in branding and web development to drive your business forward. With a deep understanding of the pivotal role a strong brand and effective website play in business success, I am committed to delivering impactful solutions. My portfolio showcases my proficiency in crafting compelling branding strategies and developing user-centric websites that meet business objectives.

        </div>
        </div>
        <div className='pt-20 pr-40'><img src={sketch} alt="" /></div>
      </div>

      <div className='flex flex-row justify-center items-center'>
        <div className='pt-20 font-bold text-7xl   pt-20 pb-10 tracking-wide'><h2>WHO I AM</h2><h2 style={{ WebkitTextStroke: '1px white', color:'transparent' }}>I KNOW THE BEST WORDS</h2></div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="pl-40 pr-10 p-4 "><h1 className='text-lg font-semibold'>HARD WORK
            <h2 className='text-sm font-light' style={{color:'grey'}}>Nothing worth having comes easy. That’s why I welcome the struggle and no matter what I try to accomplish, I always give 100%. Unless I give 80%. But what’s 20% really?</h2></h1></div>
        <div class=" p-4 pr-40"><h1 className='text-lg font-semibold'>HEALTHY RELATIONSHIPS</h1><h2 className='text-sm font-light' style={{color:'grey'}}>The relationship with my clients is one the most important things to me. I have nothing but respect for a client who is willing to trust me with the success of his/her business. Except for you David. You suck.</h2></div>
        <div class="pl-40 pr-10 p-4 "><h1 className='text-lg font-semibold'>ORIGINALITY
        <h2 className='text-sm font-light' style={{color:'grey'}}>When it comes to obtaining and keeping your customers attention, originality is key. Thinking outside the box is important. Trust me. You don’t want to be another flavourless boring vanilla ice cream. You almost want to be too original. Looking at you Häagen-Dazs Vodka Key Lime Pie flavoured ice cream.</h2></h1></div>
        <div class=" p-4 pr-40"><h1 className='text-lg font-semibold'>GOOD TIMES</h1><h2 className='text-sm font-light' style={{color:'grey'}}>Work is great yes. But life isn’t all about work. I keep all my collaborations fun, light and enjoyable by trying to be a decent human being and treat others with respect. I know, right? It’s like I cracked the code.</h2></div>
        <div class="pl-40 pr-10 p-4 "><h1 className='text-lg font-semibold'>AUTHENTICITY
        <h2 className='text-sm font-light' style={{color:'grey'}}>Takin’ chances while we dancin’ in the party fo’ sho’. Slip my hoe a forty-fo’ and she got in the back do’. Bitches lookin’ at me strange but you know I don’t care. Step up in this motherfucker just a-swangin my hair.</h2></h1></div>        
        <div class=" p-4 pr-40"><h1 className='text-lg font-semibold'>QUINTESSENTIAL“ISM”</h1><h2 className='text-sm font-light' style={{color:'grey'}}>How awesome is this word honestly? It belongs here because I continually deliver quality product and services so yeah. Quintessential“ism” stays.</h2></div>
    </div>

    </div>
  )
}

export default About
