//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'

const MusicaPage = () => {
  const images = [
    '/musica/pic1.png',
    '/musica/pic2.png',
    '/musica/pic3.png',
    '/musica/pic4.png',
    '/musica/pic5.png',
    '/musica/pic6.png',
    '/musica/pic7.png',
    '/musica/pic8.png',
    '/musica/pic9.png',
  ]

  return (
    <div className='flex flex-col md:overflow-hidden overflow-visible'>
      <Head>
        <title>Max A - Musica</title>
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
            <div className='text-xl font-semibold text-gray-300'>Musica</div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>

          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full  md:w-full w-[90vw]'>
            <div className='text-gray-300 text-lg'>
              Musica was created as a Freelance project to visualize the new,
              modern look for music appications.
            </div>
            <div className='text-gray-300 text-lg'>
              Form language is inspired by the latest trends in UI design, and
              centered on circle imagery. All shapers are round and smooth,
              which gives a comforting feel.
            </div>
            <div className='text-gray-300 text-lg'>
              Color pattern reflects the night, with black, white and yellow to
              reflect the moon and stars.
            </div>
            <div className='text-gray-300 text-lg'>
              Wave pattern was chosen for its simplicity good intergration in to
              the design.
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

export default MusicaPage
