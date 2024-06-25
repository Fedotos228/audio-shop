import { navigation } from '@/constants/navigation'

export default function Header() {
  return (
    <header className='absolute top-0 right-0 px-10 py-12'>
      <nav className='flex items-center gap-5'>
        {navigation.map(nav => (
          <button key={nav.id} id={nav.href} className='text-black uppercase cursor-pointer'>
            {nav.title}
          </button>
        ))}
      </nav>
    </header>
  )
}
