const products = [
  {
    id: 'card-1',
    name: 'Refined Card — Midnight',
    price: 129,
    image: 'https://images.unsplash.com/photo-1542704792-e30dac463c90?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'card-2',
    name: 'Refined Card — Glacier',
    price: 129,
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'card-3',
    name: 'Refined Card — Sand',
    price: 129,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured products</h2>
            <p className="mt-1 text-slate-600">Minimal, durable, and designed to feel premium.</p>
          </div>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">View all</a>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <li key={p.id} className="group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900 font-medium">{p.name}</h3>
                  <p className="text-slate-600">${p.price}</p>
                </div>
                <button className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm">
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
