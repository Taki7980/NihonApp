



import Image from 'next/image';
import dynamic from 'next/dynamic'
import logo from '../../../public/logo.png'
import { DarkBtn } from '@/components/DarkBtn';
import Container from '@/components/ReuseableComp/Container';



const NavLink = dynamic(() => import('./NavLink'), { ssr: false })
const NavBottomSection = dynamic(() => import('./NavBottomSection'), { ssr: false })


const Navbar = () => {
      return (
            <Container Class='space-y-5 mx-auto'>
                  <div className='px-5 relative flex justify-between items-center pt-9 pb-4'>
                        <div className="lg:flex md:flex gap-4">
                              <Image src={logo} className='rounded-lg' alt='icon' style={{ width: '18vw', height: 'auto' }} />
                              <div className="scroll-m-20 lg:text-3xl md:text-2xl text-base font-semibold tracking-tight transition-colors first:mt-0 self-center">
                                    Ministry of Foreign Affairs of Japan
                              </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                              <NavLink />
                              <DarkBtn />
                        </div>
                  </div>

                  <NavBottomSection />
            </Container>
      )
}

export default Navbar