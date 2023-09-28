//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'

const MusicaPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Max A - Musica</title>
      </Head>

      <main className='flex h-screen w-scre en flex-row items-center justify-between gap-12 p-10 text-sm overflow-hidden bg-black'>
        <div className='flex flex-col h-full w-[60%]'>
          {/* HEADER */}
          <div className='mb-8'>
            <div className='text-gray-300'>Maxim Abdulkhalikov</div>
            <div className='text-gray-600'>Personal Website</div>
            <div className='text-gray-600'>
              Working in Tech and Design from 2022
            </div>
          </div>

          <div className='pb-6'>
            <div className='text-xl font-semibold text-gray-300'>Musica</div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>
        </div>

        {/* ILLUSTRATIONS */}
        <div className='w-[40%] lg:flex hidden'>
          illus here (scrollable down)
        </div>
      </main>
    </div>
  )
}

export default MusicaPage
