import React from 'react'

export default function ProductForm({initial={}, onSave}){
  const [title, setTitle] = React.useState(initial.title||'')
  const [price, setPrice] = React.useState(initial.price||0)
  const [desc, setDesc] = React.useState(initial.desc||'')
  const [image, setImage] = React.useState(initial.image||'')

  const onFile = (e) => {
    const file = e.target.files?.[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=> setImage(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <form onSubmit={(ev)=>{ ev.preventDefault(); onSave({ ...initial, title, price:Number(price), desc, image }) }} className="space-y-3">
      <div>
        <label className="block text-sm">Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded"/>
      </div>
      <div>
        <label className="block text-sm">Price</label>
        <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full border p-2 rounded"/>
      </div>
      <div>
        <label className="block text-sm">Description</label>
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="w-full border p-2 rounded"/>
      </div>
      <div>
        <label className="block text-sm">Image (upload)</label>
        <input type="file" accept="image/*" onChange={onFile} className="w-full"/>
        {image && <div className="mt-2"><img src={image} alt="preview" className="h-28 object-contain"/></div>}
      </div>
      <div><button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button></div>
    </form>
  )
}
