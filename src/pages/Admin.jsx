import React from 'react'
import ProductForm from '../components/ProductForm'
import { initialProducts } from '../data'
export default function Admin(){
  const [products, setProducts] = React.useState(()=>{
    try { return JSON.parse(localStorage.getItem('products')) || initialProducts } catch(e){ return initialProducts }
  })

  React.useEffect(()=>{ localStorage.setItem('products', JSON.stringify(products)) },[products])

  const onSave = (prod) => {
    if(!prod.id){ prod.id = 'p' + Date.now() }
    setProducts(prev => {
      const exists = prev.find(p=>p.id===prod.id)
      if(exists) return prev.map(p=> p.id===prod.id? prod: p)
      return [prod, ...prev]
    })
  }

  const onDelete = (id) => setProducts(prev => prev.filter(p=> p.id!==id))

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">เพิ่ม / แก้ไขสินค้า</h2>
        <ProductForm onSave={onSave} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">รายการสินค้า</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {products.map(p=> (
            <div key={p.id} className="border p-3 rounded flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={p.image} className="w-20 h-20 object-contain" alt="img"/>
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-500">฿{p.price}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={()=> onSave(p)} className="px-3 py-1 bg-indigo-600 text-white rounded">Edit (load)</button>
                <button onClick={()=> onDelete(p.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
