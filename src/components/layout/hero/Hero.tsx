import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroMenu from "./HeroMenu";
import HeroTerm from "./HeroTerm";

export default function Hero () {
    return (
        <header className="bg-[#C2E9FB]">
              <div className="mx-auto h-200 p-10 max-w-7xl items-center justify-between">
                <HeroTitle />
                <HeroSubtitle />
                <HeroMenu />
                <HeroTerm />
              </div>
            </header>
    );
}