
export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className='mb-24'>
      <h2 className='text-center max-w-full pt-7'>
        {title}
      </h2>
    </div>
  )
}
