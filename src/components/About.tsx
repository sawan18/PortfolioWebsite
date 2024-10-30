import { Code2, Rocket, Coffee } from 'lucide-react';
import myPic from '../assets/myPic.jpg';

const About = () => {
  return (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center space-y-4">
      <img
        src={myPic}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />
        <h1 className="text-4xl font-bold">Sawan Pandita</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Senior Software Engineer</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          I'm a passionate software engineer with over 5 years of experience building web applications
          and scalable systems. I specialize in React, TypeScript, and Node.js, with a strong focus
          on creating beautiful, performant user experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
          <Code2 className="w-12 h-12 mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Writing maintainable, scalable, and well-documented code is my passion.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
          <Rocket className="w-12 h-12 mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Performance</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Optimizing for the best possible user experience and load times.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
          <Coffee className="w-12 h-12 mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tackling complex challenges with creative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;