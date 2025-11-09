import { Shield, CreditCard, Truck, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure by default", desc: "PCI-compliant payments with Stripe and end‑to‑end encryption." },
  { icon: Truck, title: "Fast shipping", desc: "Global carriers with real‑time rates and tracked delivery." },
  { icon: CreditCard, title: "3D product demo", desc: "Interactive, light 3D card experience powered by Spline." },
  { icon: Zap, title: "Performance first", desc: "Optimized assets and accessibility baked in from day one." },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why REFINED</h2>
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
