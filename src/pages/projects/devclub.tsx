//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'

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
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Max A - DevClub</title>
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
            <div className='text-xl font-semibold text-gray-300'>DevClub</div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>

          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full h-[40vh] md:w-full w-[90vw]'>
            <div className='text-gray-300 text-lg'>---</div>
            <div className='text-gray-300 text-lg'>---</div>
            <div className='text-gray-300 text-lg'>---</div>
            <div className='text-gray-300 text-lg'>---</div>
          </div>
        </div>

        {/* ILLUSTRATIONS */}
        <div className='md:w-[50%] w-full flex flex-col md:h-[90vh] h-[100vh] overflow-y-auto'>
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
