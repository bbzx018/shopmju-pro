import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../store/cart'

export default function Navbar(){
  const { cart } = useCart()
  const total = cart.reduce((s,i)=>s + i.quantity, 0)
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto flex items-center gap-4 p-4">
        <Link to="/" className="font-bold text-lg">ShopMJU</Link>
        <nav className="flex gap-3">
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link to="/cart" className="bg-indigo-700 px-3 py-1 rounded">Cart <span className="ml-2 bg-red-500 rounded-full px-2 text-sm">{total}</span></Link>
        </div>
      </div>
    </header>
  )
}
