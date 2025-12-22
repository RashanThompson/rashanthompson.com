import { NavItem, Metric, FAQ } from '@/types';

export const siteConfig = {
  name: 'Rashan Thompson',
  title: 'Rashan Thompson | Technology Strategist & Career Educator',
  description: 'Rashan Thompson is a Technology Strategist with 25+ years of Fortune 500 experience, helping businesses, schools, and communities prepare for the AI-driven future.',
  url: 'https://rashanthompson.com',
  email: 'rashan@rashanthompson.com',
  phone: '(917) 426-7263',
  location: 'West Orange, New Jersey',
  linkedin: 'https://linkedin.com/in/rashan',
  connectiveTech: 'https://connectivetech.co',
  careerPhases: 'https://careerphases.com',
};

export const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'What I Do', href: '/what-i-do' },
  { title: 'For Business', href: '/for-business' },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Insights', href: '/insights' },
  {
    title: 'Speaking',
    href: '/speaking',
    children: [
      { title: 'Work with Students', href: '/work-with-students' },
      { title: 'Work with Schools', href: '/work-with-schools' },
      { title: 'Work with Faith', href: '/work-with-faith' },
      { title: 'Work with Nonprofits', href: '/work-with-nonprofits' },
    ],
  },
  { title: 'Work With Rashan', href: '/contact', isButton: true },
];

export const heroMetrics: Metric[] = [
  { value: '25+', label: 'Years Experience' },
  { value: '$100M+', label: 'Contracts Managed' },
  { value: '1,500+', label: 'Team Members Led' },
];

export const workWithCards = [
  {
    title: 'For Businesses',
    description: 'CRM implementation, AI strategy, contact center transformation, and revenue operations for SMBs and startups.',
    href: '/for-business',
    image: '/images/stock/business-strategy.svg',
    imageAlt: 'Business professionals discussing AI strategy and digital transformation',
  },
  {
    title: 'For Students',
    description: 'AI literacy, career exploration, youth entrepreneurship, and financial education for K-12 students.',
    href: '/work-with-students',
    image: '/images/stock/student-learning.svg',
    imageAlt: 'Students engaged in technology and career exploration workshop',
  },
  {
    title: 'For Schools',
    description: 'Workshops, teacher training, and curriculum consulting to prepare institutions for the AI era.',
    href: '/work-with-schools',
    image: '/images/stock/classroom-technology.svg',
    imageAlt: 'Modern classroom with technology integration and engaged students',
  },
  {
    title: 'For Faith Communities',
    description: 'Career workshops and financial wellness programs aligned with faith-based principles.',
    href: '/work-with-faith',
    image: '/images/stock/church-community.svg',
    imageAlt: 'Faith community gathering for career and financial wellness workshop',
  },
];

