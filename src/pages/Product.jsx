import React from 'react'
import { useParams } from 'react-router-dom'
import { initialProducts } from '../data'
import { useCart } from '../store/cart'

export default function Product(){
  const { id } = useParams()
  const products = React.useMemo(()=>{ try { return JSON.parse(localStorage.getItem('products')) || initialProducts } catch(e){ return initialProducts } },[])
  const p = products.find(x=>x.id===id)
  const { add } = useCart()
  if(!p) return <div>Product not found</div>
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={p.image} alt={p.title} className="w-full md:w-1/3 object-contain" />
        <div>
          <h2 className="text-2xl font-bold">{p.title}</h2>
          <p className="mt-2 text-gray-600">{p.desc}</p>
          <div className="mt-4 font-bold text-lg">฿{p.price}</div>
          <button onClick={()=>add(p,1)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
