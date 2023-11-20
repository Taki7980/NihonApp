"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import ItemCard from "./Car";
import ItemCardReverce from "./CarReverce";
import { useMediaQuery } from '@/lib/MediaQuerry';
import Container from "./Container";

const itemVariants: Variants = {
      open: {
            width: "100%",
            opacity: 1,
            x: 25,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


interface OpenCardProps {
      BtnName: string,
      catagory1: string,
      catagory2: string,
      catagory22: string,
      catagory3: string,
      name1: string,
      name2: string,
      name22: string,
      name3: string,
      description1: string,
      description2: string,
      description22: string,
      description3: string,
      img1: string,
      img2: string,
      img22: string,
      img3: string,
      img1mob: string,
      img2mob: string,
      img22mob: string,
      img3mob: string,

}

export default function OpenCard({ catagory1, catagory2, catagory22, catagory3, name1, name2, name22, name3, description1, description2, description22, description3, img1, img2, img22, img3, img1mob, img2mob, img22mob, img3mob, BtnName }: OpenCardProps) {
      const Matches = useMediaQuery("(min-width:1280px)")
      const [isOpen, setIsOpen] = useState(true);

      return (
            <Container>
                  <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        className="menu"
                  >
                        <motion.button
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setIsOpen(!isOpen)}
                              className="bg-transparent font-semibold py-3 px-14 border-2 border-gray-400 rounded"
                        >
                              {BtnName}
                        </motion.button>
                        <motion.div className={`${isOpen ? "object-none" : "hidden"}`}
                              variants={{
                                    open: {
                                          clipPath: "inset(0% 0% 0% 0% round 10px)",
                                          transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                          }
                                    },
                                    closed: {
                                          clipPath: "inset(10% 50% 90% 50% round 10px)",
                                          transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.3
                                          }
                                    }
                              }}
                              style={{ pointerEvents: isOpen ? "auto" : "none" }}
                        >
                              <motion.div variants={itemVariants}>
                                    <motion.div animate={{ opacity: 1, x: 0 }}
                                          initial={{ opacity: 0, x: 25 }} className="space-y-5">
                                          <ItemCard category={catagory1} name={name1} description={description1} imageDesktop={img1} imageMobile={img1mob} />

                                          {Matches && (
                                                <ItemCardReverce category={catagory2} name={name2} description={description2} imageDesktop={img2} imageMobile={img2mob} />
                                          )}
                                          {!Matches && (
                                                <ItemCard category={catagory22} name={name22} description={description22} imageDesktop={img22} imageMobile={img22mob} />
                                          )}

                                          <ItemCard category={catagory3} name={name3} description={description3} imageDesktop={img3} imageMobile={img3mob} />
                                    </motion.div>
                              </motion.div>
                        </motion.div>
                  </motion.div>
            </Container>
      )
}