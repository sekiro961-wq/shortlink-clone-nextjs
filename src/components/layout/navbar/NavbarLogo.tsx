export default function NavbarLogo() {
  return (
    <a  href="#" className="flex items-center gap-3 hover: opacity-80">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-500">
      </div>
      <div>
        <h1 className="text-xl font-bold text-white">
          <span className="text-violet-500">Link</span>
          <span className="text-blue-400">Short</span>
        </h1>
          <p className="-mt-1 text-[10px] tracking-[2px] text-slate-400">
            SMART LINKS
          </p>
      </div>
        

    </a> 
  );
}