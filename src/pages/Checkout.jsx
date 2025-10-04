import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../store/cart'

export default function Checkout(){
  const { cart, clear } = useCart()
  const navigate = useNavigate()
  const total = cart.reduce((s,i)=> s + i.price * i.quantity, 0)
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // simulate payment
    alert('ชำระเงินจำลองสำเร็จ — ขอบคุณสำหรับคำสั่งซื้อ, ' + name)
    clear()
    navigate('/')
  }

  if(cart.length===0) return <div className="bg-white p-6 rounded shadow">ตะกร้าว่าง</div>
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Checkout</h2>
      <div className="mt-4">
        <form onSubmit={onSubmit} className="space-y-3 max-w-md">
          <div><label className="block text-sm">ชื่อ</label><input required value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2 rounded"/></div>
          <div><label className="block text-sm">ที่อยู่</label><textarea required value={address} onChange={e=>setAddress(e.target.value)} className="w-full border p-2 rounded"/></div>
          <div><label className="block text-sm">เบอร์โทร</label><input required value={phone} onChange={e=>setPhone(e.target.value)} className="w-full border p-2 rounded"/></div>
          <div className="font-bold">ยอดรวม: ฿{total}</div>
          <div className="flex gap-2"><button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">ยืนยันชำระเงิน</button></div>
        </form>
      </div>
    </div>
  )
}
