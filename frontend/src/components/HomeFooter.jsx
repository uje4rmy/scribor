import { Link } from "react-router";

const HomeFooter = () => {
  return (
    <footer id="changelog" className="border-t border-slate-200/70 bg-white/80">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-4 px-8 py-10 text-[12px] text-slate-500 lg:px-12">
        <span>© 2026 Scribor</span>
        <div className="flex flex-wrap gap-4">
          <Link href="#product" className="hover:text-slate-900">
            Product
          </Link>
          <Link href="#pricing" className="hover:text-slate-900">
            Pricing
          </Link>
          <Link href="#resources" className="hover:text-slate-900">
            Resources
          </Link>
          <Link href="#privacy" className="hover:text-slate-900">
            Privacy
          </Link>
          <Link href="#terms" className="hover:text-slate-900">
            Terms
          </Link>
          <Link href="#contact" className="hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
