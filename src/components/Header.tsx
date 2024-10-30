import React from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
  <div className="border-0 border-b-0 border-none">
    <header className="sticky top-0 z-50 bg-transparent/70 backdrop-blur-sm border-0 border-b-0 border-none shadow-none after:hidden before:hidden"> 
      <nav className="max-w-4xl mx-auto px-4 py-3"> 
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors">
            SAWAN PANDITA
          </a>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
    </div>
  );
}

function NavLinks() {
  return (
    <>
      {['About', 'Blog', 'Projects', 'Uses'].map((item) => (
        <a
          key={item}
          href={`/${item.toLowerCase()}`}
          className="block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-colors"
        >
          {item}
        </a>
      ))}
    </>
  );
}
