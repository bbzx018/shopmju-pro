import React from 'react'
import { initialProducts } from '../data'
import ProductCard from '../components/ProductCard'
import { useCart } from '../store/cart'

export default function Shop(){
  const [products, setProducts] = React.useState(()=>{
    try { return JSON.parse(localStorage.getItem('products')) || initialProducts } catch(e){ return initialProducts }
  })

  React.useEffect(()=>{ localStorage.setItem('products', JSON.stringify(products)) },[products])

  const { add } = useCart()

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p=> <ProductCard key={p.id} p={p} onAdd={(prod)=>add(prod,1)} />)}
      </div>
    </div>
  )
}
