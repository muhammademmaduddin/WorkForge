export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  tone: string;
};

export type WorkHistoryItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  clientId: string;
  description: string;
  category: string;
  type: string;
  jobType: string;
  budget: string;
  budgetMin: number;
  budgetMax: number;
  budgetType: 'fixed' | 'hourly';
  posted: string;
  postedAt: string;
  proposals: number;
  tags: string[];
  skills: string[];
  location: string;
  remote: boolean;
  availability: string;
  experience: string;
  timeline: string;
  featured?: boolean;
};

export type Freelancer = {
  id: string;
  name: string;
  initials: string;
  role: string;
  location: string;
  timezone: string;
  rate: string;
  hourlyRate: number;
  rating: number;
  reviews: number;
  availability: string;
  availabilityKey: 'now' | 'month' | 'later';
  bio: string;
  skills: string[];
  languages: string[];
  accent: string;
  verified?: boolean;
  projects: number;
  experience: string;
  responseTime: string;
  portfolio: PortfolioItem[];
  workHistory: WorkHistoryItem[];
};

export type Client = {
  id: string;
  name: string;
  initials: string;
  description: string;
  location: string;
  timezone: string;
  accent: string;
  verified: boolean;
  memberSince: string;
  jobsPosted: number;
  activeJobs: number;
  completedProjects: number;
  rating: number;
  reviews: number;
  typicalBudget: string;
  responseRate: string;
  hiringHistory: string;
  reviewsFromFreelancers: Array<{ quote: string; author: string }>;
};

export type Proposal = {
  id: string;
  jobId: string;
  freelancerId: string;
  price: number;
  timeline: string;
  coverLetter: string;
  status: 'New' | 'Shortlisted' | 'Rejected' | 'Hired';
  submitted: string;
  milestones: string[];
  portfolioIds: string[];
};

export type Conversation = {
  id: string;
  name: string;
  initials: string;
  preview: string;
  time: string;
  unread: number;
  accent: string;
  role: string;
};

export type Notification = {
  id: string;
  type: 'proposal' | 'message' | 'recommendation' | 'shortlist' | 'project' | 'deadline' | 'profile';
  title: string;
  body: string;
  time: string;
  unread: boolean;
  href: string;
};

export const categories = [
  { name: 'Design & Creative', count: '2,480', mark: 'UI', color: 'bg-[#d8eee6]' },
  { name: 'Development & IT', count: '3,210', mark: '</>', color: 'bg-[#f4dfaf]' },
  { name: 'Writing & Content', count: '1,860', mark: 'Aa', color: 'bg-[#f0d5d1]' },
  { name: 'Sales & Marketing', count: '1,140', mark: '↗', color: 'bg-[#d7e4ed]' },
];

export const allSkills = ['Product design', 'Figma', 'Mobile', 'React', 'TypeScript', 'Data viz', 'Copywriting', 'Research', 'Editorial', 'Brand identity', 'Art direction', 'Web', 'Lifecycle', 'Strategy', 'B2B SaaS', 'Illustration', 'Publishing', 'SEO', 'Analytics'];

