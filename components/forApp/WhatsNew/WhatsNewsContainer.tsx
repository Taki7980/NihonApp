"use client";
import Card from '@/components/ReuseableComp/Card'
import { motion,AnimatePresence } from 'framer-motion';
import { Data } from '@/lib/WhatsNew';

const WhatsNewsContainer = () => {
      return (
            <div className='container relative flex flex-col md:flex-row lg:flex-row items-center justify-between'>
                  {Data.map((d) => (
                        <Card key={d.imgSrc} className='hover:opacity-60' className1='px-1 md:px-4 lg:px-6' imgSrc={d.imgSrc} head={d.head} para={d.para} />
                  ))}
            </div>
      )
}

export default WhatsNewsContainer