"use client";
import { useMediaQuery } from '@/lib/MediaQuerry';
import { motion,AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';




const navMotion = {
      visible: {
            opacity: 1,

            transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.15,
            },
      },
      hidden: {
            opacity: 0,
      },
}
const itemMotion = {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 },
}

const NavLink = () => {
      const [toggled, setToggled] = useState(false);
      const Matches = useMediaQuery("(min-width:1280px)")
      return (
            
            <AnimatePresence>

                  {Matches && (
                        <nav className="flex gap-12">

                              <Link href={"/"}>
                                    <span>Home</span>
                              </Link>

                              <Link href={"/services"}>
                                    <span>Services</span>
                              </Link>

                              <Link href={"/contact"}>
                                    <span>Contact</span>
                              </Link>

                        </nav>
                  )}
                  {!Matches && (
                        <div onClick={() => { setToggled(prevToggle => !prevToggle) }} className="space-y-1.5 cursor-pointer z-50">
                              <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className={`block h-0.5 w-8 ${toggled ? `bg-white` : `bg-gray-600`}`}></motion.span>
                              <motion.span animate={{ width: toggled ? 0 : 24 }} className="block h-0.5 w-6 bg-gray-600"></motion.span>
                              <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 16 }} className={`block h-0.5 w-4 ${toggled ? `bg-white` : `bg-gray-600`}`}></motion.span>
                        </div>
                  )}
                  {toggled && !Matches && (
                        <motion.div
                              animate={{ opacity: 1, x: 0 }}
                              initial={{ opacity: 0, x: 25 }}
                              className="fixed flex bg-black text-white w-full h-screen bottom-0 left-0 z-40" >
                              <motion.div variants={navMotion} animate="visible" initial="hidden" className="self-center flex flex-col gap-10 mx-auto">
                                  
                                          <Link href={"/"} >Home</Link>
                                   
                                  
                                          <Link href={"/"} >Services</Link>
                                    
                                    
                                          <Link href={"/"} >Contact</Link>
                                          
                              </motion.div>
                        </motion.div>
                  )}
            </AnimatePresence>
            
      )
}

export default NavLink