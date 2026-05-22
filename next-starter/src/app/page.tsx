import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ProductPageMock from '../components/ProductPageMock'

export default function Page() {
  return (
    <main>
      <Hero />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-display mb-8">Featured Drop</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard title="VOID SIGNAL Tee" price="₹1999" />
          <ProductCard title="MECHA CORE Hoodie" price="₹4999" />
          <ProductCard title="NEON REBELS Cap" price="₹999" />
        </div>
      </section>

      <ProductPageMock />
    </main>
  )
}
