export default function ProductCard({ title = 'Product', price = '₹0', onQuickView }: { title?: string; price?: string; onQuickView?: ()=>void }) {
  return (
    <article className="group relative bg-white border p-4 hover:shadow-xl transition-shadow rounded-lg">
      <div className="relative aspect-square bg-gray-100 mb-4 flex items-center justify-center rounded-md overflow-hidden">
        <div className="absolute left-3 top-3 bg-red-600 text-white text-xs px-2 py-1 rounded">SALE</div>
        <button onClick={onQuickView} className="absolute right-3 bottom-3 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">👁️</button>
        <div className="w-3/4 h-3/4 bg-gradient-to-br from-gray-200 to-gray-300" />
      </div>

      <h3 className="font-semibold text-base text-gray-900">{title}</h3>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500 line-through">₹1,899.00</div>
          <div className="text-sm text-rose-600 font-semibold">{price}</div>
        </div>
        <button className="ml-4 bg-black text-white px-3 py-1 text-sm rounded">Add</button>
      </div>
    </article>
  )
}
