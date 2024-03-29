import { animated } from '@react-spring/web'
import Link from 'next/link'
// icons
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  resumeProps: any
  goBack: () => void
}

const ContactMeContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col lg:h-[65vh] md:h-[60vh] h-[75vh]'>
        <div className='pb-6'>
          <div className='text-xl font-semibold text-gray-300'>Contacts</div>
          <button
            onClick={goBack}
            className='text-gray-500 hover:text-white w-fit'
          >
            Go Back
          </button>
        </div>
        <div className='flex flex-col gap-2 overflow-y-auto'>
          <Link
            href='mailto:abdulhalikov0@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
          >
            <h1 className=''>Email</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/abdulkhalikov/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
          >
            <h1 className=''>LinkedIn</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
          <Link
            href='https://github.com/maxakadem1'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
          >
            <h1 className=''>GitHub</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
        </div>
      </div>
    </animated.div>
  )
}

export default ContactMeContent
