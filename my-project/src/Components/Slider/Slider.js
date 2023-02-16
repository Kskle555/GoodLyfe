import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function Slider() {
    return (
        <div className=''>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={true}
              
            >
                <div>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
                <div>
                    <img className='2xl:w-[1440px] 2xl:h-[691px]' src="https://i.hizliresim.com/cbaddr7.jpg" />
                </div>
            </Carousel>
            <h1 className='text-white text-center font-semibold text-2xl relative -mt-32 2xl:w-[570px] 2xl:text-center 2xl:font-semibold 2xl:text-7xl 2xl:relative 2xl:text-white 2xl:-mt-[550px] 2xl:ml-[650px]'>Welcome to GoodLyfe Gyms</h1>
            <button className='bg-pink rounded-full font-semibold relative text-white text-lg w-40 ml-36 mt-2 2xl:w-[237px] 2xl:h-[68px] 2xl:rounded-full 2xl:bg-pink 2xl:font-semibold 2xl:text-xl 2xl:relative 2xl:text-white 2xl:mt-[50px] 2xl:ml-[810px]'>See the benefits</button>
        </div>
    )

}

