import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Giants Inc.',
    position: 'Senior Software Engineer',
    period: '2022 - Present',
    description: 'Leading the frontend development team, implementing new features, and improving application performance.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    company: 'Startup Hub',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on scalable architecture and clean code.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker'],
  },
  {
    company: 'Digital Solutions Co.',
    position: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Built responsive web applications and implemented UI/UX designs.',
    technologies: ['JavaScript', 'Vue.js', 'CSS3', 'Webpack'],
  },
];

const Experience = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-bold">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Building2 size={20} className="text-blue-500" />
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{exp.position}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;