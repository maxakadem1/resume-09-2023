import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
}

export default function ResumePage() {
  return (
    <main className='flex h-screen w-screen flex-row items-center justify-between gap-12 p-10 text-sm overflow-hidden bg-black'>
      <div className='h-[100vh] w-[100vw] bg-black'>
        {/* The PDF lives in public so it can be opened directly as well. */}
        <iframe
          className='h-full w-full'
          src='/Resume.pdf'
          title='Resume PDF'
        />
      </div>
    </main>
  )
}
