"use client";
import Image from 'next/image'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Key, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

import i1 from '@/images/img1.jpg'
import i2 from '@/images/img2.jpg'
import i3 from '@/images/img3.jpg'
import i4 from '@/images/img4.jpg'
import i5 from '@/images/img5.jpg'
import i6 from '@/images/img6.jpg'
import i7 from '@/images/img7.jpg'
import i8 from '@/images/img8.jpg'
import i9 from '@/images/img9.jpg'
import i10 from '@/images/img10.jpg'
import i11 from '@/images/img11.jpg'
import i12 from '@/images/img12.jpg'
import useDimension from '@/lib/useDimension';

const img1 = [
      i1,
      i2,
      i3,
      i4,
      i5,
      i6,
      i7,
      i8,
      i9,
      i10,
      i11,
      i12
]

export default function Dynamic() {
      const container = useRef(null)
      const {height} = useDimension()
      useEffect(() => {
            const lenis = new Lenis()
            function raf(time: any) {
                  lenis.raf(time)
                  requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
      }, [])

      const { scrollYProgress } = useScroll({
            target: container,
            offset: ['start end', 'end start']
      })
      const y = useTransform(scrollYProgress, [0, 1], [0, height*2])
      const y1 = useTransform(scrollYProgress, [0, 1], [0, height*3.3])
      const y2 = useTransform(scrollYProgress, [0, 1], [0, height*1.25])
      const y3 = useTransform(scrollYProgress, [0, 1], [0, height*3])
      return (
            <div className="main">
                  
                  <div ref={container} className="gallery bg-slate-800 h-[175vh] flex flex-row gap-[2vw] box-border overflow-hidden">
                        <Column images={[img1[0], img1[1], img1[2]]} y={y} />
                        <Column images={[img1[3], img1[4], img1[5]]} y={y1}/>
                        <Column images={[img1[6], img1[7], img1[8]]} y={y2}/>
                        <Column images={[img1[9], img1[10], img1[11]]} y={y3}/>
                  </div>
                  <div className="spacer h-[100vh]"></div>
            </div>
      )
}

const Column = ({ images, y = 0 }: any) => {
      return (
            <motion.div style={{ y }} className="column w-[25%] h-full flex flex-col gap-[2vw] min-w-[250px] relative">
                  {images.map((image: string | StaticImport, index: Key | null | undefined) => (
                        <div  className="imgContainer w-full h-full relative rounded-[1vw] overflow-hidden" key={index}>
                              <Image src={image} fill alt="image" style={{objectFit:'cover'}} />
                        </div>
                  ))}
            </motion.div>
      )
}