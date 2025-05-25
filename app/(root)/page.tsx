import React from 'react'
import Intro from './_sections/intro'
import FristThingsFirst from './_sections/first-things-first'
import HighlightedProject from './_sections/highlighted-project'
import Contact from './_sections/contact'
import JourneyModal from './_sections/journey_modal'

const page = async({searchParams}:{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const params = await searchParams
  return (
   <main>
    <div>
      <Intro/>
      <FristThingsFirst/>
    </div>
    <HighlightedProject/>
    <Contact/>
    {params?.modal === "journey" && <JourneyModal />}
   </main>
  )
}

export default page