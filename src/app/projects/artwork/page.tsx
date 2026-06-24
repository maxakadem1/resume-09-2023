import type { Metadata } from 'next'
import ProjectDetailPage from '@/components/ProjectDetailPage'

export const metadata: Metadata = {
  title: 'Max A - Art',
}

export default function ArtworkPage() {
  const images = [
    '/art/pic1.png',
    '/art/pic2.png',
    '/art/pic3.png',
    '/art/pic4.png',
    '/art/pic5.png',
  ]

  return (
    <ProjectDetailPage title='Art' images={images}>
      <div>Here is the collection of my most recent work.</div>
      <div>I usually work on my tablet and use Procreate for digital art.</div>
      <div>
        As you can already see, most of my inspiration comes from games that I
        play in my spare time.
      </div>
    </ProjectDetailPage>
  )
}
