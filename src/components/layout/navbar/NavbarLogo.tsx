import { Link } from 'lucide-react';
export default function NavbarLogo() {
  return (
    <a href="#" className="hover: flex items-center gap-3 opacity-80">
      <div className="relative h-10 w-10">
        <Link
          size={24}
          strokeWidth={3}
          className="absolute top-2 left-0 rotate-5 text-violet-500"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold text-white">
          <span className="text-violet-500">Link</span>
          <span className="text-blue-400">Short</span>
        </h1>
        <p className="-mt-1 text-[10px] tracking-[2px] text-slate-400">SMART LINKS</p>
      </div>
    </a>
  );
}
