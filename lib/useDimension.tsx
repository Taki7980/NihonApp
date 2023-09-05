'use client';

import { useRef, useEffect, useState } from "react";

const useDimension = () => {
      const [dimesion,setDimension] = useState({width:0,height:0});
      const updateDimension = () => {
            const {innerHeight,innerWidth} = window;
            setDimension({height:innerHeight,width:innerWidth})
      };
      useEffect(()=>{
            updateDimension();

            window.addEventListener("resize",updateDimension)
            return () =>{window.addEventListener("resize",updateDimension)}
      },[])
      return dimesion
}

export default useDimension