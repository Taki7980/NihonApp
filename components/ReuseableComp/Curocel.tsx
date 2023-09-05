'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { Typography } from "@material-tailwind/react";
import Link from 'next/link';



const Curocel = () => {
      const slides = [
            {
                  url: 'https://web-japan.org/top/img/mv_04.jpg',
                  head: "Style in Japan",
                  body: ` `,
                  link: '/about'
            },
            {
                  url: 'https://web-japan.org/top/img/mv_01.jpg',
                  head: "Beauty of Nature",
                  body: `Mount Fuji Japan's Sacred Mountain`,
                  link: '/about'

            },
            {
                  url: 'https://web-japan.org/top/img/mv_05.jpg',
                  head: "Exquisite Food",
                  body: `Ryokan In Tokyo - A Unique Japanese Experience
                  In The Capital Of Japan`,
                  link: '/about'

            },

            {
                  url: 'https://web-japan.org/top/img/mv_03.jpg',
                  head: "Power of Creativity",
                  body: `What’s CoolLearning the Fun of Science Through Manga`,
                  link: '/about'

            },

      ];

      const [currentIndex, setCurrentIndex] = useState(0);


      const prev = () => {
            prevSlide();
      }

      const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;

            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

            setCurrentIndex(newIndex);

      };

      const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1;

            const newIndex = isLastSlide ? 0 : currentIndex + 1;

            setCurrentIndex(newIndex);

      };



      return (
            <div className='h-[50vh] lg:h-[85vh] md:h-[70vh] w-full m-auto relative group rounded-lg'>
                  <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded-xl bg-center bg-cover duration-500'
                  >
                        <div className="absolute inset-0 flex flex-col h-full w-full items-center rounded-lg bg-black/50">
                              <div className="w-[70%] self-center mt-auto mb-10">
                                    <Typography
                                          variant="h1"
                                          color="white"
                                          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                    >
                                          {slides[currentIndex].head}
                                    </Typography>
                                    <Typography
                                          variant="lead"
                                          color="white"
                                          className="mb-12 opacity-80"
                                    >
                                          {slides[currentIndex].body}
                                    </Typography>
                                    <div className="flex gap-2">
                                          <Link href={slides[currentIndex].link} className='inline-flex items-center bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95'>
                                                Explore
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* Left Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  {/* Right Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
            </div>
      );
}

export default Curocel;