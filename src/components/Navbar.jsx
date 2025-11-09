import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5"> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-600 shadow-inner" />
          <span className="font-semibold tracking-tight text-slate-900">REFINED</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#products" className="hover:text-slate-900 transition-colors">Products</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Account" className="p-2 rounded-md hover:bg-slate-100 text-slate-700">
            <User className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="p-2 rounded-md hover:bg-slate-100 text-slate-700">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <a href="#products" className="hidden sm:inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm">Shop now</a>
        </div>
      </div>
    </header>
  );
}
