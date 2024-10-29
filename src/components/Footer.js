import React from 'react';
import { Github, Twitter, Linkedin, Rss } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-100 py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6">
            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="/rss.xml" icon={<Rss className="w-5 h-5" />} />
          </div>
          <p className="text-sm text-gray-500">
            © {currentYear} SAWAN PANDITA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
