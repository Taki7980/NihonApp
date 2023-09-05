"use client";
import dynamic from 'next/dynamic';
import React from 'react'
const ShuffleHero = dynamic(() => import('@/components/forApp/midSection/Hero2'))

const ShuffleH = () => {
  return (
    <ShuffleHero/>
  )
}

export default ShuffleH