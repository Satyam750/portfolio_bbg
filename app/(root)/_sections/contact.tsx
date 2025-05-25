import { Typography } from '@/ui/atoms/Typography'
import GlitchTitle from '@/ui/components/GlitchTitle'
import { RegularSection } from '@/ui/components/RegularSection'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
     <div id="contact" className="pt-40 text-right flex justify-end">
        <GlitchTitle title="make_cøntact" />
      </div>
      <RegularSection lineColor="to-black">
        <Typography variant="h6" className="mb-2 lg:mb-8">
          SEND ME AN EMAIL TO
        </Typography>
        <Typography className="!text-white mb-8 lg:mb-20 !text-2xl lg:!text-6xl">
         satyamthakur05@gamil.com
        </Typography>

        <Typography variant="h6" className="mb-2 lg:mb-6">
          ALSO FIND ME ON
        </Typography>
        <div className="flex gap-2 mb-2">
          <Link href="https://www.linkedin.com/in/samarthgurjar/" target="_blank">
            <Typography className="!text-white underline hover:bg-lk-turquoise">
              LinkedIn
            </Typography>
          </Link>
          <Typography className="!text-white">{" / "}</Typography>
          <Link href="https://github.com/Satyam750" target="_blank">
            <Typography className="!text-white underline hover:bg-lk-turquoise">
              Github
            </Typography>
          </Link>
          <Typography className="!text-white">{" / "}</Typography>
          <Link href="https://www.instagram.com/s.r_thakur._/" target="_blank">
            <Typography className="!text-white underline hover:bg-lk-turquoise">
            Instagram
            </Typography>
          </Link>
        </div>
      </RegularSection>
    </>

  )
}

export default Contact