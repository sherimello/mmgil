import { ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-900 py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-8">Network</h2>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-white">
              Contact & Businesses
            </h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Get in touch with our global headquarters or explore our specialized subsidiary networks.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-white">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">General</h4>
              <a href="mailto:hello@mmgispat.com" className="hover:text-zinc-300 transition-colors">hello@mmgispat.com</a>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Sales</h4>
              <a href="mailto:sales@mmgispat.com" className="hover:text-zinc-300 transition-colors">sales@mmgispat.com</a>
            </div>
            <div className="col-span-2">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</h4>
              <p className="text-zinc-300">Portland MAM Tower (13th Floor) Unit A,<br/>226 Strand Road, Banglabazar,<br/>Chattogram 4000, Bangladesh.</p>
            </div>
            <div className="col-span-2 mt-2">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Headquarters</h4>
              <p className="text-zinc-300">Kha - 199/3 & 199/4, Venus Complex (5th Floor),<br/>Pragati Sharani, Middle Badda,<br/>Dhaka - 1212, Bangladesh</p>
            </div>
            <div className="col-span-2 mt-2">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Phone</h4>
              <a href="tel:+8801946928928" className="hover:text-zinc-300 transition-colors">+880 1946 928928</a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <div className="bg-zinc-950 p-8 md:p-12 rounded-2xl ring-1 ring-white/5 relative group hover:ring-white/20 transition-all duration-500">
            <h4 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white">MMG Shipping Lines Ltd.</h4>
            <p className="text-zinc-400 mb-8 max-w-md">Global maritime logistics and seaborne freight solutions.</p>
            <a href="https://www.mmseaways.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-white hover:text-zinc-300 transition-colors">
              Visit Website <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="bg-zinc-950 p-8 md:p-12 rounded-2xl ring-1 ring-white/5 relative group hover:ring-white/20 transition-all duration-500">
            <h4 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white">MMG Industrial Solutions</h4>
            <p className="text-zinc-400 mb-8 max-w-md">Joint Venture with Hongkong Ding Feng Ltd. providing advanced industrial tooling and machinery.</p>
            <a href="https://mmgisl.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-white hover:text-zinc-300 transition-colors">
              Visit Website <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
