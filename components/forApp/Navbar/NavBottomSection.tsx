'use client';
import React from 'react'
import { NavDropdown } from './NavDropdownBtn'

import { Button } from "@/components/ui/button"

const NavBottomSection = () => {


      return (
            <div className='px-7'>

                  <div className="flex flex-col md:flex-row lg:flex-row mt-5 justify-between mx-auto rounded-lg shadow-md px-5">
                        <div className="firstBtn w-full h-full">
                              <NavDropdown title='Trends in Japan' item1='Top'
                                    item2='Fashion & Designs'
                                    item3='Tech & life'
                                    item5='Food & Travel'
                                    item4='Pop Culture'
                                    link1='/top'
                                    link2='/fashion&design'
                                    link3='/tech&life'
                                    link4='/popculture'
                                    link5='/food&travel'
                              />
                        </div>

                        <div className="secondBtn w-full h-full">
                              <Button variant="lunar" >Japan Video Topics</Button>
                        </div>
                        <div className="secondBtn w-full h-full">
                              <Button variant="lunar" >Niponica</Button>
                        </div>
                        <div className="secondBtn w-full h-full">
                              <Button variant="lunar" >Kids Web Japan</Button>
                        </div>
                        <div className="secondBtn  w-full h-full">
                              <Button variant="lunar" >Japan Facts Sheet</Button>
                        </div>
                  </div>

            </div>
      )
}

export default NavBottomSection