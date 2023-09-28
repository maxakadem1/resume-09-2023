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
import { BiSquareRounded } from 'react-icons/bi'
import { BiSolidSquareRounded } from 'react-icons/bi'
import { BiCircle } from 'react-icons/bi'
import { BiSolidCircle } from 'react-icons/bi'
import { TiPlusOutline } from 'react-icons/ti'
import { TiPlus } from 'react-icons/ti'

export default function HomePage() {
  // ANIMATION IMPORT
  const Rings = '/glassDonuts.mp4'
  const Blocks = '/GlassBlocks2.mp4'
  const videos = { Rings, Blocks }
  const videoRef = useRef<HTMLVideoElement>(null)
  const [selectedVideo, setSelectedVideo] = useState<string>(videos.Blocks)
  const [isLoading, setIsLoading] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const changeVideo = (videoPath: string) => {
    setSelectedVideo(videoPath)
    setIsLoading(true)
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.load()
      videoElement.play()
    }
    console.log('changing video')
    console.log(videoPath)
  }

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const handleCanPlay = () => setIsLoading(false)
      videoElement.addEventListener('canplaythrough', handleCanPlay)
      return () =>
        videoElement.removeEventListener('canplaythrough', handleCanPlay)
    }
  }, [selectedVideo])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.load()
      videoElement.play()
    }
  }, [selectedVideo])

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
    <main className='flex h-screen flex-row items-center justify-between gap-12 md:p-10 text-sm overflow-hidden relative '>
      <div className='md:backdrop-blur-none backdrop-blur-md z-50 p-4 h-full w-full'>
        <div className='flex flex-col h-full md:w-[100%] w-full justify-end'>
          {/* HEADER */}
          <div className='mb-8'>
            <div className='text-gray-300'>Maxim Abdulkhalikov</div>
            <div className='text-gray-600'>Personal Website</div>
            <div className='text-gray-600 pb-1'>
              Working in Tech and Design from 2022
            </div>
            {/* buttons to change the video */}
            <div className='text-white flex flex-row gap-2 items-center'>
              {selectedVideo === videos.Blocks ? (
                <TiPlus
                  style={{ fontSize: '20px' }}
                  onClick={() => changeVideo(videos.Rings)}
                />
              ) : (
                <TiPlusOutline
                  style={{ fontSize: '20px' }}
                  onClick={() => changeVideo(videos.Blocks)}
                />
              )}
              {selectedVideo === videos.Rings ? (
                <BiSolidCircle
                  style={{ fontSize: '15px' }}
                  onClick={() => changeVideo(videos.Blocks)}
                />
              ) : (
                <BiCircle
                  style={{ fontSize: '15px' }}
                  onClick={() => changeVideo(videos.Rings)}
                />
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <animated.div className='w-full h-[100%] '>
            {showMenu && (
              <div className='flex flex-col gap-2'>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
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
                  className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                >
                  <h1 className=''>Resume</h1>
                  <FiArrowUpRight className='ml-1' size={17} />
                </Link>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                  onClick={() => {
                    setShowMenu(false)
                    changeContent('projects')
                  }}
                >
                  Projects
                </button>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                  onClick={() => {
                    setShowMenu(false)
                    changeContent('aboutme')
                  }}
                >
                  About Me
                </button>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
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
              <ExperienceContent
                resumeProps={transitionProps}
                goBack={goBack}
              />
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
            <div className='w-full flex flex-col md:text-gray-700 text-gray-400 z-50'>
              <div className=''>Website made using Next/Typescipt/Tailwind</div>
              <div className='lg:flex'>Animation made in Blender</div>
            </div>
          )}
        </div>
      </div>

      {/* VIDEO */}
      <div className='md:flex md:w-[80%] hidden md:flex-col md:items-center md:justify-center'>
        {isLoading ? (
          <div className='w-full text-gray-500 flex justify-center'>
            {' '}
            loading..
          </div>
        ) : (
          <video
            key={selectedVideo}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover ${
              videoLoaded ? 'fade-in loaded' : 'fade-in'
            }`}
          >
            <source src={selectedVideo} type='video/mp4' />
          </video>
        )}
      </div>

      {/* VIDEO MOBILE */}
      <div className='md:hidden absolute w-[200%] top-[35%] right-[-120%]'>
        <video
          key={selectedVideo}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={selectedVideo} type='video/mp4' />
        </video>
      </div>
    </main>
  )
}
