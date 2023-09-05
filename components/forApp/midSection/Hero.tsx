'use client';
import Card from '@/components/ReuseableComp/Card'

import Curocel from '@/components/ReuseableComp/Curocel';

import React from 'react'

const Hero = () => {
      
      return (
            <div className='h-full max-w-[78rem] mx-auto flex flex-col justify-evenly md:flex-row lg:flex-row px-7'>
                  <div className="infoBox w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[50%] flex self-center">
                        <Card className1='px-1 md:px-4 lg:px-6' imgSrc="https://as1.ftcdn.net/v2/jpg/01/74/41/00/1000_F_174410011_VM18HOdE13l58DKcA1SyDXd3GaiT3qFP.jpg" head='Gateway for anything about Japan' para='Web Japan provides information about Japan including facts, fun and new trends, traditional and pop culture, science and technology, food, travel, and life style.' readMoreLink='/about'/>
                  </div>
                  <div className="Carobox w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[50%]">
                        <Curocel/>
                  </div>
            </div>
      )
}

export default Hero