import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faBars, faXmark} from'@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);
  return (
    <div className={ navbar ?'bg-pink md:bg-Grey xl:bg-pink 2xl:h-[101px] 2xl:flex 2xl:items-center  2xl:bg-pink  2xl:w-auto' : 'bg-pink md:bg-Grey xl:bg-pink 2xl:h-[101px] 2xl:flex 2xl:items-center  2xl:bg-pink  2xl:w-auto'}>
       <h1 className='font-serif text-2xl  text-white'>GoodLyfe</h1>
            <div onClick={()=>setNavbar(!navbar)}>
            <FontAwesomeIcon  className={ navbar ? 'absolute text-white text-3xl ml-[410px] -mt-8 2xl:hidden' : 'hidden '} icon={faBars} />
            <FontAwesomeIcon className={navbar ? 'hidden' :' absolute text-white text-3xl ml-[410px] -mt-8 2xl:hidden'} icon={faXmark} />
            </div>
        <ul className={ navbar ? 'hidden 2xl:flex' :'2xl:flex'}>
            <li className='text-white 2xl:pl-[150px]'>Classes</li>
            <li className='text-white 2xl:pl-[150px] '>Timetable</li>
            <li className='text-white 2xl:pl-[150px] '>Clubs</li>
            <li className='text-white 2xl:pl-[150px]'>Nutrition</li>
            <li className='text-white 2xl:pl-[150px]'>Free Trial</li>
            <li className='text-white 2xl:pl-[150px]'>Search</li><FontAwesomeIcon className='-mt-5 ml-12 absolute 2xl:mt-1 2xl:ml-1 2xl:relative text-white' icon={faSearch}></FontAwesomeIcon>
            <button className='bg-white w-20 rounded-2xl text-center  2xl:w-[166px]  2xl:ml-[150px] 2xl:h-[30px] 2xl:text-center 2xl:bg-white 2xl:rounded-2xl'>Login</button>
        </ul>
    </div>
  )
}