export const jobs: Job[] = [
  {
    id: 'northstar',
    title: 'Product designer for a calmer finance app',
    company: 'Northstar Labs',
    clientId: 'northstar',
    description: 'We are building a mobile finance companion that makes money feel less intimidating. Looking for a product designer to shape the next release from first sketch to shipped screens.',
    category: 'Design & Creative',
    type: 'Contract',
    jobType: 'Project',
    budget: '$4,800 – $6,200',
    budgetMin: 4800,
    budgetMax: 6200,
    budgetType: 'fixed',
    posted: '2h ago',
    postedAt: '2026-08-15T08:00:00Z',
    proposals: 12,
    tags: ['Product design', 'Figma', 'Mobile'],
    skills: ['Product design', 'Figma', 'Mobile'],
    location: 'Remote · Americas',
    remote: true,
    availability: 'Start this month',
    experience: 'Senior',
    timeline: '6–8 weeks',
    featured: true,
  },
  {
    id: 'fieldnotes',
    title: 'Editorial writer for a climate research series',
    company: 'Field Notes Journal',
    clientId: 'fieldnotes',
    description: 'Turn dense climate research into clear, human stories. You will work alongside scientists and an editor on a six-part editorial series.',
    category: 'Writing & Content',
    type: 'Part-time',
    jobType: 'Ongoing',
    budget: '$2,400 fixed',
    budgetMin: 2400,
    budgetMax: 2400,
    budgetType: 'fixed',
    posted: '5h ago',
    postedAt: '2026-08-15T05:00:00Z',
    proposals: 8,
    tags: ['Copywriting', 'Research', 'Editorial'],
    skills: ['Copywriting', 'Research', 'Editorial'],
    location: 'Remote · Worldwide',
    remote: true,
    availability: 'Start this month',
    experience: 'Mid-level',
    timeline: '3 months',
  },
  {
    id: 'ledger',
    title: 'Senior React engineer for a B2B dashboard',
    company: 'Ledgerline',
    clientId: 'ledgerline',
    description: 'Our small team needs a senior frontend partner to make a complex operations dashboard feel fast, legible, and dependable.',
    category: 'Development & IT',
    type: 'Contract',
    jobType: 'Ongoing',
    budget: '$85 – $110 / hr',
    budgetMin: 85,
    budgetMax: 110,
    budgetType: 'hourly',
    posted: '1d ago',
    postedAt: '2026-08-14T09:00:00Z',
    proposals: 19,
    tags: ['React', 'TypeScript', 'Data viz'],
    skills: ['React', 'TypeScript', 'Data viz'],
    location: 'Remote · US time zones',
    remote: true,
    availability: 'Start this month',
    experience: 'Senior',
    timeline: '3–4 months',
    featured: true,
  },
  {
    id: 'morrow',
    title: 'Brand refresh for an independent hotel group',
    company: 'Morrow House',
    clientId: 'morrow',
    description: 'A thoughtful brand system for three small hotels in the Pacific Northwest. We have the story; you bring the visual language.',
    category: 'Design & Creative',
    type: 'Project',
    jobType: 'Project',
    budget: '$7,500 fixed',
    budgetMin: 7500,
    budgetMax: 7500,
    budgetType: 'fixed',
    posted: '1d ago',
    postedAt: '2026-08-14T07:00:00Z',
    proposals: 23,
    tags: ['Brand identity', 'Art direction', 'Web'],
    skills: ['Brand identity', 'Art direction', 'Web'],
    location: 'Portland, OR',
    remote: false,
    availability: 'Start next month',
    experience: 'Senior',
    timeline: '8–10 weeks',
  },
  {
    id: 'orbit',
    title: 'Lifecycle email strategist for a growing SaaS',
    company: 'Orbit Health',
    clientId: 'orbit',
    description: 'Map the customer journey and create a lifecycle system that feels useful, not noisy. A mix of strategy, copy, and measurement.',
    category: 'Sales & Marketing',
    type: 'Contract',
    jobType: 'Project',
    budget: '$65 – $80 / hr',
    budgetMin: 65,
    budgetMax: 80,
    budgetType: 'hourly',
    posted: '2d ago',
    postedAt: '2026-08-13T10:00:00Z',
    proposals: 15,
    tags: ['Lifecycle', 'Strategy', 'B2B SaaS'],
    skills: ['Lifecycle', 'Strategy', 'B2B SaaS'],
    location: 'Remote · Worldwide',
    remote: true,
    availability: 'Start this month',
    experience: 'Mid-level',
    timeline: '4–6 weeks',
  },
  {
    id: 'kindred',
    title: 'Illustrator for a picture book about belonging',
    company: 'Kindred Press',
    clientId: 'kindred',
    description: 'Looking for a visual storyteller with a distinctive point of view and a soft spot for small details. 32 pages, generous timeline.',
    category: 'Design & Creative',
    type: 'Project',
    jobType: 'Project',
    budget: '$5,000 fixed',
    budgetMin: 5000,
    budgetMax: 5000,
    budgetType: 'fixed',
    posted: '3d ago',
    postedAt: '2026-08-12T10:00:00Z',
    proposals: 31,
    tags: ['Illustration', 'Publishing', 'Visual storytelling'],
    skills: ['Illustration', 'Publishing', 'Visual storytelling'],
    location: 'Remote · Worldwide',
    remote: true,
    availability: 'Start next month',
    experience: 'Mid-level',
    timeline: '4 months',
  },
];

