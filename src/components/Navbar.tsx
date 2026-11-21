import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black py-4 px-8 sticky top-0 z-50 border-b-4 border-red-600">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo area */}
        <div className="text-3xl font-black tracking-widest text-black italic -skew-x-12">
          <Link href="/" className="bg-white hover:bg-red-600 hover:text-white transition-colors px-3 py-1 inline-block border-2 border-white">
            ABEER IMRAN
          </Link>
        </div>
        
        {/* Links */}
        <div className="flex gap-6 text-2xl font-bold tracking-wider text-white">
          <Link href="#projects" className="hover:bg-red-600 hover:text-white px-2 py-1 transition-all -skew-x-12 inline-block">PROJECTS</Link>
          <Link href="#about" className="hover:bg-red-600 hover:text-white px-2 py-1 transition-all -skew-x-12 inline-block">ABOUT</Link>
          <a href="https://github.com/abeer-imran" target="_blank" rel="noopener noreferrer" className="hover:bg-red-600 hover:text-white px-2 py-1 transition-all -skew-x-12 inline-block">GITHUB</a>
        </div>
      </div>
    </nav>
  );
}