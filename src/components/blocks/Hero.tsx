'use client'

const backgroundStyles = {
  backgroundImage: `url(/background.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

export default function Hero() {
  return (
    <div style={backgroundStyles} className='h-screen'>
      <h1 className='absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-black max-w-full'>
        PUT THE  <br />
        WORLD ON
        MUTE
      </h1>

    </div>
  )
}
