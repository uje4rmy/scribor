import { Link } from "react-router";

const HomeHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center px-8 text-[14px] text-slate-700 lg:px-12">
        <div className="flex items-center">
          <Link href="/" className="text-[20px] font-semibold text-slate-900">
            Scribor
          </Link>
        </div>
        <nav className="hidden items-center gap-7 text-[15px] text-slate-500 md:flex">
          <Link href="#product" className="transition hover:text-slate-900">
            Product
          </Link>
          <Link href="#pricing" className="transition hover:text-slate-900">
            Pricing
          </Link>
          <Link href="#tranche-2" className="transition hover:text-slate-900">
            Tranche 2
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-5 text-[15px]">
          <button
            type="button"
            className="text-slate-500 transition hover:text-slate-900"
          >
            Sign In
          </button>

          <Link
            href="/"
            className="rounded-full border border-slate-200/80 bg-slate-900 px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(15,23,42,0.18)] transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Start Free
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