export const freelancers: Freelancer[] = [
  {
    id: 'maya',
    name: 'Maya Chen',
    initials: 'MC',
    role: 'Product designer & systems thinker',
    location: 'Brooklyn, NY',
    timezone: 'Eastern Time',
    rate: '$95 / hr',
    hourlyRate: 95,
    rating: 4.98,
    reviews: 42,
    availability: 'Available this month',
    availabilityKey: 'month',
    bio: 'I help ambitious teams turn complicated products into experiences people understand on the first try. Seven years in fintech, healthcare, and tools for makers.',
    skills: ['Product strategy', 'UX/UI', 'Design systems', 'Prototyping'],
    languages: ['English', 'Mandarin'],
    accent: 'from-[#d7efe7] to-[#f7d9bc]',
    verified: true,
    projects: 68,
    experience: '7+ years',
    responseTime: 'Usually replies within 4 hours',
    portfolio: [
      { id: 'maya-finance', title: 'Making money feel less intimidating', client: 'Northstar Labs', category: 'Product design', description: 'A calmer transfer and budgeting system for first-time investors.', tone: 'from-[#bfe5d7] to-[#f1d3b2]' },
      { id: 'maya-care', title: 'A care plan people can understand', client: 'Kindred Health', category: 'Service design', description: 'Turning a complex care journey into clear next steps.', tone: 'from-[#d3d9f0] to-[#f3cbc8]' },
    ],
    workHistory: [
      { title: 'Lead product designer', company: 'Northstar Labs', period: '2022 — Present', description: 'Owns product direction across mobile finance experiences.' },
      { title: 'Senior designer', company: 'Cedar & Co.', period: '2019 — 2022', description: 'Built a design system used by five product teams.' },
    ],
  },
  {
    id: 'jonas',
    name: 'Jonas Richter',
    initials: 'JR',
    role: 'Full-stack engineer · React specialist',
    location: 'Berlin, Germany',
    timezone: 'Central European Time',
    rate: '$110 / hr',
    hourlyRate: 110,
    rating: 5,
    reviews: 27,
    availability: 'Available now',
    availabilityKey: 'now',
    bio: 'Pragmatic engineer with a taste for elegant interfaces. I partner with product teams from technical discovery through the last production detail.',
    skills: ['React', 'TypeScript', 'Node.js', 'Postgres'],
    languages: ['English', 'German'],
    accent: 'from-[#f5dfad] to-[#e8c8cb]',
    verified: true,
    projects: 44,
    experience: '9+ years',
    responseTime: 'Usually replies within 2 hours',
    portfolio: [
      { id: 'jonas-ops', title: 'Operations, without the overwhelm', client: 'Ledgerline', category: 'Frontend engineering', description: 'A fast, legible operations dashboard for distributed teams.', tone: 'from-[#f5dfad] to-[#c7dadd]' },
      { id: 'jonas-api', title: 'The quiet power behind a busy product', client: 'Field Notes Journal', category: 'Full-stack build', description: 'A resilient editorial workflow for a growing publication.', tone: 'from-[#d7efe7] to-[#d4d9f0]' },
    ],
    workHistory: [
      { title: 'Staff frontend engineer', company: 'Ledgerline', period: '2021 — Present', description: 'Leads frontend architecture and product delivery.' },
      { title: 'Full-stack engineer', company: 'Morrow House', period: '2017 — 2021', description: 'Built customer-facing products for hospitality teams.' },
    ],
  },
  {
    id: 'aisha',
    name: 'Aisha Bello',
    initials: 'AB',
    role: 'Brand strategist & copywriter',
    location: 'London, UK',
    timezone: 'British Time',
    rate: '$78 / hr',
    hourlyRate: 78,
    rating: 4.96,
    reviews: 35,
    availability: 'Available in 2 weeks',
    availabilityKey: 'later',
    bio: 'I find the sharpest version of a brand’s story, then build the words and systems to make it travel. Mostly B2B, always human.',
    skills: ['Brand strategy', 'Positioning', 'Copywriting', 'Voice'],
    languages: ['English', 'Yoruba', 'French'],
    accent: 'from-[#f1cdd7] to-[#d6e6ef]',
    projects: 51,
    experience: '8+ years',
    responseTime: 'Usually replies within a day',
    portfolio: [{ id: 'aisha-orbit', title: 'A useful voice for a growing product', client: 'Orbit Health', category: 'Brand strategy', description: 'Positioning and lifecycle language for a human healthcare SaaS.', tone: 'from-[#f1cdd7] to-[#f5dfad]' }],
    workHistory: [{ title: 'Independent strategist', company: 'WorkForge', period: '2018 — Present', description: 'Helps thoughtful companies sound like themselves.' }],
  },
  {
    id: 'rafa',
    name: 'Rafael Torres',
    initials: 'RT',
    role: 'Motion designer & visual director',
    location: 'Mexico City, MX',
    timezone: 'Central Time',
    rate: '$72 / hr',
    hourlyRate: 72,
    rating: 4.94,
    reviews: 18,
    availability: 'Available this month',
    availabilityKey: 'month',
    bio: 'Motion, visual systems, and a little delightful weirdness for teams that want to be remembered without shouting.',
    skills: ['Motion design', '3D', 'Art direction', 'Lottie'],
    languages: ['English', 'Spanish'],
    accent: 'from-[#f5d8aa] to-[#c7dadd]',
    verified: true,
    projects: 29,
    experience: '6+ years',
    responseTime: 'Usually replies within 6 hours',
    portfolio: [{ id: 'rafa-kindred', title: 'Belonging, in motion', client: 'Kindred Press', category: 'Motion design', description: 'A tactile campaign system for a picture book launch.', tone: 'from-[#f5d8aa] to-[#d9ebdb]' }],
    workHistory: [{ title: 'Visual director', company: 'Kindred Press', period: '2020 — Present', description: 'Creates moving stories for culture and commerce.' }],
  },
  {
    id: 'elin',
    name: 'Elin Berg',
    initials: 'EB',
    role: 'Researcher & service designer',
    location: 'Stockholm, Sweden',
    timezone: 'Central European Time',
    rate: '$88 / hr',
    hourlyRate: 88,
    rating: 4.99,
    reviews: 22,
    availability: 'Available now',
    availabilityKey: 'now',
    bio: 'I make the invisible visible: the needs, frictions, and small moments that help a service earn trust.',
    skills: ['User research', 'Service design', 'Workshops', 'Strategy'],
    languages: ['English', 'Swedish'],
    accent: 'from-[#d4d9f0] to-[#e5edc9]',
    projects: 37,
    experience: '10+ years',
    responseTime: 'Usually replies within 3 hours',
    portfolio: [{ id: 'elin-care', title: 'Finding the moments that matter', client: 'Kindred Health', category: 'User research', description: 'A field study that changed the shape of a national care service.', tone: 'from-[#d4d9f0] to-[#d7efe7]' }],
    workHistory: [{ title: 'Service design partner', company: 'Northstar Labs', period: '2016 — Present', description: 'Leads research and alignment workshops for complex services.' }],
  },
  {
    id: 'devon',
    name: 'Devon Okafor',
    initials: 'DO',
    role: 'Growth marketer for thoughtful products',
    location: 'Austin, TX',
    timezone: 'Central Time',
    rate: '$68 / hr',
    hourlyRate: 68,
    rating: 4.91,
    reviews: 16,
    availability: 'Available next month',
    availabilityKey: 'later',
    bio: 'Sustainable growth for products with something real to say. I connect clear strategy to the experiments that prove it.',
    skills: ['Growth strategy', 'SEO', 'Analytics', 'Content'],
    languages: ['English'],
    accent: 'from-[#d9ebdb] to-[#f3d0bd]',
    projects: 24,
    experience: '5+ years',
    responseTime: 'Usually replies within a day',
    portfolio: [{ id: 'devon-fieldnotes', title: 'Finding the readers who care', client: 'Field Notes Journal', category: 'Growth strategy', description: 'A sustainable acquisition system for an independent publication.', tone: 'from-[#d9ebdb] to-[#f3d0bd]' }],
    workHistory: [{ title: 'Growth partner', company: 'Field Notes Journal', period: '2021 — Present', description: 'Builds useful growth systems for independent teams.' }],
  },
];

