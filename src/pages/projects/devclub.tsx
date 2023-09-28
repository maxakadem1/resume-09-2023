//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'
// icons
import { FiArrowUpRight } from 'react-icons/fi'

export default function DevclubPage() {
  const images = [
    '/devclub/pic1.png',
    '/devclub/pic2.png',
    '/devclub/pic3.png',
    '/devclub/pic4.png',
    '/devclub/pic5.png',
    '/devclub/pic6.png',
  ]
  return (
    <div className='flex flex-col md:overflow-hidden overflow-visible'>
      <Head>
        <title>Max A - DevClub</title>
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
            <div className='text-xl font-semibold text-gray-300'>DevClub</div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>

          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full  md:w-full w-[90vw]'>
            <div className='text-gray-300 text-lg'>
              DevClub is the name of the programmers club in University of
              Manitoba that I joined as an executive
            </div>
            <div className='text-gray-300 text-lg'>
              As part of improving the club I, (Promotions Executive) and
              another programmer and the club president at the time -{' '}
              <Link
                href='https://www.linkedin.com/in/manzik/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:text-blue-300'
              >
                Mohsen Yousefian
                <FiArrowUpRight className='inline-block' />
              </Link>{' '}
              designed and developed a new and modern website for the club.
            </div>
            <div className='text-gray-300 text-lg'>
              This website is currently used to showcase club activities and
              award winners, you can check the original website{' '}
              <Link
                href='https://devclub.ca/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:text-blue-300'
              >
                here
                <FiArrowUpRight className='inline-block' />
              </Link>
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
