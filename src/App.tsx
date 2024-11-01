// import React, { useState } from 'react';
// import { Moon, Sun, Github, Twitter, Linkedin, Mail } from 'lucide-react';
// import { useTheme } from './hooks/useTheme';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Projects from './components/Projects';
// import Blog from './components/Blog';
// import Experience from './components/Experience';
// import Resume from './components/Resume';
// import WeatherWidget from './components/weatherWidget';
// import GargaiChat from './components/GargiChat';

// function App() {
//   const { theme, toggleTheme } = useTheme();
//   const [activeSection, setActiveSection] = useState('about');

//   // Words to change
//   const wordsToChange = [
//     "Singer",
//     "Cricketer",
//     "Comedian",
//     "Software Engineer",
//     "Artist",
//   ];

//   // State for the changing word
//   const [changingWord, setChangingWord] = React.useState(wordsToChange[0]);

//   // Timer to cycle through the words
//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       const nextIndex = (wordsToChange.indexOf(changingWord) + 1) % wordsToChange.length;
//       setChangingWord(wordsToChange[nextIndex]);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [changingWord, wordsToChange]);

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
//     }`}>
//       <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-opacity-70 border-b border-gray-200 dark:border-gray-700">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Sawan Pandita
//             </h1>
//             <div className="flex items-center gap-6">
//               <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                 aria-label="Toggle theme"
//               >
//                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <WeatherWidget apiKey="YOUR_API_KEY" />
//       <GargaiChat />

//       <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold mb-4">
//             Hi, I'm Sawan 👋
//           </h2>
//           <p className="text-xl leading-relaxed">
//             I'm a passionate software engineer with over 5 years of experience building web applications 
//             and scalable systems. I specialize in React, TypeScript, and Node.js, with a strong focus 
//             on creating beautiful, performant user experiences. I'm also a{" "}
//             <span className="text-blue-500 font-bold animate-pulse">{changingWord}</span>. 
//           </p>
//         </div>

//         {activeSection === 'about' && <About />}
//         {activeSection === 'projects' && <Projects />}
//         {activeSection === 'blog' && <Blog />}
//         {activeSection === 'experience' && <Experience />}
//         {activeSection === 'resume' && <Resume />}
//       </main>

//       <footer className={`fixed bottom-0 w-full py-4 ${
//         theme === 'dark' ? 'bg-gray-900' : 'bg-white'
//       } border-t border-gray-200 dark:border-gray-700 backdrop-blur-lg bg-opacity-70`}>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <p className="text-sm">© 2024 Sawan Pandita. All rights reserved.</p>
//           <div className="flex gap-4">
//             <a 
//               href="https://github.com/sawan18" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-blue-500 transition-colors"
//             >
//               <Github size={20} />
//             </a>
//             <a 
//               href="https://twitter.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-blue-500 transition-colors"
//             >
//               <Twitter size={20} />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/sawanpandita/" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="hover:text-blue-500 transition-colors"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a 
//               href="mailto:sawan.panditabizz@gmail.com" 
//               className="hover:text-blue-500 transition-colors"
//             >
//               <Mail size={20} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Moon, Sun, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Resume from './components/Resume';
import WeatherWidget from './components/weatherWidget';
import GargaiChat from './components/GargiChat';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-opacity-70 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sawan Pandita
            </h1>
            <div className="flex items-center gap-6">
              <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <WeatherWidget apiKey="YOUR_API_KEY" />
      <GargaiChat />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'blog' && <Blog />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'resume' && <Resume />}
      </main>

      <footer className={`fixed bottom-0 w-full py-4 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      } border-t border-gray-200 dark:border-gray-700 backdrop-blur-lg bg-opacity-70`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm">© 2024 Sawan Pandita. All rights reserved.</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/sawan18" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sawanpandita/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sawan.panditabizz@gmail.com" 
              className="hover:text-blue-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
