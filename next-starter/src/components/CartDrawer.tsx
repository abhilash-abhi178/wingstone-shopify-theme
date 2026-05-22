import { useState } from 'react'

export default function CartDrawer(){
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={()=>setOpen(true)} className="fixed right-4 bottom-20 bg-black text-white p-3 rounded-full md:hidden">🛒</button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Cart</h3>
              <button onClick={()=>setOpen(false)}>Close</button>
            </div>
            <div className="py-8 text-center text-gray-500">Your cart is currently empty</div>
            <div className="mt-auto">
              <button className="w-full bg-black text-white py-3">Checkout</button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
