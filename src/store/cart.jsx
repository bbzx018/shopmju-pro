import React from 'react'

const CartContext = React.createContext()

export function CartProvider({children}){
  const [cart, setCart] = React.useState(()=>{
    try { return JSON.parse(localStorage.getItem('cart')||'[]') } catch(e){ return [] }
  })

  React.useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) },[cart])

  const add = (product, qty=1) => {
    setCart(prev=>{
      const p = prev.find(x=>x.id===product.id)
      if(p){ return prev.map(x=> x.id===product.id ? {...x, quantity: x.quantity+qty} : x ) }
      return [...prev, {...product, quantity: qty}]
    })
  }
  const update = (id, qty) => setCart(prev=> prev.map(p=> p.id===id? {...p, quantity: qty}: p))
  const remove = (id) => setCart(prev=> prev.filter(p=> p.id!==id))
  const clear = () => setCart([])

  return <CartContext.Provider value={{cart, add, update, remove, clear}}>{children}</CartContext.Provider>
}

export function useCart(){ const ctx = React.useContext(CartContext); if(!ctx) throw new Error('useCart must be inside provider'); return ctx }
export { CartProvider as default }
