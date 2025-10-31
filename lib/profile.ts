export type SocialLink = {
  label: string;
  href: string;
  icon?: string; // name for reference if needed in components
};

export type ContactItem = {
  type: 'email' | 'phone' | 'location' | 'website';
  label: string;
  value: string;
  href?: string | null;
};

export type EducationEntry = {
  degree: string;
  institution?: string;
  cgpa?: string;
  period?: string;
};

export type Profile = {
  name: string;
  brand: string; // short brand for navbar
  roles: string[];
  email: string;
  phone: string;
  location: string;
  portfolioUrl: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
  traits: string[];
  summary: string[]; // paragraphs
  education: EducationEntry;
  imageAlt: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
  };
  keywords: string[];
};

export const profile: Profile = {
  name: 'ABINASH BEHERA',
  brand: 'ABINASH',
  roles: [
    'Full Stack Developer',
    'AWS cloud Engineer',
    'MERN Stack Developer',
    'React Developer',
  ],
  email: 'beheraabinash656@gmail.com',
  phone: '+91 9124076708',
  location: 'Bhadrak, Odisha, India',
  portfolioUrl: '',
  github: 'https://github.com/Abinash-045',
  linkedin: 'https://www.linkedin.com/in/abinash-behera-639694346/',
  resumeUrl: 'https://drive.google.com/file/d/1jUtKs9LPdxGfWlQ_3kcgtE4a9EHCDNQX/view?usp=drive_link',
  traits: ['Problem Solving', 'Full Stack Development (MERN)', 'AWS Cloud Integration', 'Continuous Learner', 'Attention to Detail', 'Strong Team Collaboration'],

  summary: [
    'I’m a dedicated Full Stack Developer currently pursuing a B.Tech in Computer Science at Centurion University. With hands-on experience in the MERN stack and AWS cloud technologies, I specialize in building scalable, secure, and efficient web applications. '
  ],
  education: {
    degree: 'B.Tech in Computer Science',
    cgpa: 'CGPA: 8.5/10',
    period: 'Expected: May 2026',
  },
  imageAlt: 'ABINASH BEHERA',
  openGraph: {
    title: 'Abinash Behera - Full Stack Developer',
    description: 'Full Stack Developer specializing in AWS cloud and MERN Stack',
    url: 'abinash-protfolio.vercel.app',
    siteName: 'Abinash Behera Portfolio',
  },
  keywords: [
    'Full Stack Developer',
    'AWS cloud Engineer',
    'MERN Stack',
    'Web Development',
  ],
};

export const contactItems: ContactItem[] = [
  { type: 'email', label: 'Email', value: 'beheraabinash656@gmail.com', href: 'mailto:beheraabinash656@gmail.com' },
  { type: 'phone', label: 'Phone', value: '+91 9124076708', href: 'tel:+91 9124076708' },
  { type: 'location', label: 'Location', value: 'Bhadrak, Odisha, India', href: null },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Abinash-045' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abinash-behera-639694346/' },
  { label: 'Portfolio', href: 'abinash-protfolio.vercel.app' },
];

