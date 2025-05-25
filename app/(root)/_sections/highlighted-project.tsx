import { IconOpenInNew } from '@/ui/atoms/icons/OpenInNew'
import { Typography } from '@/ui/atoms/Typography'
import FancySectionTitle from '@/ui/components/FancySectionTitle'
import { ImagesCarousel } from '@/ui/components/ImagesCarousel'
import { RegularSection } from '@/ui/components/RegularSection'
import { featuresList } from "@/public/projects/projects-list";
import Link from 'next/link'
const HighlightedProject = () => {
  return (
    <>
        <FancySectionTitle title="highlighted_prøject" />
        <RegularSection id="projects">
           <Typography variant='h1' className="max-w-[250px] lg:max-w-[400px] mb-20">Prøjects.</Typography>
        <div className="lg:w-[75%] max-w-[700px] mb-8 lg:mb-16">
          <Typography>
          A curated collection {" "}
            <span className="text-white">of projects highlighting my frontend skills</span> problem-solving ability{" "}
            <span className="text-white">and experience with modern frameworks.</span> Each project includes a quick overview  <span className="text-white">apartments</span>,{" "}
            <span className="text-white">with links to the code and live site.</span>
          </Typography>
        </div>
        <Typography variant="link" className="text-white">
          <Link href="https://github.com/Satyam750" target='blank'>
           Github Link
            <IconOpenInNew />
          </Link>
          <br />
          Scroll Left For See Project
        </Typography>
        </RegularSection>
        
        <ImagesCarousel items={featuresList} />
      
          <RegularSection>
           <Typography variant="h2" className="text-white mb-3">
          Role
        </Typography>
        <Typography className="mb-12">
          Frontend Developer &<br /> UX/UI Designer
        </Typography>

        <Typography variant="h2" className="text-white mb-4">
          Stack
        </Typography>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mb-16">
          <ul className="flex flex-col gap-2">
          <li>
              <Typography>✺ ReactJS</Typography>
            </li>
            <li>
              <Typography>✺ NextJS</Typography>
            </li>
            <li>
              <Typography>✺ Javascript</Typography>
            </li>
            <li>
              <Typography>✺ Typescript</Typography>
            </li>
            <li>
              <Typography>✺ Tailwind</Typography>
            </li>
            <li>
              <Typography>✺ RadixUI</Typography>
            </li>
            <li>
              <Typography>✺ ShadCn</Typography>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <Typography>✺ Framer</Typography>
            </li>
            <li>
              <Typography>✺ ClerkAuth</Typography>
            </li>
            <li>
              <Typography>✺ NextAuth</Typography>
            </li>
            <li>
              <Typography>✺ Zustand</Typography>
            </li>
            <li>
              <Typography>✺ DaisyUI</Typography>
            </li>
            <li>
              <Typography>✺ REST APIs</Typography>
            </li>
            <li>
              <Typography>✺ Version Control(Git)</Typography>
            </li>
          </ul>
        </div>
        </RegularSection>
    </>
  )
}

export default HighlightedProject