//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'

export default function ArtworkPage() {
  const images = [
    '/art/pic1.png',
    '/art/pic2.png',
    '/art/pic3.png',
    '/art/pic4.png',
    '/art/pic5.png',
  ]

  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Max A - Art</title>
      </Head>

      <main className='flex h-screen w-screen md:flex-row flex-col md:items-center items-start justify-between md:gap-12 gap-2 md:p-10 p-4 text-sm overflow-hidden bg-black'>
        <div className='flex flex-col h-full w-[50%]'>
          {/* HEADER */}
          <div className='mb-8 md:flex hidden flex-col'>
            <div className='text-gray-300'>Maxim Abdulkhalikov</div>
            <div className='text-gray-600'>Personal Website</div>
            <div className='text-gray-600'>
              Working in Tech and Design from 2022
            </div>
          </div>

          <div className='flex flex-col pb-6'>
            <div className='text-xl font-semibold text-gray-300'>Art</div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>

          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full h-[40vh] md:w-full w-[90vw]'>
            <div className='text-gray-300 text-lg'>
              Here is the collection of my most recent work.
            </div>
            <div className='text-gray-300 text-lg'>
              I usually work on my tablet and use procreate for digital art.
            </div>
            <div className='text-gray-300 text-lg'>
              As you can already see, most of my inspiration comes from games
              that I play in my spare time :)
            </div>
          </div>
        </div>

        {/* ILLUSTRATIONS */}
        <div className='md:w-[50%] w-full flex flex-col md:h-[90vh] h-[75vh] overflow-y-auto'>
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
