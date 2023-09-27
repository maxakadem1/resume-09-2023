import { useState, useEffect } from 'react'
import { animated, useSpring, useTrail, config } from '@react-spring/web'
import Link from 'next/link'
// icons
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  resumeProps: any
  goBack: () => void
}

const ExperienceContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col h-[75vh] '>
        <div className='pb-6'>
          <div className='text-xl font-semibold text-gray-300'>Experience</div>
          <button
            onClick={goBack}
            className='text-gray-500 hover:text-white w-fit'
          >
            Go Back
          </button>
        </div>

        <div className='flex flex-col gap-20 overflow-y-auto p-4'>
          {/* E1 */}
          <div>
            <div className='text-gray-300 pb-2 text-lg'>
              React Software Developer
            </div>
            <Link
              href='https://outreachgenius.ai/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 italic hover:text-white w-fit'
            >
              ACE Marketing <FiArrowUpRight className='inline-block' />
            </Link>
            <div className='flex flex-col gap-3 text-gray-300 pt-2'>
              <div>
                • Led the design process for all components, pages, and
                interactions on all the company's websites, ensuring that
                everything adhered to a consistent and intuitive user
                experience.
              </div>
              <div>
                • Chose the best technologies suitable for the websites'
                frontend development and used them to implement components and
                pages, enhancing overall functionality and responsiveness.
              </div>
              <div>
                • Successfully transformed and refactored a legacy Vue codebase
                into a modern, maintainable, and performant React TypeScript
                codebase for a Chrome extension.
              </div>
              <div>
                • Implemented Material-UI library to enhance the design and
                styling of the Chrome extension, creating a visually appealing
                and user-friendly interface.
              </div>
              <div>
                • Proactively researched and implemented optimizations, such as
                performance enhancements and code refactoring, resulting in
                improved loading times and enhanced user experience for the
                Chrome extension.
              </div>
            </div>
          </div>

          {/* E2 */}
          <div>
            <div className='text-gray-300 pb-2 text-lg'>
              Full Stack React Developer (Co-op Alternative)
            </div>
            <Link
              href='https://github.com/University-of-Manitoba-Computer-Science/trackr'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 italic hover:text-white w-fit'
            >
              University of Manitoba <FiArrowUpRight className='inline-block' />
            </Link>
            <div className='flex flex-col gap-3 text-gray-300 pt-2'>
              <div>
                • Working on open-source, university owned proprietary
                technology for data visualization using React, MaterialUI and
                SQL.
              </div>
              <div>
                • Technology is used for data visualization on devices such as
                Raspberry Pis and Arduinos.
              </div>
            </div>
          </div>

          {/* E3 */}
          <div>
            <div className='text-gray-300 pb-2 text-lg'>UI/UX Designer</div>
            <div className='text-gray-500 italic w-fit'>
              Freelance (Self employed) - See Projects from the Homepage{' '}
            </div>
            <div className='flex flex-col gap-3 text-gray-300 pt-2'>
              <div>
                • Created personalized illustrations for over 20+ clients.
                Created music album covers, personalized gifts and other client
                work.
              </div>
              <div>
                • Developed personalized style for each illustration depending
                on client needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default ExperienceContent
