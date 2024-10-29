import React from 'react';
import { Download, BookOpen, Code2, Trophy } from 'lucide-react';

const Resume = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Download size={20} />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <BookOpen className="text-blue-500" />
            Education
          </h3>
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-4">
            <div>
              <h4 className="text-lg font-semibold">Master of Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400">Stanford University</p>
              <p className="text-sm text-gray-500">2016 - 2018</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Bachelor of Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400">MIT</p>
              <p className="text-sm text-gray-500">2012 - 2016</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Code2 className="text-blue-500" />
            Skills
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Next.js', 'Docker', 'AWS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-2 space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Trophy className="text-blue-500" />
            Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
              <p className="text-gray-600 dark:text-gray-400">Amazon Web Services</p>
              <p className="text-sm text-gray-500">2023</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold">Google Cloud Professional Developer</h4>
              <p className="text-gray-600 dark:text-gray-400">Google Cloud Platform</p>
              <p className="text-sm text-gray-500">2022</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;