export const clients: Client[] = [
  {
    id: 'northstar',
    name: 'Northstar Labs',
    initials: 'N',
    description: 'We build calm, useful tools for people making important decisions about their money. Small team, high care, no unnecessary noise.',
    location: 'New York, NY',
    timezone: 'Eastern Time',
    accent: 'bg-[#f5dfad]',
    verified: true,
    memberSince: '2021',
    jobsPosted: 18,
    activeJobs: 2,
    completedProjects: 14,
    rating: 4.9,
    reviews: 14,
    typicalBudget: '$4k – $12k',
    responseRate: '95%',
    hiringHistory: '12 independent professionals hired',
    reviewsFromFreelancers: [
      { quote: 'Clear brief, kind feedback, and a team that makes room for good thinking.', author: 'Maya Chen · Product designer' },
      { quote: 'Northstar understands that the best work is a conversation, not a handoff.', author: 'Jonas Richter · Engineer' },
    ],
  },
  {
    id: 'fieldnotes',
    name: 'Field Notes Journal',
    initials: 'FN',
    description: 'An independent publication making research, climate, and culture easier to understand and harder to ignore.',
    location: 'London, UK',
    timezone: 'British Time',
    accent: 'bg-[#d6e6ef]',
    verified: true,
    memberSince: '2022',
    jobsPosted: 11,
    activeJobs: 1,
    completedProjects: 9,
    rating: 4.8,
    reviews: 9,
    typicalBudget: '$2k – $8k',
    responseRate: '89%',
    hiringHistory: '8 independent professionals hired',
    reviewsFromFreelancers: [{ quote: 'They care deeply about the work and make collaboration feel generous.', author: 'Aisha Bello · Strategist' }],
  },
  {
    id: 'ledgerline',
    name: 'Ledgerline',
    initials: 'L',
    description: 'Operations software for teams who want to spend less time chasing updates and more time moving work forward.',
    location: 'Chicago, IL',
    timezone: 'Central Time',
    accent: 'bg-[#d8eee6]',
    verified: true,
    memberSince: '2020',
    jobsPosted: 22,
    activeJobs: 3,
    completedProjects: 19,
    rating: 4.95,
    reviews: 19,
    typicalBudget: '$8k – $25k',
    responseRate: '97%',
    hiringHistory: '16 independent professionals hired',
    reviewsFromFreelancers: [{ quote: 'A decisive team with a real respect for craft and clarity.', author: 'Jonas Richter · Engineer' }],
  },
  {
    id: 'morrow',
    name: 'Morrow House',
    initials: 'M',
    description: 'A small collection of independent hotels built around local stories, unhurried stays, and thoughtful details.',
    location: 'Portland, OR',
    timezone: 'Pacific Time',
    accent: 'bg-[#f1cdd7]',
    verified: false,
    memberSince: '2023',
    jobsPosted: 7,
    activeJobs: 1,
    completedProjects: 5,
    rating: 4.7,
    reviews: 5,
    typicalBudget: '$5k – $15k',
    responseRate: '84%',
    hiringHistory: '5 independent professionals hired',
    reviewsFromFreelancers: [{ quote: 'A clear sense of place and a refreshing amount of trust.', author: 'Rafael Torres · Motion designer' }],
  },
  {
    id: 'orbit',
    name: 'Orbit Health',
    initials: 'O',
    description: 'A growing healthcare SaaS helping care teams make every follow-up more useful for the people they serve.',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time',
    accent: 'bg-[#d9ebdb]',
    verified: true,
    memberSince: '2022',
    jobsPosted: 13,
    activeJobs: 1,
    completedProjects: 11,
    rating: 4.86,
    reviews: 11,
    typicalBudget: '$3k – $18k',
    responseRate: '92%',
    hiringHistory: '10 independent professionals hired',
    reviewsFromFreelancers: [{ quote: 'Fast decisions and a strong instinct for useful work.', author: 'Aisha Bello · Strategist' }],
  },
  {
    id: 'kindred',
    name: 'Kindred Press',
    initials: 'K',
    description: 'A small publishing house for books that help young readers see more of themselves and each other.',
    location: 'Toronto, Canada',
    timezone: 'Eastern Time',
    accent: 'bg-[#f5d8aa]',
    verified: true,
    memberSince: '2021',
    jobsPosted: 10,
    activeJobs: 2,
    completedProjects: 8,
    rating: 4.92,
    reviews: 8,
    typicalBudget: '$4k – $10k',
    responseRate: '91%',
    hiringHistory: '7 independent professionals hired',
    reviewsFromFreelancers: [{ quote: 'The brief was thoughtful, and the process stayed human from start to finish.', author: 'Rafael Torres · Motion designer' }],
  },
];

