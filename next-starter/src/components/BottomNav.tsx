import Link from 'next/link'
import { useState } from 'react'
export default function BottomNav(){
  const items = [
    {label:'Home', href:'/'},
    {label:'Shop', href:'/collections'},
    {label:'Search', href:'/search'},
    {label:'Account', href:'/account'},
    {label:'Cart', href:'/cart'}
  ]
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {items.map(item=> (
            <Link key={item.label} href={item.href} className="flex-1 text-center text-sm py-2">
              <div className="text-xl">🏠</div>
              <div className="mt-1">{item.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
