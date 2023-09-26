'use client'

//libraries
import { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
// components
import ResumeContent from '@/components/ResumeContent'
import ExperienceContent from '@/components/ExperienceContent'
import ProjectsContent from '@/components/ProjectsContent'
import AboutMeContent from '@/components/AboutMeContent'
import ContactMeContent from '@/components/ContactMeContent'

export default function HomePage() {
  // ANIMATION IMPORT
  const Rings = '/Ring.mp4'

  // SMOOTH TRANSITIONS
  const [showMenu, setShowMenu] = useState(true)
  const [slideIn, setSlideIn] = useState(true)
  const [selectedContent, setSelectedContent] = useState<string | null>(null)
  const [reset, setReset] = useState(false)

  const transitionProps = useSpring({
    reset: reset,
    from: { opacity: 0, transform: 'translateY(100px)' },
    opacity: !showMenu ? 1 : 0,
    transform: !showMenu ? 'translateY(0)' : 'translateY(100px)',
    config: config.slow,

    onRest: () => setReset(false),
  })

  const goBack = () => {
    setShowMenu(true)
    setSelectedContent(null)
    setReset(true)
  }

  const changeContent = (content: string) => {
    setShowMenu(false)
    setSelectedContent(content)
    setReset(true)
  }

  return (
    <main className='flex h-screen flex-row items-center justify-between gap-12 p-10 text-sm overflow-hidden'>
      <div className='flex flex-col h-full w-[50%] justify-end'>
        {/* HEADER */}
        <div className='mb-8'>
          <div className='text-gray-300'>Maxim Abdulkhalikov</div>
          <div className='text-gray-600'>Personal Website</div>
          <div className='text-gray-600'>
            Working in Tech and Design from 2019
          </div>
        </div>

        {/* BUTTONS */}
        <animated.div className='w-full h-[100%] '>
          {showMenu && (
            <div className='flex flex-col gap-2'>
              <button
                className='text-gray-500 hover:text-white w-fit'
                onClick={() => {
                  setShowMenu(false)
                  changeContent('experience')
                }}
              >
                Experience
              </button>
              <button
                className='text-gray-500 hover:text-white w-fit'
                onClick={() => {
                  setShowMenu(false)
                  changeContent('resume')
                }}
              >
                Resume
              </button>
              <button
                className='text-gray-500 hover:text-white w-fit'
                onClick={() => {
                  setShowMenu(false)
                  changeContent('projects')
                }}
              >
                Projects
              </button>
              <button
                className='text-gray-500 hover:text-white w-fit'
                onClick={() => {
                  setShowMenu(false)
                  changeContent('aboutme')
                }}
              >
                About Me
              </button>
              <button
                className='text-gray-500 hover:text-white w-fit'
                onClick={() => {
                  setShowMenu(false)
                  changeContent('contactme')
                }}
              >
                Contact Me
              </button>
            </div>
          )}
          {/* CONTENT */}
          {selectedContent === 'experience' && (
            <ExperienceContent resumeProps={transitionProps} goBack={goBack} />
          )}
          {selectedContent === 'resume' && (
            <ResumeContent resumeProps={transitionProps} goBack={goBack} />
          )}
          {selectedContent === 'projects' && (
            <ProjectsContent resumeProps={transitionProps} goBack={goBack} />
          )}
          {selectedContent === 'aboutme' && (
            <AboutMeContent resumeProps={transitionProps} goBack={goBack} />
          )}
          {selectedContent === 'contactme' && (
            <ContactMeContent resumeProps={transitionProps} goBack={goBack} />
          )}
        </animated.div>

        {/* FOOTER */}
        {showMenu && (
          <div className='w-full flex flex-col'>
            <div className='text-gray-700'>
              Website made using NextJS/Typescipt/Tailwind
            </div>
            <div className='text-gray-700 lg:flex hidden'>
              Animation made in Blender
            </div>
          </div>
        )}
      </div>

      {/* VIDEO */}
      <div className='w-[50%] lg:flex hidden'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={Rings} type='video/mp4' />
        </video>
      </div>
    </main>
  )
}
