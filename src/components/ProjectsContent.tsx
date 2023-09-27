import { useState, useEffect } from 'react'
import { animated, useSpring, useTrail, config } from '@react-spring/web'
import Link from 'next/link'
// icons
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  resumeProps: any
  goBack: () => void
}

const ProjectsContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col h-[75vh] '>
        <div className='pb-6'>
          <div className='text-xl font-semibold text-gray-300'>
            Personal and Freelance Projects
          </div>
          <button
            onClick={goBack}
            className='text-gray-500 hover:text-white w-fit'
          >
            Go Back
          </button>
        </div>

        <div className='flex flex-col gap-2 overflow-y-auto'>
          <Link
            href='/projects/musica'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit'
          >
            <h1 className=''>Musica</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
          <Link
            href='/projects/devclub'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit'
          >
            <h1 className=''>UofM .DevClub</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
          <Link
            href='/projects/musicAnimals'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit'
          >
            <h1 className=''>Music Animals</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
          <Link
            href='/projects/artwork'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit'
          >
            <h1 className=''>Personal Artwork</h1>
            <FiArrowUpRight className='ml-1' size={17} />
          </Link>
        </div>
      </div>
    </animated.div>
  )
}

export default ProjectsContent
