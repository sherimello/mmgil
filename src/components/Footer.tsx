import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-32 pb-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="w-full md:w-auto">
          <a href="#contact" className="block group">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 group-hover:text-zinc-300 transition-colors cursor-pointer">
              Let's Talk <ArrowUpRight className="inline-block w-12 h-12 md:w-20 md:h-20 -mt-4 md:-mt-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </h2>
          </a>
          <p className="text-zinc-400 text-lg md:text-xl max-w-sm">
            Partner with MMG Ispat Ltd. for global steel and scrap solutions.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm md:text-base">
          <div className="flex flex-col gap-4 text-zinc-400 max-w-[200px]">
            <h4 className="text-white uppercase tracking-widest font-semibold text-xs mb-2">Location</h4>
            <p>Portland MAM Tower (13th Floor) Unit A, 226 Strand Road, Banglabazar, Chattogram 4000, Bangladesh</p>
          </div>
          <div className="flex flex-col gap-4 text-zinc-400 max-w-[200px]">
            <h4 className="text-white uppercase tracking-widest font-semibold text-xs mb-2">Headquarters</h4>
            <p>Kha - 199/3 & 199/4, Venus Complex (5th Floor), Pragati Sharani, Middle Badda, Dhaka - 1212, Bangladesh</p>
          </div>
          <div className="flex flex-col gap-4 text-zinc-400">
            <h4 className="text-white uppercase tracking-widest font-semibold text-xs mb-2">Contact</h4>
            <a href="mailto:info@mmgispat.com" className="hover:text-white transition-colors">info@mmgispat.com</a>
            <a href="tel:+8801946928928" className="hover:text-white transition-colors">+880 1946 928928</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} MMG Ispat Ltd. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
