import Navbar2Logo from "./Navbar2Logo"
import Navbar2Menu from "./Navbar2Menu"
import Navbar2Actions from "./Navbar2Actions"

export default function Navbar2() {
  return (
    <header className="bg-white-700 text-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Navbar2Logo />
        <Navbar2Menu />
        <Navbar2Actions/>
      </div>
    </header>
  );
}