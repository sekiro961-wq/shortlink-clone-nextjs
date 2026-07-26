import { Link, Shield, Calendar, QrCode } from 'lucide-react';
export default function HeroMenu() {
  return (
    <div className="mx-auto mt-14 w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Paste your URL here..."
            className="h-16 w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 pr-24 text-white outline-none placeholder:text-slate-500 focus:border-sky-500"
          />
          <button className="absolute top-1/2 right-3 -translate-y-1/2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:brightness-150">
            Paste
          </button>
        </div>
        <button className="h-16 rounded-2xl bg-slate-200 px-8 font-semibold text-slate-900 transition hover:bg-white">
          Shorten Now
        </button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard
          title="Custom Link"
          icon={<Link size={18} className="rotate-5 text-blue-400 transition-colors" />}
          hoverColor="hover:border-blue-500"
        />
        <FeatureCard
          title="Password Protection"
          icon={<Shield size={18} className="text-green-400 transition-colors" />}
          hoverColor="hover:border-green-500"
        />
        <FeatureCard
          title="Set Expiration"
          icon={<Calendar size={18} className="text-purple-400 transition-colors" />}
          hoverColor="hover:border-purple-500"
        />
        <FeatureCard
          title="Generate QR Code"
          icon={<QrCode size={18} className="text-orange-400" />}
          hoverColor="hover:border-orange-500"
        />
      </div>
    </div>
  );
}
function FeatureCard({
  title,
  icon,
  hoverColor,
}: {
  title: string;
  icon: React.ReactNode;
  hoverColor: string;
}) {
  return (
    <div
      className={`group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 ${hoverColor} `}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-white transition-all duration-300 group-hover:scale-110 group-hover:brightness-150">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
  );
}
