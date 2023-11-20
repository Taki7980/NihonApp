"use client";
import Card from '@/components/ReuseableComp/Card'
import Container from '@/components/ReuseableComp/Container';

import { Data } from '@/lib/WhatsNew';

const WhatsNewsContainer = () => {
      return (
            <Container Class='relative grid grid-cols-2 grid-rows-2 items-center justify-between'>
                  {Data.map((d) => (
                        <Card key={d.imgSrc} className='hover:opacity-60' className1='px-1 md:px-4 lg:px-6' imgSrc={d.imgSrc} head={d.head} para={d.para} />
                  ))}
            </Container>
      )
}

export default WhatsNewsContainer