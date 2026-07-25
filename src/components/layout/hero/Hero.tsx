import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroMenu from './HeroMenu';

export default function Hero() {
  return (
    <header className="bg-[#1B1B4A]">
      <div className="mx-auto h-200 max-w-7xl items-center justify-between p-10">
        <HeroTitle />
        <HeroSubtitle />
        <HeroMenu />
      </div>
    </header>
  );
}
