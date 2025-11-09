import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-700 bg-white/70 rounded-full px-3 py-1 shadow-sm ring-1 ring-black/5">Fintech • 3D • Minimal</p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
            Refined payments, modern design
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            A minimal e‑commerce experience with a glass‑morphic 3D card you can explore. Smooth, fast, and accessible by design.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 shadow-md">Explore products</a>
            <a href="#features" className="inline-flex items-center rounded-md bg-white/80 text-slate-900 px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:bg-white">Learn more</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
