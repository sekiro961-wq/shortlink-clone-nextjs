import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarActions />
      </div>
    </header>
  );
}