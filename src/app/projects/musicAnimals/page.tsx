import type { Metadata } from 'next'
import ProjectDetailPage from '@/components/ProjectDetailPage'

export const metadata: Metadata = {
  title: 'Max A - Music Animals',
}

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
    <ProjectDetailPage title='Music Animals' images={images}>
      <div>
        Music Animals was developed as a project to assist students during the
        making of an application for hosting songs.
      </div>
      <div>
        The design takes inspiration from a younger audience, using modern,
        aggressive imagery and sharp color contrast.
      </div>
      <div>
        The design uses scorpion imagery and an orange, black, and white color
        palette to accent the modern look.
      </div>
    </ProjectDetailPage>
  )
}
