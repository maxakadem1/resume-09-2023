//libraries
import Head from 'next/head'
import '../../app/globals.css'
import Link from 'next/link'

export default function PacketvisPage() {
  const images = [
    '/packet_vis/pic1.png',
    '/packet_vis/pic2.png',
    '/packet_vis/pic3.png',
    '/packet_vis/pic4.png',
  ]

  return (
    <div className='flex flex-col md:overflow-hidden overflow-visible'>
      <Head>
        <title>Max A - PacketVis</title>
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
            <div className='text-xl font-semibold text-gray-300'>PacketVis</div>
            <Link href='/' className='text-gray-500 hover:text-white w-fit'>
              Go Back
            </Link>
          </div>

          <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full  md:w-full w-[90vw]'>
            <div className='text-gray-300 text-lg'>
              PacketVis was developed as a research project during my education
              in University of Manitoba.
            </div>
            <div className='text-gray-300 text-lg'>
              The application is used to get information from the application
              called Wireshark that collects information on data packets sent
              over the network. Our application takes that data and visualizes
              it on a 3D map of the world, showcasing the data packets flying in
              and out of the users IP address.
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
