'use client';

import {useEffect} from 'react'

import Recom from '@/components/forApp/Recomendation/Recom';
import WhatsNew from '@/components/forApp/WhatsNew/WhatsNew';
import Hero from '@/components/forApp/midSection/Hero'
import Lenis from '@studio-freight/lenis'
import Dynamic from '@/components/ReuseableComp/Dynamic';
// import ShuffleHero from '@/components/forApp/midSection/Hero2';
import dynamic from 'next/dynamic';

const ShuffleHero = dynamic(() => import('@/components/forApp/midSection/Hero2'))


export default function Home() {
      
      useEffect(() => {
            const lenis = new Lenis()
            function raf(time: any) {
                  lenis.raf(time)
                  requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
      }, [])
      return (
            
                  <div className='py-5 my-10 space-y-10 mx-0'>
                        <ShuffleHero/>
                        <Hero />
                        <Recom />
                        <WhatsNew/>
                        
                  </div>
            
      )
}


