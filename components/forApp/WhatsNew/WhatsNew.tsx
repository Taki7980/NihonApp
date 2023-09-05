import Heading from '@/components/ReuseableComp/Heading'
import React from 'react'
import WhatsNewsContainer from './WhatsNewsContainer'

const WhatsNew = () => {
      return (
            <div >
                  <Heading title={`What's New`} center />
                  <WhatsNewsContainer/>
            </div>
      )
}

export default WhatsNew