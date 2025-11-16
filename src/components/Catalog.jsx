import React, { useEffect, useState } from 'react'

export default function Catalog({ onAddToCart }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/mousepads`)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const seed = async () => {
    await fetch(`${baseUrl}/api/seed`, { method: 'POST' })
    await fetchItems()
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Unique Designs</h2>
            <p className="text-gray-600">Premium extended pads built for performance and comfort.</p>
          </div>
          <button onClick={seed} className="text-xs text-gray-500 hover:text-gray-800 underline">Load sample designs</button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : items.length === 0 ? (
          <div className="text-gray-600">No designs yet. Click "Load sample designs" above to add a few.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p._id} className="rounded-xl border bg-white overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-gray-100">
                  <img src={(p.images && p.images[0]) || 'https://images.unsplash.com/photo-1450849608880-6f787542c88a?q=80&w=1600&auto=format&fit=crop'} alt={p.design} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{p.design}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</div>
                    <button onClick={() => onAddToCart(p)} className="px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-black">Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
