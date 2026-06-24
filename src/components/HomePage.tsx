'use client'

import { useState } from 'react'
import { animated, config, useSpring } from '@react-spring/web'
import Link from 'next/link'
import ResumeContent from '@/components/ResumeContent'
import ExperienceContent from '@/components/ExperienceContent'
import ProjectsContent from '@/components/ProjectsContent'
import AboutMeContent from '@/components/AboutMeContent'
import ContactMeContent from '@/components/ContactMeContent'
import { FiArrowUpRight } from 'react-icons/fi'
import { BiCircle, BiSolidCircle } from 'react-icons/bi'
import { TiPlus, TiPlusOutline } from 'react-icons/ti'

const videos = {
  Rings: {
    webm: '/glassDonuts.webm',
    mp4: '/glassDonuts.mp4',
  },
  Blocks: {
    webm: '/GlassBlocks2.webm',
    mp4: '/GlassBlocks2.mp4',
  },
}

type BackgroundVideoSource = (typeof videos)[keyof typeof videos]

function BackgroundVideo({
  selectedVideo,
  className,
}: {
  selectedVideo: BackgroundVideoSource
  className: string
}) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleCanPlay = (video: HTMLVideoElement) => {
    setVideoLoaded(true)
    video.play().catch(() => {
      // Muted autoplay can still be delayed by browser reload timing.
    })
  }

  return (
    <video
      autoPlay
      loop
      muted
      preload='auto'
      playsInline
      onCanPlay={(event) => handleCanPlay(event.currentTarget)}
      className={`${className} ${videoLoaded ? 'fade-in loaded' : 'fade-in'}`}
    >
      {/* Prefer WebM, with MP4 fallback for browsers that stall on reload. */}
      <source src={selectedVideo.webm} type='video/webm' />
      <source src={selectedVideo.mp4} type='video/mp4' />
    </video>
  )
}

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<BackgroundVideoSource>(
    videos.Blocks,
  )
  const [showMenu, setShowMenu] = useState(true)
  const [selectedContent, setSelectedContent] = useState<string | null>(null)
  const [reset, setReset] = useState(false)

  const transitionProps = useSpring({
    reset,
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
    <main className='flex h-screen flex-row items-center justify-between gap-12 overflow-hidden relative md:p-10 text-sm'>
      <div className='md:backdrop-blur-none backdrop-blur-md z-50 p-4 h-full w-full'>
        <div className='flex flex-col h-full md:w-[100%] w-full justify-end'>
          <div className='mb-8'>
            <div className='text-gray-300'>Maxim Abdulkhalikov</div>
            <div className='text-gray-600'>Personal Website</div>
            <div className='text-gray-600 pb-1'>
              Working in Tech and Design from 2022
            </div>
            <div className='text-white flex flex-row gap-2 items-center'>
              <button
                type='button'
                aria-label='Show block animation'
                onClick={() => setSelectedVideo(videos.Blocks)}
              >
                {selectedVideo === videos.Blocks ? (
                  <TiPlus style={{ fontSize: '20px' }} />
                ) : (
                  <TiPlusOutline style={{ fontSize: '20px' }} />
                )}
              </button>
              <button
                type='button'
                aria-label='Show ring animation'
                onClick={() => setSelectedVideo(videos.Rings)}
              >
                {selectedVideo === videos.Rings ? (
                  <BiSolidCircle style={{ fontSize: '15px' }} />
                ) : (
                  <BiCircle style={{ fontSize: '15px' }} />
                )}
              </button>
            </div>
          </div>

          <animated.div className='w-full h-[100%]'>
            {showMenu && (
              <div className='flex flex-col gap-2'>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                  onClick={() => changeContent('experience')}
                >
                  Experience
                </button>
                <Link
                  href='/resume'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center justify-center text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                >
                  <h1>Resume</h1>
                  <FiArrowUpRight className='ml-1' size={17} />
                </Link>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                  onClick={() => changeContent('projects')}
                >
                  Projects
                </button>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                  onClick={() => changeContent('aboutme')}
                >
                  About Me
                </button>
                <button
                  className='text-gray-500 hover:text-white w-fit transform transition-transform duration-300 ease-in-out hover:translate-x-3'
                  onClick={() => changeContent('contactme')}
                >
                  Contact Me
                </button>
              </div>
            )}

            {/* Panels are mounted on demand so each section keeps simple state. */}
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

          {showMenu && (
            <div className='w-full flex flex-col md:text-gray-700 text-gray-400 z-50'>
              <div>Website made using Next/TypeScript/Tailwind</div>
              <div className='lg:flex'>Animation made in Blender</div>
            </div>
          )}
        </div>
      </div>

      <div className='md:flex md:w-[80%] hidden md:flex-col md:items-center md:justify-center'>
        <BackgroundVideo
          key={`desktop-${selectedVideo.webm}`}
          selectedVideo={selectedVideo}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='md:hidden absolute w-[200%] top-[35%] right-[-120%]'>
        <BackgroundVideo
          key={`mobile-${selectedVideo.webm}`}
          selectedVideo={selectedVideo}
          className='w-full h-full object-cover'
        />
      </div>
    </main>
  )
}
