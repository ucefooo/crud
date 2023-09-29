import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full h-full flex items-center justify-center bg-gray-600'>
      <Link href={'/blog'}>
      <button className='flex items-center justify-center bg-red-700 hover:bg-red-900 w-[200px] h-[60px] p-4 rounded shadow-md text-slate-800'>
        Enter to The blog 
      </button>
      </Link>
    </main>
  )
}
