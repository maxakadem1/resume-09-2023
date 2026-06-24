import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectDetailPage from '@/components/ProjectDetailPage'
import { FiArrowUpRight } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Max A - DevClub',
}

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
    <ProjectDetailPage title='DevClub' images={images}>
      <div>
        DevClub is the name of the programmers club at the University of
        Manitoba that I joined as an executive.
      </div>
      <div>
        As part of improving the club, I worked with another programmer and the
        club president at the time,{' '}
        <Link
          href='https://www.linkedin.com/in/manzik/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-300'
        >
          Mohsen Yousefian
          <FiArrowUpRight className='inline-block' />
        </Link>
        , to design and develop a new website for the club.
      </div>
      <div>
        This website is currently used to showcase club activities and award
        winners. You can check the original website{' '}
        <Link
          href='https://devclub.ca/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-300'
        >
          here
          <FiArrowUpRight className='inline-block' />
        </Link>
        .
      </div>
    </ProjectDetailPage>
  )
}
