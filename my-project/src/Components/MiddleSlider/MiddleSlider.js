import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function MiddleSlider() {
    return (
        <div className=''>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}   
                emulateTouch={true}
                
            >
                <div className='mt-5 2xl:mt-10'>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div className='mt-5 2xl:mt-10'>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div className='mt-5 2xl:mt-10'>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div className='mt-5 2xl:mt-10'>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div className='mt-5 2xl:mt-10'>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
            </Carousel>
            <h1 className='-mt-44 font-bold ml-10 text-3xl  text-white relative 2xl:w-[910px] 2xl:text-center 2xl:font-semibold 2xl:text-7xl 2xl:relative 2xl:text-white 2xl:-mt-[420px] 2xl:ml-[550px]'>Become more than you are</h1>
            <p className='mt-4 relative font-bold text-white 2xl:w-[910px] 2xl:text-center 2xl:font-semibold 2xl:text-2xl 2xl:relative 2xl:text-white 2xl:mt-[45px] 2xl:ml-[550px]'>Staying active is great fun and keeps you healthy. Check out how you can join in.</p>
            <button className='mt-1 ml-36 text-white h-9 w-44 bg-pink rounded-full relative 2xl:w-[237px] 2xl:h-[68px] 2xl:rounded-full 2xl:bg-pink 2xl:font-semibold 2xl:text-xl 2xl:relative 2xl:text-white 2xl:mt-[50px] 2xl:ml-[860px]'>Let's do it!</button>

        </div>
    )

}

