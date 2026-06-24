import type { Metadata } from 'next'
import ProjectDetailPage from '@/components/ProjectDetailPage'

export const metadata: Metadata = {
  title: 'Max A - PacketVis',
}

export default function PacketvisPage() {
  const images = [
    '/packet_vis/pic1.png',
    '/packet_vis/pic2.png',
    '/packet_vis/pic3.png',
    '/packet_vis/pic4.png',
  ]

  return (
    <ProjectDetailPage title='PacketVis' images={images}>
      <div>
        PacketVis was developed as a research project during my education at the
        University of Manitoba.
      </div>
      <div>
        The application collects information from Wireshark, which captures data
        packets sent over the network. PacketVis takes that data and visualizes
        it on a 3D world map, showing packets flying in and out of the user IP
        address.
      </div>
    </ProjectDetailPage>
  )
}