export const proposals: Proposal[] = [
  { id: 'proposal-maya', jobId: 'northstar', freelancerId: 'maya', price: 5600, timeline: '7 weeks', coverLetter: 'I have spent the last seven years making complex financial products feel clear and human. I would start with the moments where confidence matters most, then carry that thinking through the shipped system.', status: 'Shortlisted', submitted: 'Today', milestones: ['Discovery and flow mapping', 'Prototype and usability pass', 'Production-ready handoff'], portfolioIds: ['maya-finance'] },
  { id: 'proposal-jonas', jobId: 'northstar', freelancerId: 'jonas', price: 6100, timeline: '8 weeks', coverLetter: 'The product idea is close to the work I enjoy most: creating reliable moments of clarity in systems that can otherwise feel intimidating. I would love to bring a product and engineering lens to the partnership.', status: 'New', submitted: 'Today', milestones: ['Product discovery', 'Design collaboration', 'Implementation support'], portfolioIds: ['jonas-ops'] },
  { id: 'proposal-aisha', jobId: 'northstar', freelancerId: 'aisha', price: 5200, timeline: '6 weeks', coverLetter: 'I can help shape the language and experience around the product so the calm you are designing is present in every touchpoint.', status: 'New', submitted: 'Yesterday', milestones: ['Voice and audience workshop', 'Content system', 'Launch-ready copy'], portfolioIds: ['aisha-orbit'] },
  { id: 'proposal-rafa', jobId: 'morrow', freelancerId: 'rafa', price: 7500, timeline: '9 weeks', coverLetter: 'The sense of place in this brief is exactly the kind of story I like to make visible. I would build a flexible motion and visual system that feels local, warm, and unmistakably yours.', status: 'New', submitted: 'Yesterday', milestones: ['Visual direction', 'Motion language', 'Handoff and rollout'], portfolioIds: ['rafa-kindred'] },
];

