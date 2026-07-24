import {Globe,Moon} from 'lucide-react';

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300 transition hover:brightness-150">
        <Globe size={16} />
        <span>US EN</span>
      </button>
      <button className="rounded-xl border border-slate-700 bg-slate-900 p-2.5 text-slate-300 transition hover:brightness-150">
        <Moon size={16} />
      </button>
      <a href="#" className="text-slate-300 hover:brightness-150">
        Sign in
      </a>
    </div>
  );
}