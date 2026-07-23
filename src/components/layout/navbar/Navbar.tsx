import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#101827]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-8">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarActions />
      </div>
    </header>
  );
}