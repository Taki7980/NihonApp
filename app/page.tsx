'use client';

import {useEffect} from 'react'

import Recom from '@/components/forApp/Recomendation/Recom';
import WhatsNew from '@/components/forApp/WhatsNew/WhatsNew';
import Hero from '@/components/forApp/midSection/Hero'
import Lenis from '@studio-freight/lenis'
import ShuffleH from '@/components/forApp/midSection/ShuffleH';



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
                        <ShuffleH/>
                        <Hero />
                        <Recom />
                        <WhatsNew/>
                        
                  </div>
            
      )
}


export const dynamic = 'force-dynamic'