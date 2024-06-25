import Image from 'next/image'

export default function ProductCard() {
  return (
    <div>
      <div className='bg-[#F4F4F4]'>
        <Image
          src="/ear.png"
          alt='ear'
          width={440}
          height={375}
        />

      </div>
      <div className='flex item justify-between'>
        <div>
          <h3 className='mb-3'>Earphones</h3>
          <p>$299</p>
        </div>
        <div className='flex items-center gap-1'>
          <span className='colors red'></span>
          <span className='colors green'></span>
          <span className='colors blue'></span>
          <span className='colors gray'></span>
        </div>
      </div>
    </div>
  )
}
