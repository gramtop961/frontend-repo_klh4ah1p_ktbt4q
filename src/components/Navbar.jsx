import React from 'react'

export default function Navbar({ onCartClick, cartCount }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          <span className="font-semibold text-lg tracking-tight">PrimePads</span>
        </a>
        <nav className="flex items-center gap-6">
          <a href="#catalog" className="text-sm text-gray-600 hover:text-gray-900">Catalog</a>
          <a href="#quality" className="text-sm text-gray-600 hover:text-gray-900">Quality</a>
          <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
          <button onClick={onCartClick} className="relative inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-md hover:bg-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6l-1-3H3"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></svg>
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-fuchsia-600 text-white rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
