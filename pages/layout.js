import { Inter } from "next/font/google";
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);


  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
      <div className='lg:hidden'>
        <div className=' bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative'>
          <div className='icon flex items-center gap-x-2' onClick={(e) => setIntro(!intro)}>
            <span className='icon border-2 text-Blue border-Blue p-1 text-sm rounded-lg'>
              Intro 
            </span>
          </div>
          
        </div>
      </div>
      <div className='flex relative h-full justify-between gap-x-2'>
        {/* left most side */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col  lg:relative ${
            intro ? 'flex absolute' : 'hidden'
          }`}>
     
           <Intro  isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* overlay */}
        {intro && <div onClick={(e) => setIntro(false)} className='fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40'></div>}

        {/* middle of screen */}
        <div className='w-full h-auto lg:w-10/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>

       
      </div>
    </div>
  );
}


import { NAME, DESIGNATION, SOCIAL_LINKS, TECH_STACK, CONTACTS } from '../constants/constants';
import Image from 'next/image';
import Link from 'next/link';

import Aditya from "../public/Images/aditya.jpg"
const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
        <Image className='w-20 h-20 rounded-full' src={Aditya} alt='profile picture' />
        <div className='flex flex-col items-center justify-center'>
          <span className='font-bold break-normal text-Blue'>{NAME}</span>
          <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION}</span>
        </div>
      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
      <div className='flex flex-col space-y-1 pt-6'>
          <div className='flex items-center justify-between'>
            <span className='text-Snow text-xs font-bold'>Location</span>
            <span className='text-xs text-gray-600'>Tallahassee, FL</span>
          </div>
    </div>
    {/*  */}
    <div className='flex flex-col space-y-1 pt-6 '>
      <div className='flex flex-col gap-y-4'>
        <span className='text-Snow text-xs font-bold'>Tools</span>
        <div className='flex flex-wrap gap-2'>
          {TECH_STACK.map((item, index) => (
            <span className='py-2 px-3 text-xs text-Snow bg-EveningBlack border-s rounded-full border-Blue'>{item}</span>
          ))}
        </div>
      </div>
    </div>

    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>

        <span className='text-xs text-gray-600' mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Phone</span>
        <span className='text-xs text-gray-600'>{CONTACTS.PHONE}</span>
      </div>
    </div>

    <>
      <Link href='/ADITYA_MADHUSUDHAN_resume.pdf' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4 text-center'>
        <span className='text-Snow text-center'>Resume</span>
        <span><FaDownload/> </span>
      </Link>
    </>

        {/*  */}
       
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
      <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className=''>
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};


