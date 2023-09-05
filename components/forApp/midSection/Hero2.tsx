/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import { Key, useEffect, useRef, useState } from "react";


const ShuffleHero = () => {
      return (
            <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[78rem] mx-auto">
                  <div className="h-full w-full justify-start">
                        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                              Explore Japan Even More
                        </span>
                        <h3 className="text-4xl md:text-6xl font-semibold">
                              A country rich of culture with astounding visuals
                        </h3>
                        <p className="text-base md:text-lg text-slate-600 my-4 md:my-6">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
                              error repellat voluptatibus ad.
                        </p>
                        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                              Explore
                        </button>
                  </div>
                  <div className="h-full w-full">
                        <ShuffleGrid />
                  </div>
            </section>
      );
};

const shuffle = (array: any) => {
      let currentIndex = array.length,
            randomIndex: number;

      while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                  array[randomIndex],
                  array[currentIndex],
            ];
      }

      return array;
};

const squareData = [
      {

            src: "https://web-japan.org/trends/img/230905.jpg",
      },
      {

            src: "https://web-japan.org/trends/img/tec202302_aerospace-technology02.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/200317.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/19102201.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230622.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230601.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230511.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230330.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230309.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230216.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230126.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/230105.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/221222.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/221208.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/221124.jpg",
      },
      {

            src: "https://web-japan.org/jvt/img/221027.jpg",
      },
];

const generateSquares = () => {
      return shuffle(squareData).map((sq: { src: string; }) => (
            <motion.div
                  key={sq.src}
                  layout
                  transition={{ duration: 1.5, type: "spring" }}
                  className="w-full h-full rounded-2xl"
                  style={{
                        backgroundImage: `url(${sq.src})`,
                        backgroundSize: "cover",
                        width: "100%",
                        height: "100%",
                  }}
            ></motion.div>
      ));
};

const ShuffleGrid = () => {
      const timeoutRef = useRef<null>(null);
      const [squares, setSquares] = useState(generateSquares());

      useEffect(() => {
            shuffleSquares();
            return () => clearTimeout(timeoutRef.current);
      }, []);

      const shuffleSquares = () => {
            setSquares(generateSquares());

            timeoutRef.current = setTimeout(shuffleSquares, 3000);
      };

      return (
            <div className="grid grid-cols-4 grid-rows-4 h-[450px] w-full gap-1">
                  {squares.map((sq: any) => sq)}
            </div>
      );
};

export default ShuffleHero;