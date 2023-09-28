//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'

export default function MusicAnimalsPage() {
  const images = [
    '/music-animals/pic1.png',
    '/music-animals/pic2.png',
    '/music-animals/pic3.png',
    '/music-animals/pic4.png',
    '/music-animals/pic5.png',
    '/music-animals/pic6.png',
    '/music-animals/pic7.png',
    '/music-animals/pic8.png',
    '/music-animals/pic9.png',
  ]

  return (
    <div className='flex flex-col md:overflow-hidden overflow-visible'>
      <Head>
        <title>Max A - Music Animals</title>
      </Head>

      <main className='flex md:h-screen h-auto w-screen md:flex-row flex-col md:items-center items-start justify-between md:gap-12 gap-2 md:p-10 p-4 text-sm bg-black'>
        <div className='flex flex-col h-full w-[50%] pb-4'>
          {/* HEADER */}
          <div className='mb-8 md:flex hidden flex-col'>
            <div className='text-gray-300'>Maxim Abdulkhalikov</div>
            <div className='text-gray-600'>Personal Website</div>
            <div className='text-gray-600'>
              Working in Tech and Design from 2022
            </div>
          </div>

          <div className='flex flex-col pb-6'>
            <div className='text-xl font-semibold text-gray-300'>
              Music Animals
            </div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>

          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full  md:w-full w-[90vw]'>
            <div className='text-gray-300 text-lg'>
              Music Animals was developed as a project to assist students during
              the making of the application for hosting songs.
            </div>
            <div className='text-gray-300 text-lg'>
              Design takes inspiration from young generation, taking modern
              agressive imagery and sharp contrast in color.
            </div>
            <div className='text-gray-300 text-lg'>
              Design utilizes imagery of scorpions and orange/black/white color
              pallete to accent the modern look targeted to young audience.
            </div>
          </div>
        </div>

        {/* ILLUSTRATIONS */}
        <div className='md:w-[50%] w-full flex flex-col md:h-[90vh] overflow-y-auto'>
          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=''
                className='w-full object-contain mb-4'
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
