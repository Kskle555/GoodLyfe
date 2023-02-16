import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMessage,faPhone,faLocation} from'@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <div className='bg-DarkBlue h-[471px] flex'>
        <div className='w-72 pt-[96px] ml-[165px]'>
            <span className='text-3xl text-white'>Good</span><span className='text-3xl text-pink'>Lyfe</span>
            <br/>
            <p className='text-white leading-8'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
            <img className='mt-7 -ml-3' src='https://cdn.discordapp.com/attachments/324498986213834753/1075474640203419669/image.png'></img>
        </div>
        <div className='pt-[96px] ml-[175px] w-[132px]'>
        <ul className='text-white leading-10 text-2xl'>Quick Links</ul>
        <li className='text-white list-none leading-10'>Classes</li>
        <li className='text-white list-none leading-10'>Timetable</li>
        <li className='text-white list-none leading-10'>Clubs</li>
        <li className='text-white list-none leading-10'>Nutrition</li>
        <li className='text-white list-none leading-10'>Free Trial</li>
        </div>
        <div className='pt-[96px] ml-[285px]'>
        <ul className='text-white leading-10 text-2xl'>Guides</ul>
        <li className='text-white list-none leading-10'>Weight Loss</li>
        <li className='text-white list-none leading-10'>Strength Gain</li>
        <li className='text-white list-none leading-10'>Crossfit</li>
        <li className='text-white list-none leading-10'>Washbaord Abs</li>
        <li className='text-white list-none leading-10'>Dieting</li>
        </div>
        <div className='pt-[96px] ml-[300px]'>
        <ul className='text-white leading-10 text-2xl'>Reach us</ul>
        <FontAwesomeIcon className='text-white -mb-9 -ml-6 text-lg'  icon={faMessage}></FontAwesomeIcon><li className='text-white list-none leading-10'>admin@goodlyfe.co</li>
        <FontAwesomeIcon className='text-white -ml-6 -mb-9  text-lg'  icon={faPhone}></FontAwesomeIcon><li className='text-white list-none leading-10'>+88 98765 43210</li>
        <FontAwesomeIcon className='text-white -ml-6 -mb-9  text-lg'  icon={faLocation}></FontAwesomeIcon><li className='text-white list-none leading-10'>90210 Beverly Hills California USA</li>
       </div>
        <div>
        <p className='text-white mt-[420px] -ml-[1550px]'>© 2023 GoodLyfe. All rights reserved</p>
        
        </div>
        </div>
   
  )
}
