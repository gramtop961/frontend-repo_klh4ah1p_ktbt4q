import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            90×40 cm Premium Mousepads
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Glide-smooth micro-weave surface. Anti-fray stitched edges. Non-slip rubber base. Designed for creators and gamers who demand precision and style.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#catalog" className="px-5 py-3 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black">Shop Designs</a>
            <a href="#quality" className="px-5 py-3 rounded-md bg-white border text-sm font-semibold hover:bg-gray-50">Why PrimePads</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Free shipping over $60 • 30-day returns • 2-year warranty
          </div>
        </div>
        <div className="relative">
          <img className="rounded-xl shadow-xl w-full object-cover h-80" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" alt="Mousepad hero" />
          <div className="absolute -bottom-4 -left-4 bg-white/70 backdrop-blur border rounded-lg p-3 text-xs shadow">
            90 × 40 cm • 4 mm thick • Stitched edges
          </div>
        </div>
      </div>
    </section>
  )
}
