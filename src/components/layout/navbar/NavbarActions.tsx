import {Globe} from 'lucide-react';

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-5">
        <button className="rounded-full border border-white px-5 py-1 font-semibold transition hover:bg-white hover:text-black"
        >Login/Sign up
        </button>
        <button className="hover:[&_p]:text-black-500 items-center gap-2 md:flex">
          <Globe size={18} />
          English
        </button>
    </div>
  );
}