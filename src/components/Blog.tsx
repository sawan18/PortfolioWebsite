import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper architecture and state management.',
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop',
  },
  {
    title: 'Mastering TypeScript',
    excerpt: 'A comprehensive guide to using TypeScript effectively in your projects.',
    date: '2024-03-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop',
  },
];

const Blog = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-bold">Latest Posts</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-1"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;