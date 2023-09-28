//libraries
import Head from 'next/head'
import '../../app/globals.css'

export default function DevclubPage() {
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Max A - DevClub</title>
      </Head>

      <main className='flex h-screen w-scre en flex-row items-center justify-between gap-12 p-10 text-sm overflow-hidden bg-black'>
        <div className='h-[100vh] w-[100vw] bg-black'>DevClub</div>
      </main>
    </div>
  )
}