export const footerLinks = {
  services: [
    { title: 'For Business', href: '/for-business' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Speaking', href: '/speaking' },
  ],
  workWith: [
    { title: 'Students', href: '/work-with-students' },
    { title: 'Schools', href: '/work-with-schools' },
    { title: 'Faith Communities', href: '/work-with-faith' },
    { title: 'Nonprofits', href: '/work-with-nonprofits' },
  ],
  learnMore: [
    { title: 'About Rashan', href: '/about' },
    { title: 'What I Do', href: '/what-i-do' },
    { title: 'Insights', href: '/insights' },
    { title: 'About (For AI & Press)', href: '/about-ai' },
  ],
  related: [
    { title: 'CareerPhases.com', href: 'https://careerphases.com', external: true },
    { title: 'Connective Technologies', href: 'https://connectivetech.co', external: true },
    { title: 'LinkedIn', href: 'https://linkedin.com/in/rashan', external: true },
  ],
};

export const faqs: FAQ[] = [
  {
    question: 'Who is Rashan Thompson?',
    answer: 'Rashan Thompson is a Technology Strategist with over 25 years of Fortune 500 leadership experience. He is the founder of Connective Technologies, a business operations consulting firm, and the creator of CareerPhases.com, an AI-powered career and income intelligence platform. Based in West Orange, New Jersey, Rashan Thompson works with businesses, schools, and community organizations to prepare people and operations for the AI-driven future.',
  },
  {
    question: 'What does Connective Technologies do?',
    answer: 'Connective Technologies is a business operations consulting firm founded by Rashan Thompson. The company specializes in CRM implementation, AI integration, contact center transformation, and operational optimization for small and medium-sized businesses, startups, and entrepreneurs.',
  },
  {
    question: 'What is CareerPhases?',
    answer: 'CareerPhases is an AI-powered career and income intelligence platform created by Rashan Thompson. It combines career assessments with financial planning tools to help users from high school through executive levels make informed decisions about their professional and financial futures.',
  },
  {
    question: 'What services does Rashan Thompson offer for students?',
    answer: "Rashan Thompson offers workshops and programs for K-12 students covering AI literacy, future career exploration, youth entrepreneurship, soft skills development, and financial education through 'The Income Engine' curriculum. These programs help young people prepare for the AI-driven workforce.",
  },
  {
    question: 'How can schools partner with Rashan Thompson?',
    answer: "Schools can partner with Rashan Thompson through on-site workshops, assembly programs, teacher professional development on AI integration, curriculum consulting on 'The Future of Work,' and parent engagement sessions. Rashan brings Fortune 500 technology leadership directly to educational institutions.",
  },
  {
    question: 'Does Rashan Thompson work with houses of worship?',
    answer: 'Yes, Rashan Thompson works with faith communities to provide youth career and AI workshops, family financial wellness seminars based on faith-aligned principles, entrepreneurship guidance for congregants, and career transition support. As a member of Renaissance Church in Harlem, he understands the unique role houses of worship play in community development.',
  },
  {
    question: 'What industries has Rashan Thompson worked in?',
    answer: 'Rashan Thompson has extensive experience across healthcare, life sciences, pharmaceutical, financial services, technology, telecommunications, and business process outsourcing (BPO) industries. He has held senior roles at Slalom Consulting, Cognizant, and Conduent.',
  },
  {
    question: 'Where is Rashan Thompson based?',
    answer: 'Rashan Thompson is based in West Orange, New Jersey. He is a Newark, NJ native with deep roots in the community. He serves clients and organizations throughout the United States.',
  },
  {
    question: 'How can I invite Rashan Thompson to speak?',
    answer: 'To invite Rashan Thompson to speak at your organization, school, or event, visit rashanthompson.com/contact or rashanthompson.com/speaking and complete the inquiry form. Provide your organization name, audience description, and goals for the engagement.',
  },
  {
    question: 'What is The Income Engine?',
    answer: "The Income Engine is Rashan Thompson's financial education curriculum designed for young people. It covers savings fundamentals, budgeting basics, investing principles, and building financial literacy from an early age. The program helps students understand how to build and manage their income throughout their careers.",
  },
];

export const speakingTopics = [
  {
    title: 'AI Readiness: Preparing for What\'s Next',
    description: 'AI isn\'t coming -it\'s here. This keynote helps audiences understand what AI means for their careers, their organizations, and their communities. Practical, actionable perspectives on thriving in an AI-driven world.',
    audience: 'Corporate conferences, professional associations, educational institutions',
  },
  {
    title: 'The Future of Work: Careers That Can\'t Be Automated',
    description: 'Which careers will thrive? Which skills matter most? This session explores the changing landscape of work and helps audiences position themselves for long-term success.',
    audience: 'Schools, career fairs, workforce development organizations',
  },
  {
    title: 'Technology Leadership: Lessons from Fortune 500',
    description: 'How do you lead through technology change? Sharing leadership insights from managing 1,500+ team members and $100M+ in P&L responsibility.',
    audience: 'Leadership conferences, executive retreats, management training',
  },
  {
    title: 'The Income Engine: Financial Literacy for Families',
    description: 'Money matters, but most people never learn how it works. This workshop introduces financial fundamentals through a lens of empowerment and stewardship.',
    audience: 'Faith communities, community organizations, parent groups',
  },
  {
    title: 'From Newark to Fortune 500: A Career Journey',
    description: 'How does a kid from Newark end up leading global teams at Fortune 500 companies? This inspirational keynote shares personal journey and applicable insights.',
    audience: 'Schools, youth programs, diversity and inclusion events',
  },
];

export const expertise = [
  'CRM Implementation (Salesforce, Microsoft Dynamics, Zoho)',
  'AI-Powered Solutions Architecture',
  'Contact Center Transformation',
  'Revenue Operations (RevOps)',
  'Technology Leadership',
  'Executive Engagement',
  'Client Management',
  'Global Project Delivery',
  'High-Value Account Management',
  'Career Development & Financial Literacy Education',
];

export const achievements = [
  { label: '25+ years of technology leadership experience', value: '25+' },
  { label: 'Managed 1,500+ team members globally', value: '1,500+' },
  { label: 'P&L responsibility up to $100M', value: '$100M+' },
  { label: '40% Net Promoter Score improvement', value: '40%' },
  { label: '20% First Call Resolution increase', value: '20%' },
  { label: '35% revenue growth for client accounts', value: '35%' },
  { label: '$70M+ in new business generation', value: '$70M+' },
];
