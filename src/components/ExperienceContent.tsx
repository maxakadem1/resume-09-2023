import { useState, useEffect } from 'react'
import { animated, useSpring, useTrail, config } from '@react-spring/web'

interface Props {
  resumeProps: any
  goBack: () => void
}

const ExperienceContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col h-[75vh]'>
        <div className='pb-6'>
          <div className='text-xl text-gray-300'>Experience</div>
          <button
            onClick={goBack}
            className='text-gray-500 hover:text-white w-fit'
          >
            Go Back
          </button>
        </div>

        <div>
          <div className='text-gray-300'>React Software Developer</div>
          <div className='text-gray-500 py-2'>ACE Marketing</div>
          <div className='flex flex-col gap-3 text-gray-300'>
            <div>
              Led the design process for all components, pages, and interactions
              on all the company's websites, ensuring that everything adhered to
              a consistent and intuitive user experience.
            </div>
            <div>
              Chose the best technologies suitable for the websites' frontend
              development and used them to implement components and pages,
              enhancing overall functionality and responsiveness.
            </div>
            <div>
              Conducted data visualization to display user information and
              interface details, providing insightful analysis and enhancing
              user interaction.
            </div>
            <div>
              Successfully transformed and refactored a legacy Vue codebase into
              a modern, maintainable, and performant React TypeScript codebase
              for a Chrome extension.
            </div>
            <div>
              Implemented Material-UI library to enhance the design and styling
              of the Chrome extension, creating a visually appealing and
              user-friendly interface.
            </div>
            <div>
              Integrated Firebase into the project, leveraging its powerful
              real-time database and authentication capabilities for the Chrome
              extension
            </div>
            <div>
              Proactively researched and implemented optimizations, such as
              performance enhancements and code refactoring, resulting in
              improved loading times and enhanced user experience for the Chrome
              extension.
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default ExperienceContent
