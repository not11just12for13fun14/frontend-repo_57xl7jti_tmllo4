import { Shield, Leaf, Ruler, Truck } from "lucide-react";

const features = [
  { icon: Leaf, title: "Sustainable fabrics", desc: "Low‑impact materials sourced responsibly." },
  { icon: Ruler, title: "Tailored fits", desc: "Modern silhouettes cut for comfort and movement." },
  { icon: Truck, title: "Global shipping", desc: "Tracked delivery with simple, transparent returns." },
  { icon: Shield, title: "Quality guaranteed", desc: "Meticulous craftsmanship and durable construction." },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Crafted with intention</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-4 font-medium text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
