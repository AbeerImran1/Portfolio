import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 text-slate-200 py-4 px-8 flex justify-between items-center sticky top-0 z-50 border-b border-slate-800">
      <div className="text-xl font-bold tracking-tighter">
        <Link href="/" className="hover:text-blue-400 transition-colors">
        <span>Abeer Imran</span>
        </Link>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
        <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
        <a href="https://github.com/abeer-imran" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
      </div>
    </nav>
  );
}
