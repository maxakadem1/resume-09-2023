import type { Metadata } from 'next'
import ProjectDetailPage from '@/components/ProjectDetailPage'

export const metadata: Metadata = {
  title: 'Max A - Musica',
}

export default function MusicaPage() {
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
    <ProjectDetailPage title='Musica' images={images}>
      <div>
        Musica was created as a freelance project to visualize a new, modern
        look for music applications.
      </div>
      <div>
        The form language is inspired by the latest trends in UI design and
        centered on circular imagery. All shapes are round and smooth, which
        gives the app a comfortable feel.
      </div>
      <div>
        The color pattern reflects the night, with black, white, and yellow
        representing the moon and stars.
      </div>
      <div>
        The wave pattern was chosen for its simplicity and clean integration
        into the design.
      </div>
    </ProjectDetailPage>
  )
}
