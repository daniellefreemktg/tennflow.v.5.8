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
    title: 'The Smarter Way to Find and List Local Businesses in Georgia and Tennessee:',
    excerpt: "TennFlow's AI Business Directory Launch",
    author: 'Danielle C. Freeman',
    date: '2025-06-15',
    image: 'https://images.pexels.com/photos/6147365/pexels-photo-6147365.jpeg',
    category: 'Technology',
    businessMentioned: 'TennFlow',
    link: 'https://mysticc34d7b070b.wordpress.com/2025/05/29/hello-world/'
  },
  {
    id: '2',
    title: 'TennFlow Tutorial',
    excerpt: 'How to Find Your Perfect Match for Businesses within Atlanta & Tennessee in a way that’s Fast, Simple, and Private',
    author: 'Danielle C. Freeman',
    date: '2025-06-15',
    image: 'https://images.pexels.com/photos/5905853/pexels-photo-5905853.jpeg',
    category: 'Technology',
    businessMentioned: 'TennFlow',
    link: 'https://mysticc34d7b070b.wordpress.com/2025/06/15/how-to-find-your-perfect-match-for-businesses-within-georgia-tennessee-in-a-way-thats-fast-simple-and-private/'
  },
  {
    id: '3',
    title: 'A Beginner’s Guide to Finding Your Perfect Business Match with AI Technology & The 5 Key Benefits Doing so',
    excerpt: 'Discover how TennFlow, an AI-powered Georgia and Tennessee business directory, helps you find your perfect local business match—fast, private, and personalized.',
    author: 'Danielle C. Freeman',
    date: '2025-06-15',
    image: 'https://images.pexels.com/photos/30840740/pexels-photo-30840740/free-photo-of-remote-work-with-laptop-and-smartphone.jpeg',
    category: 'Technology',
    businessMentioned: 'TennFlow',
    link: 'https://mysticc34d7b070b.wordpress.com/2025/06/15/a-beginners-guide-to-finding-your-perfect-business-match-with-ai-technology-the-5-key-benefits-doing-so/'
  },
    {
    id: '4',
    title: 'Business Search Made Simple:',
    excerpt: 'Why Privacy-First AI Matchmaking Is the Future',
    author: 'Danielle C. Freeman',
    date: '2025-06-15',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    category: 'Technology',
    businessMentioned: 'TennFlow',
    link: 'https://mysticc34d7b070b.wordpress.com/2025/06/15/business-search-made-simple-why-privacy-first-ai-matchmaking-is-the-future/'
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
