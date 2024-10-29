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
    <div className="hidden md:flex items-center gap-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeSection === item.id
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;

// import React from 'react';

// const navItems = [
//   { id: 'about', label: 'About', special: true  },
//   { id: 'projects', label: 'Projects', special: true  },
//   { id: 'blog', label: 'Blogs', special: true },
//   { id: 'snippets', label: 'Snippets' , special: true },
//   { id: 'newsletter', label: 'Newsletter', special: true },
// ];

// interface NavbarProps {
//   activeSection: string;
//   setActiveSection: (section: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
//   return (
//     <div className="flex items-center justify-center gap-4 bg-black bg-opacity-80 p-3 rounded-full shadow-md">
//       {navItems.map((item) => (
//         <button
//           key={item.id}
//           onClick={() => setActiveSection(item.id)}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//             activeSection === item.id
//               ? 'bg-gray-700 text-white' // Active state
//               : item.special
//               ? 'text-yellow-500' // Special color for "Newsletter"
//               : 'text-gray-300 hover:text-white' // Default color and hover effect
//           }`}
//         >
//           {item.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Navbar;
