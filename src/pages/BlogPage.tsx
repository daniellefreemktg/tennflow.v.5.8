import React from 'react';
import { Calendar, User, ArrowRight, Building2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  businessMentioned: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 BBQ Joints in Memphis You Can\'t Miss',
    excerpt: 'Discover the most authentic and mouth-watering BBQ spots that make Memphis a food lover\'s paradise.',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
    category: 'Food & Dining',
    businessMentioned: 'Memphis BBQ Kitchen',
    link: '/blog/top-10-bbq-joints-memphis'
  },
  {
    id: '2',
    title: 'Nashville\'s Hidden Music Venues: Local\'s Guide',
    excerpt: 'Beyond the famous Broadway, these lesser-known music spots offer authentic Nashville experiences.',
    author: 'Mike Thompson',
    date: '2024-03-12',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    category: 'Music & Entertainment',
    businessMentioned: 'Nashville Harmony Music Shop',
    link: '/blog/nashville-hidden-music-venues'
  },
  {
    id: '3',
    title: 'Exploring the Great Smoky Mountains: Business Owner\'s Guide',
    excerpt: 'Local business owners share their tips for making the most of Tennessee\'s natural wonder.',
    author: 'Emily Chen',
    date: '2024-03-10',
    image: 'https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg',
    category: 'Outdoor & Recreation',
    businessMentioned: 'Smoky Mountain Outfitters',
    link: '/blog/smoky-mountains-business-guide'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream/50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cursive text-4xl text-navy text-center mb-12">TennFlow Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold bg-gold/20 text-navy px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-navy mb-3">{post.title}</h2>
                <p className="text-navy/70 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-navy/60 mb-2">
                  <User size={16} className="mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar size={16} className="mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-navy/60 mb-4">
                  <Building2 size={16} className="mr-1" />
                  <span className="mr-1">Business Mentioned:</span>
                  <span className="font-medium text-navy">{post.businessMentioned}</span>
                </div>
                <a 
                  href={post.link}
                  className="flex items-center text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;