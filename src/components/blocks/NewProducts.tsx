import ProductCard from '../elements/ProductCard'
import SectionTitle from '../elements/SectionTitle'

export default function NewProducts() {
  return (
    <section className='p-24'>
      <SectionTitle title='NEW PRODUCTS' />
      <div className='grid grid-cols-3 gap-12'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}
