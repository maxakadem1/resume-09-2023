import { animated } from '@react-spring/web'
import Link from 'next/link'
// icons
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  resumeProps: any
  goBack: () => void
}

const AboutMeContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col h-[75vh] '>
        <div className='pb-6'>
          <div className='text-xl font-semibold text-gray-300'>About Me</div>
          <button
            onClick={goBack}
            className='text-gray-500 hover:text-white w-fit'
          >
            Go Back
          </button>
        </div>

        <div className='flex flex-col gap-4 overflow-y-auto relative pr-4'>
          <div className='text-gray-300 text-lg'>
            Hello! My name is Max, and I am a software developer and UI/UX
            designer
          </div>
          <div className='text-gray-300 text-lg'>
            I was born in Kazahstan, but moved to Canada in 2018 to study
            Computer Science in University of Manitoba.
          </div>
          <div className='text-gray-300 text-lg'>
            I am a big fan of casually drawing in my spare time, and you can
            find my art{' '}
            <Link
              href='/projects/artwork'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-300'
            >
              here
              <FiArrowUpRight className='inline-block' />
            </Link>
            .
          </div>
          <div className='text-gray-300 text-lg'>
            I didn't like CS at first, but after I applied to be an organizer in
            UofMs programming club DevClub, I found my place in the world of
            software development.
          </div>
          <div className='text-gray-300 text-lg'>
            Now, after organizing universies biggest programming events and
            graduationg with CS degree, I am working in Web Development field
            and learning new skills all the time :)
          </div>
          <div className='text-gray-300 text-lg'>
            My latest hobby related to work is modelling and rendering
            interesting animations in Blender, one of which you currently are
            looking at right here on this website.
          </div>
          <div className='text-gray-300 text-lg'>
            I hope you enjoy looking at my work and experience here, and if you
            have any questions, or want to work with me (full time propositions
            or freelance related work), feel free to contact me, you can find my
            contacts on the Homepage, enjoy!
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default AboutMeContent
