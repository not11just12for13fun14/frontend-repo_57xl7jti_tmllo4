import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        <ProductGrid />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} REFINED. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
