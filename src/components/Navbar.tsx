import React from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="hidden md:flex items-center gap-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full px-2 py-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`
            relative px-4 py-2 rounded-full text-sm font-medium 
            transition-all duration-300 ease-out
            ${
              activeSection === item.id
                ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg nav-glow'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/30'
            }
          `}
        >
          <span className="relative z-10">
            {item.label}
          </span>
          {activeSection === item.id && (
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-sm" />
          )}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;