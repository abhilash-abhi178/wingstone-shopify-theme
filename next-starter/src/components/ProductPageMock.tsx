import Accordion from './Accordion'
import ProductCard from './ProductCard'

export default function ProductPageMock(){
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 aspect-square rounded-md" />
        <div>
          <div className="mb-4">
            <div className="inline-block bg-black text-white px-3 py-1 text-xs rounded">LIMITED DROP</div>
          </div>
          <h1 className="text-2xl font-display mb-4">Black Oversized Graphic T-Shirt</h1>
          <div className="text-rose-600 font-semibold mb-4">₹1,599.00</div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Size</label>
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded">S</button>
              <button className="px-4 py-2 border rounded">M</button>
              <button className="px-4 py-2 border rounded">L</button>
              <button className="px-4 py-2 border rounded">XL</button>
            </div>
          </div>

          <div className="mb-6 flex gap-3">
            <button className="flex-1 border py-3">Add to cart</button>
            <button className="w-12 bg-black text-white">♥</button>
          </div>

          <div className="mb-6">
            <div className="text-sm text-gray-500">HURRY, ONLY 9 ITEMS LEFT IN STOCK!</div>
            <div className="h-2 bg-gray-200 rounded mt-2 overflow-hidden">
              <div className="h-full bg-rose-600 w-1/4" />
            </div>
          </div>

          <Accordion title="Description">
            Premium cotton, oversized fit, screen print.
          </Accordion>
          <Accordion title="Product details">
            100% cotton, 220 GSM.
          </Accordion>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl mb-4">You may also like</h2>
        <div className="grid grid-cols-2 gap-4">
          <ProductCard title="Party Animal Tee" price="₹1,599" />
          <ProductCard title="Self Love Tee" price="₹1,599" />
        </div>
      </section>
    </div>
  )
}
