'use client';

import Heading from '@/components/ReuseableComp/Heading';
import dynamic from 'next/dynamic';
import { Items1, Items2, Items3 } from '@/lib/Recomendation';



const Recom = () => {
      const OpenCard = dynamic(() => import('@/components/ReuseableComp/OpenCard'), { ssr: false })
      

      return (
            <div className='max-w-[78rem] mx-auto h-full space-y-6'>
                  <Heading title='Recommended' center />
                  <div className="flex flex-col space-y-4 items-center justify-evenly">
                        
                              <OpenCard BtnName={Items1.BtnName} name1={Items1.name1} name2={Items1.name2} name22={Items1.name22} name3={Items1.name3} description1={Items1.description1} description2={Items1.description2} description22={Items1.description22} description3={Items1.description3} catagory1={Items1.catagory1} catagory2={Items1.catagory2} catagory22={Items1.catagory22} catagory3={Items1.catagory3} img1={Items1.img1} img2={Items1.img2} img22={Items1.img22} img3={Items1.img3} img1mob={Items1.img1mob} img2mob={Items1.img2mob} img22mob={Items1.img22mob} img3mob={Items1.img3mob} />
                        

                        
                              <OpenCard BtnName={Items2.BtnName} name1={Items2.name1} name2={Items2.name2} name22={Items2.name22} name3={Items2.name3} description1={Items2.description1} description2={Items2.description2} description22={Items2.description22} description3={Items2.description3} catagory1={Items2.catagory1} catagory2={Items2.catagory2} catagory22={Items2.catagory22} catagory3={Items2.catagory3} img1={Items2.img1} img2={Items2.img2} img22={Items2.img22} img3={Items2.img3} img1mob={Items2.img1mob} img2mob={Items2.img2mob} img22mob={Items2.img22mob} img3mob={Items2.img3mob} />
                        

                        
                              <OpenCard BtnName={Items3.BtnName} name1={Items3.name1} name2={Items3.name2} name22={Items3.name22} name3={Items3.name3} description1={Items3.description1} description2={Items3.description2} description22={Items3.description22} description3={Items3.description3} catagory1={Items3.catagory1} catagory2={Items3.catagory2} catagory22={Items3.catagory22} catagory3={Items3.catagory3} img1={Items3.img1} img2={Items3.img2} img22={Items3.img22} img3={Items3.img3} img1mob={Items3.img1mob} img2mob={Items3.img2mob} img22mob={Items3.img22mob} img3mob={Items3.img3mob} />
                        
                  </div>

            </div>
      )
}

export default Recom