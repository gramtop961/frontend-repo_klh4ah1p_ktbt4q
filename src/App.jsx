import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Quality from './components/Quality'

function App() {
  const [cart, setCart] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === item._id)
      if (existing) {
        return prev.map((p) => p._id === item._id ? { ...p, qty: p.qty + 1 } : p)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const total = cart.reduce((sum, i) => sum + (i.price || 0) * i.qty, 0)

  const checkout = async () => {
    if (cart.length === 0) return
    const payload = {
      customer_name: 'Guest',
      customer_email: 'guest@example.com',
      shipping_address: 'TBD',
      items: cart.map(i => ({ mousepad_id: i._id, quantity: i.qty, unit_price: i.price })),
      total: Number(total.toFixed(2))
    }
    try {
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        alert('Order placed! id: ' + data.id)
        setCart([])
      } else {
        alert('Checkout failed: ' + (data.detail || 'Unknown error'))
      }
    } catch (e) {
      alert('Checkout error: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCartClick={checkout} cartCount={cart.reduce((s,i)=>s+i.qty,0)} />
      <Hero />
      <Catalog onAddToCart={addToCart} />
      <Quality />

      <footer id="faq" className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="font-semibold">FAQs</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>
                <span className="font-medium text-gray-800">What are the dimensions?</span> 90 × 40 cm, 4 mm thick.
              </li>
              <li>
                <span className="font-medium text-gray-800">How do I clean it?</span> Hand wash with mild soap, air dry.
              </li>
              <li>
                <span className="font-medium text-gray-800">Shipping & returns?</span> Free over $60. 30-day returns.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Your Cart</h4>
            {cart.length === 0 ? (
              <p className="mt-3 text-sm text-gray-600">No items yet.</p>
            ) : (
              <div className="mt-3 space-y-3">
                {cart.map(i => (
                  <div key={i._id} className="flex items-center justify-between text-sm">
                    <span>{i.design} × {i.qty}</span>
                    <span>${(i.price * i.qty).toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-3 border-t flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button onClick={checkout} className="w-full mt-2 px-3 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-black">Checkout</button>
              </div>
            )}
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-3 text-sm text-gray-600">hello@primepads.store</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PrimePads — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
