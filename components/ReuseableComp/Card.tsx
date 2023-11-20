'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CardProps {
      imgSrc: string;
      head: string;
      para: string;
      readMoreLink?: string;
      className?: string;
      className1?: string;
}



const Card: React.FC<CardProps> = ({ imgSrc, head, para, readMoreLink,className1, className }) => {
      return (

            <div className={cn('w-auto rounded-lg', className1)}>
                  <div className='w-auto relative'>
                        <Image src={imgSrc} alt='helo' className={cn('rounded-lg',className)} height={100} width={100} style={{objectFit:'cover'}} loading='lazy' layout='responsive' />
                  </div>
                  <div className="py-5 w-auto h-full">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head}</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{para}</p>
                        {readMoreLink && (
                              <Link href={readMoreLink} className="inline-flex items-center bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                              </Link>
                        )}
                  </div>
            </div>

      )
}

export default Card