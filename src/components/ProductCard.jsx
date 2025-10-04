import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({p, onAdd}){
  return (
    <div className="border rounded-lg bg-white p-4 flex flex-col">
      <img src={p.image} alt={p.title} className="h-40 object-contain mb-3"/>
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-sm text-gray-600">{p.desc}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="font-bold">฿{p.price}</div>
        <div className="flex items-center gap-2">
          <button onClick={()=>onAdd(p)} className="px-3 py-1 bg-indigo-600 text-white rounded">Add</button>
          <Link to={`/product/${p.id}`} className="text-sm text-indigo-600">Details</Link>
        </div>
      </div>
    </div>
  )
}
