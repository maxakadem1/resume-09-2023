import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ProjectDetailPageProps {
  title: string
  images: string[]
  children: ReactNode
}

export default function ProjectDetailPage({
  title,
  images,
  children,
}: ProjectDetailPageProps) {
  return (
    <main className='flex md:h-screen h-auto w-screen md:flex-row flex-col md:items-center items-start justify-between md:gap-12 gap-2 md:p-10 p-4 text-sm bg-black'>
      <div className='flex flex-col h-full md:w-[50%] w-full pb-4'>
        <div className='mb-8 md:flex hidden flex-col'>
          <div className='text-gray-300'>Maxim Abdulkhalikov</div>
          <div className='text-gray-600'>Personal Website</div>
          <div className='text-gray-600'>
            Working in Tech and Design from 2022
          </div>
        </div>

        <div className='flex flex-col pb-6'>
          <div className='text-xl font-semibold text-gray-300'>{title}</div>
          <Link href='/' className='text-gray-500 hover:text-white w-fit'>
            Go Back
          </Link>
        </div>

        <div className='flex flex-col gap-4 overflow-y-auto relative pr-4 md:h-full md:w-full w-[90vw] text-gray-300 text-lg'>
          {children}
        </div>
      </div>

      <div className='md:w-[50%] w-full flex flex-col md:h-[90vh] overflow-y-auto'>
        <div className='flex flex-col gap-4 overflow-y-auto relative pr-4'>
          {/* Images are portfolio screenshots from the public directory. */}
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              width={1400}
              height={1000}
              className='w-full h-auto object-contain mb-4'
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
