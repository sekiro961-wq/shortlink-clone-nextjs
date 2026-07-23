import {Globe, Moon} from 'lucide-react';
export default function NavbarLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-500">
      </div>
      <p className="text-[11px] opacity-80">
      Free from Vietnam
      </p>
      <p className="text-[18px] font-bold tracking-wide">
      0973825506
      </p> 
    </div> 
  );
}