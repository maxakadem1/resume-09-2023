// libraries
import Head from 'next/head'
import '../app/globals.css'

export default function ResumePage() {
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Resume</title>
      </Head>

      <main className='flex h-screen w-screen flex-row items-center justify-between gap-12 p-10 text-sm overflow-hidden bg-black'>
        <div className='h-[100vh] w-[100vw] bg-black'>
          <iframe
            className='h-full w-full'
            src='/Resume.pdf'
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const fallbackMessage = document.getElementById('fallbackMessage')
              if (fallbackMessage) {
                fallbackMessage.style.display = 'block'
              }
            }}
          ></iframe>
          <div id='fallbackMessage' style={{ display: 'none' }}>
            Your browser does not support PDFs.
            <a href='/Resume.pdf'>Download PDF</a>
          </div>
        </div>
      </main>
    </div>
  )
}
