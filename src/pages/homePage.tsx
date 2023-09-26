export default function HomePage() {
  const Rings = '/Ring.mp4'

  return (
    <main className='flex h-screen flex-row items-center justify-between gap-12 p-12'>
      <div className='flex flex-col h-full w-[50%] justify-end gap-3'>
        <div>text outside</div>
        <div className='border border-gray-800 rounded-2xl w-full h-[90%]'>
          text inside
        </div>
      </div>

      <div className='w-[50%]'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={Rings} type='video/mp4' />
        </video>
      </div>
    </main>
  )
}
