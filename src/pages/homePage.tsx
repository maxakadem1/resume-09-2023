'use client'

//libraries
import { useState, useEffect, useRef } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import Link from 'next/link'
import '../app/globals.css'
// components
import ResumeContent from '@/components/ResumeContent'
import ExperienceContent from '@/components/ExperienceContent'
import ProjectsContent from '@/components/ProjectsContent'
import AboutMeContent from '@/components/AboutMeContent'
import ContactMeContent from '@/components/ContactMeContent'
// icons
import { FiArrowUpRight } from 'react-icons/fi'

export default function HomePage() {
  // ANIMATION IMPORT
  const Rings = '/Ring.mp4'
  const Blocks = '/GlassBlocks2.mp4'

  const videoRef = useRef<HTMLVideoElement>(null)

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
    <main className='flex h-screen flex-row items-center justify-between gap-12 md:p-10 p-4 text-sm overflow-hidden relative'>
      <div className='flex flex-col h-full w-[60%] justify-end z-50'>
        {/* HEADER */}
        <div className='mb-8'>
          <div className='text-gray-300'>Maxim Abdulkhalikov</div>
          <div className='text-gray-600'>Personal Website</div>
          <div className='text-gray-600'>
            Working in Tech and Design from 2022
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
              <Link
                href='/resume'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit'
              >
                <h1 className=''>Resume</h1>
                <FiArrowUpRight className='ml-1' size={17} />
              </Link>
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
          <div className='w-full flex flex-col md:text-gray-700 text-white z-50'>
            <div className=''>Website made using NextJS/Typescipt/Tailwind</div>
            <div className='lg:flex hidden'>Animation made in Blender</div>
          </div>
        )}
      </div>

      {/* VIDEO */}
      <div className='md:flex md:w-[80%] hidden'>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={Blocks} type='video/mp4' />
        </video>
      </div>
      {/* VIDEO MOBILE */}
      <div className='md:hidden absolute w-[200%] bottom-[-350px] right-[-500px]'>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={Blocks} type='video/mp4' />
        </video>
      </div>
    </main>
  )
}
