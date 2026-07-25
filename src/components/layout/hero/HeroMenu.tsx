export default function HeroMenu() {
    return (
        <div className="mt-14 w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <input
                        type="text"
                        placeholder="Paste your URL here..."
                        className="
                        h-16
                        w-full
                        rounded-2xl
                        border
                        border-slate-700
                        bg-slate-950
                        px-5
                        pr-24
                        text-white
                        outline-none
                        placeholder:text-slate-500
                        focus:border-sky-500
                    "
                    >
                    </input>
                </div>
            </div>
        </div>
    );
}