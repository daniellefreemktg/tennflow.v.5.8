import { Business } from '../types';

export const sampleBusinesses: Business[] = [
  {
    id: '1',
    name: "Donye's Accounting",
    category: 'Bookkeeping & Tax Preparation',
    description: "Donye's Accounting delivers accurate, timely tax preparation, bookkeeping, and financial advisory services with exceptional customer care you can trust.",
    address: 'Remote',
    city: 'Augusta',
    state: 'GA',
    phone: '706-580-1425',
    website: "bit.ly/Donye'sAccounting",
    image: 'https://21232812.fs1.hubspotusercontent-na1.net/hubfs/21232812/Photo_1629485026494-1-modified.png',
    tags: ['finance', 'accounting', 'taxes', 'money', 'advisory', 'preperation'],
    aiPreference: {
      niche: ['finance', 'accounting', 'taxes', 'money', 'advisory', 'preperation'],
      weight: 35
    }
  },
  {
  id: '2',
    name: 'Sample',
    category: 'Business Services',
    description: 'Full-service IT consulting and managed services provider helping small businesses across Tennessee with technology needs.',
    address: '101 Market Street',
    city: 'Knoxville',
    state: 'TN',
    zip: '37902',
    phone: '(865) 555-4567',
    email: 'sample.com',
    website: 'www.volunteertech.com',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    tags: ['technology', 'it services', 'consulting', 'computer repair', 'business'],
    aiPreference: {
      niche: ['it services', 'technology', 'computer repair', 'business consulting', 'tech support', 'software', 'hardware', 'network', 'cybersecurity'],
      weight: 25
    }
  },
  {
    id: '3',
    name: 'Memphis BBQ Kitchen',
    category: 'Food & Dining',
    description: 'Award-winning BBQ restaurant serving authentic Memphis-style ribs, pulled pork, and all the fixings since 1982.',
    address: '789 Beale Street',
    city: 'Memphis',
    state: 'TN',
    zip: '38103',
    phone: '(901) 555-3456',
    email: 'sample.com',
    website: 'www.memphisbbqkitchen.com',
    image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg',
    tags: ['restaurant', 'bbq', 'memphis', 'food', 'catering', 'southern food'],
    aiPreference: {
      niche: ['bbq', 'barbecue', 'ribs', 'pulled pork', 'southern food', 'memphis bbq', 'restaurant', 'dining', 'food', 'eat'],
      weight: 40
    }
  },
  {
    id: '4',
    name: 'Volunteer Tech Solutions',
    category: 'Business Services',
    description: 'Full-service IT consulting and managed services provider helping small businesses across Tennessee with technology needs.',
    address: '101 Market Street',
    city: 'Knoxville',
    state: 'TN',
    zip: '37902',
    phone: '(865) 555-4567',
    email: 'sample.com',
    website: 'www.volunteertech.com',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    tags: ['technology', 'it services', 'consulting', 'computer repair', 'business'],
    aiPreference: {
      niche: ['it services', 'technology', 'computer repair', 'business consulting', 'tech support', 'software', 'hardware', 'network', 'cybersecurity'],
      weight: 25
    }
  },
  {
    id: '5',
    name: 'Tennessee Wellness Center',
    category: 'Health & Wellness',
    description: 'Comprehensive health center offering medical care, physical therapy, and holistic wellness services for the whole family.',
    address: '222 Health Blvd',
    city: 'Chattanooga',
    state: 'TN',
    zip: '37405',
    phone: '(423) 555-5678',
    email: 'sample.com',
    website: 'www.tnwellnesscenter.com',
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
    tags: ['healthcare', 'wellness', 'therapy', 'medical', 'fitness', 'holistic'],
    aiPreference: {
      niche: ['wellness', 'healthcare', 'therapy', 'holistic health', 'fitness', 'medical', 'health', 'healing', 'treatment', 'rehabilitation'],
      weight: 35
    }
  },
  {
    id: '6',
    name: 'Franklin Heritage Homes',
    category: 'Real Estate',
    description: 'Family-owned real estate agency specializing in historic properties and new construction in Franklin and surrounding areas.',
    address: '333 Main Street',
    city: 'Franklin',
    state: 'TN',
    zip: '37064',
    phone: '(615) 555-6789',
    email: 'sample.com',
    website: 'www.franklinheritage.com',
    image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
    tags: ['real estate', 'homes', 'historic', 'properties', 'franklin', 'construction'],
    aiPreference: {
      niche: ['real estate', 'historic homes', 'properties', 'construction', 'franklin', 'house', 'home buying', 'housing', 'property'],
      weight: 30
    }
  },
  {
    id: '7',
    name: 'Helping Hands Community Center',
    category: 'Non-Profit & Volunteer',
    description: 'Community center coordinating volunteer opportunities and social services across the Southeast, connecting volunteers with meaningful projects.',
    address: '444 Volunteer Way',
    city: 'Atlanta',
    state: 'GA',
    zip: '30303',
    phone: '(404) 555-7890',
    email: 'sample.com',
    website: 'www.helpinghandscc.org',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    tags: ['volunteer', 'community service', 'non-profit', 'charity', 'social services', 'helping'],
    aiPreference: {
      niche: ['volunteer', 'volunteering', 'community service', 'help', 'charity', 'non-profit', 'giving back', 'community', 'social work', 'assistance'],
      weight: 45
    }
  },
  {
    id: '8',
    name: 'Carolina Youth Mentors',
    category: 'Non-Profit & Volunteer',
    description: 'Youth mentoring organization providing volunteer opportunities for adults to make a difference in young lives across the Carolinas.',
    address: '555 Mentor Lane',
    city: 'Charlotte',
    state: 'NC',
    zip: '28202',
    phone: '(704) 555-8901',
    email: 'sample.com',
    website: 'www.carolinayouthmentors.org',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg',
    tags: ['volunteer', 'youth', 'mentoring', 'education', 'community', 'teaching'],
    aiPreference: {
      niche: ['volunteer', 'mentoring', 'youth', 'education', 'teaching', 'community service', 'children', 'tutoring', 'guidance', 'coaching'],
      weight: 40
    }
  },
  {
    id: '9',
    name: 'Southeast Animal Sanctuary',
    category: 'Non-Profit & Volunteer',
    description: 'Animal rescue organization seeking volunteers to help care for rescued animals and support adoption events throughout the Southeast.',
    address: '666 Rescue Road',
    city: 'Birmingham',
    state: 'AL',
    zip: '35203',
    phone: '(205) 555-9012',
    email: 'sample.com',
    website: 'www.southeastanimalsanctuary.org',
    image: 'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg',
    tags: ['volunteer', 'animals', 'rescue', 'pets', 'adoption', 'sanctuary'],
    aiPreference: {
      niche: ['volunteer', 'animal rescue', 'pets', 'animals', 'shelter', 'adoption', 'care', 'sanctuary', 'wildlife', 'conservation'],
      weight: 35
    }
  }
];
