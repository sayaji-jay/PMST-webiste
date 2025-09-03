import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-yellow-900 text-xl font-bold bg-covered bg-center">
            <Image src="/LogoP.jpeg" alt="Logo" width={50} height={50} className="inline-block mr-2" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-yellow-950 hover:text-yellow-400 font-extrabold text-xl transition-colors">Home</a>
            <a href="#about" className="text-yellow-950 hover:text-yellow-400 font-extrabold text-xl transition-colors">About</a>
            <a href="#services" className="text-yellow-950 hover:text-yellow-400 font-extrabold text-xl transition-colors">Services</a>
            <a href="#contact" className="text-yellow-950 hover:text-yellow-400 font-extrabold text-xl transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-yellow-950">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}