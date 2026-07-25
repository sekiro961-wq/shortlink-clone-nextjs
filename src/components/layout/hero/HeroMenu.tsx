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
        <FeatureCard title="Custom Link" />
        <FeatureCard title="Password Protection" />
        <FeatureCard title="Set Expiration" />
        <FeatureCard title="Generate QR Code" />
      </div>
    </div>
  );
}
function FeatureCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:-translate-y-1 hover:border-sky-500/40">
      <div className="mb-4 h-10 w-10 rounded-xl bg-sky-500/20" />
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
  );
}
