import { cn } from '@/lib/utils'
import React from 'react'

interface Props{
      Class?: string,
      children: React.ReactNode
}

const Container:React.FC<Props> = ({Class,children}) => {
  return (
    <div className={cn('max-w-[2520px] mx-auto xl:px-10 md:px-10 px-2',Class)} >
      {children}
    </div>
  )
}

export default Container