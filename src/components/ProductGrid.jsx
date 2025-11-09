const products = [
  {
    id: 'tee-1',
    name: 'Ribbed Tee — Onyx',
    price: 48,
    image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 'hoodie-1',
    name: 'Oversized Hoodie — Fog',
    price: 98,
    image: 'https://images.unsplash.com/photo-1642783632273-195232e459f3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdmVyc2l6ZWQlMjBIb29kaWUlMjAlRTIlODAlOTQlMjBGb2d8ZW58MHwwfHx8MTc2MjY5MDcxMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Restocked',
  },
  {
    id: 'pants-1',
    name: 'Pleated Trousers — Taupe',
    price: 128,
    image: 'https://images.unsplash.com/photo-1566392722006-b3ccec017bec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGVhdGVkJTIwVHJvdXNlcnMlMjAlRTIlODAlOTQlMjBUYXVwZXxlbnwwfDB8fHwxNzYyNjkwNzExfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Bestseller',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">The Collection</h2>
            <p className="mt-1 text-slate-600">Elevated essentials for everyday wear.</p>
          </div>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">View all</a>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <li key={p.id} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 text-[11px] uppercase tracking-wide bg-white/90 backdrop-blur px-2 py-1 rounded-md ring-1 ring-black/10 text-slate-800">{p.tag}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900 font-medium">{p.name}</h3>
                  <p className="text-slate-600">${p.price}</p>
                </div>
                <button className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm">
                  Add to bag
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