export const conversations: Conversation[] = [
  { id: 'maya', name: 'Maya Chen', initials: 'MC', preview: 'I added a thought on the onboarding flow...', time: '9:42 AM', unread: 2, accent: 'bg-[#d7efe7]', role: 'Product designer' },
  { id: 'ledger', name: 'Ledgerline team', initials: 'LL', preview: 'The brief is ready when you are.', time: 'Yesterday', unread: 0, accent: 'bg-[#f5dfad]', role: 'Client team' },
  { id: 'aisha', name: 'Aisha Bello', initials: 'AB', preview: 'That timeline works beautifully.', time: 'Mon', unread: 0, accent: 'bg-[#f1cdd7]', role: 'Brand strategist' },
  { id: 'fieldnotes', name: 'Field Notes Journal', initials: 'FN', preview: 'Thanks for sending this through.', time: 'Sun', unread: 0, accent: 'bg-[#d6e6ef]', role: 'Client team' },
];

export const notifications: Notification[] = [
  { id: 'n1', type: 'proposal', title: 'A new proposal came in', body: 'Jonas Richter applied to Product designer for a calmer finance app.', time: '18 minutes ago', unread: true, href: '/dashboard/client' },
  { id: 'n2', type: 'message', title: 'Maya sent you a message', body: 'I added a thought on the onboarding flow...', time: '1 hour ago', unread: true, href: '/messages' },
  { id: 'n3', type: 'shortlist', title: 'You were shortlisted', body: 'Northstar Labs moved your proposal into their shortlist.', time: '3 hours ago', unread: true, href: '/jobs/northstar' },
  { id: 'n4', type: 'recommendation', title: 'A new opportunity for you', body: 'A React role from Ledgerline matches three of your saved skills.', time: 'Yesterday', unread: false, href: '/jobs/ledger' },
  { id: 'n5', type: 'project', title: 'Project update requested', body: 'Orbit Health is waiting for a look at the latest lifecycle map.', time: 'Yesterday', unread: false, href: '/dashboard/freelancer' },
  { id: 'n6', type: 'deadline', title: 'A deadline is coming up', body: 'Your Morrow House discovery milestone is due Friday.', time: '2 days ago', unread: false, href: '/dashboard/freelancer' },
  { id: 'n7', type: 'profile', title: 'Your profile was viewed', body: 'A team in Development & IT viewed your profile.', time: '3 days ago', unread: false, href: '/settings' },
];