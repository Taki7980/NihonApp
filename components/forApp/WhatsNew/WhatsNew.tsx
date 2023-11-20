import Heading from '@/components/ReuseableComp/Heading'
import React from 'react'
import WhatsNewsContainer from './WhatsNewsContainer'
import Container from '@/components/ReuseableComp/Container'

const WhatsNew = () => {
      return (
            <Container Class='mt-24 space-y-24'>
                  <Heading title={`What's New`} center />
                  <WhatsNewsContainer/>
            </Container>
      )
}

export default WhatsNew