export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  resumePath: string;
}

export const profile: Profile = {
  name: 'Navinkumar Gadparlawar',
  role: 'Senior Angular Developer',
  location: 'Hyderabad, Telangana, India',
  email: 'navinkumar.gad1995@gmail.com',
  phone: '+91 98346 93187',
  phoneHref: '+919834693187',
  github: 'https://github.com/navinkumargad1995-ai',
  githubLabel: 'github.com/navinkumargad1995-ai',
  linkedin: 'https://linkedin.com/in/navinkumar-gadparlawar-6291b5226',
  linkedinLabel: 'linkedin.com/in/navinkumar-gadparlawar',
  resumePath: 'assets/resume/Navinkumar_Gadparlawar_Resume.pdf',
};

export const heroRoles: string[] = [
  'Senior Angular Developer',
  'Angular v8–v17+ Specialist',
  'NgRx & RxJS Enthusiast',
  'Enterprise SPA Builder',
];

export const orbitBadges: string[] = ['Angular', 'NgRx', 'RxJS', 'TypeScript', 'Signals', 'REST API'];

export interface Stat {
  label: string;
  target: number;
}

export const stats: Stat[] = [
  { label: 'Years Experience', target: 5 },
  { label: 'Enterprise Projects', target: 3 },
  { label: 'Angular v8–v17+', target: 17 },
  { label: 'Companies', target: 3 },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Angular Core',
    skills: [
      'Angular v8–v17+', 'Standalone Components', 'Signals', '@if / @for',
      'Component Architecture', 'Dependency Injection', 'Routing & Lazy Loading', 'Route Guards',
    ],
  },
  {
    title: 'State & Reactive',
    skills: ['RxJS', 'Observables', 'Subjects', 'Operators', 'NgRx Store', 'Actions / Effects', 'Selectors'],
  },
  {
    title: 'Forms & UI',
    skills: [
      'Reactive Forms', 'Template-driven Forms', 'Custom Validators', 'Custom Directives & Pipes',
      'HTML5 / CSS3', 'Bootstrap', 'Angular Material', 'Responsive UI',
    ],
  },
  {
    title: 'Integration & Testing',
    skills: ['REST API Integration', 'HttpClient', 'Interceptors', 'JWT Authentication', 'Jasmine', 'Karma', 'Postman', 'Swagger'],
  },
  {
    title: 'Tooling & Process',
    skills: ['Git / GitHub', 'CI/CD Pipelines', 'GitHub Actions', 'Chrome DevTools', 'Debugging & Perf. Optimization', 'Agile / Scrum', 'Jira'],
  },
];

export interface ExperienceItem {
  date: string;
  title: string;
  org: string;
  description: string;
  isEducation?: boolean;
}

export const experienceItems: ExperienceItem[] = [
  {
    date: 'April 2026 – Till Date',
    title: 'Software Engineer',
    org: 'Saince Healthtech Pvt Ltd',
    description: 'Building healthcare platform features with modern Angular (Standalone Components, Signals) and contributing to CI/CD-driven delivery.',
  },
  {
    date: 'Jan 2023 – Feb 2026',
    title: 'Software Engineer',
    org: 'Accenture (MSRcosmos Group Pvt Ltd)',
    description: 'Delivered enterprise Angular applications across recruitment-tech and IT service-management domains, working within Agile/Scrum teams.',
  },
  {
    date: 'Oct 2021 – Dec 2022',
    title: 'Associate Software Engineer',
    org: 'VisionQuest Solution Pvt Ltd',
    description: 'Started my Angular development career building responsive UI components and integrating REST APIs.',
  },
  {
    date: '2022',
    title: 'BE',
    org: 'VIT',
    description: 'Bachelor of Engineering.',
    isEducation: true,
  },
];

export interface Project {
  code: string;
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    code: 'HIMS',
    name: 'Hospital Information Management System',
    description: 'A healthcare management platform enabling hospitals and clinics to manage patient records, appointment scheduling, doctor consultations, and billing workflows, with role-based dashboards for admin, doctors, and front-desk staff.',
    highlights: [
      'Migrated legacy NgModules to Standalone Components; introduced Signals for local reactive state',
      'Adopted @if/@for control flow while refactoring the patient dashboard',
      'NgRx-driven appointment scheduling and billing workflows with JWT auth & RBAC',
      'Unit tests (Jasmine/Karma) plus a GitHub Actions CI/CD pipeline for lint, build and test',
    ],
    tech: ['Angular 17', 'Signals', 'NgRx', 'RxJS', 'Angular Material', 'JWT', 'GitHub Actions'],
  },
  {
    code: 'ATS',
    name: 'Applicant Tracking System',
    description: 'A recruitment management platform streamlining candidate sourcing, tracking, and onboarding with role-based dashboards and real-time updates for enterprise-level hiring.',
    highlights: [
      'Modular architecture with lazy-loaded feature modules for candidate, job, and onboarding flows',
      'NgRx store/actions/effects for candidate pipeline state management',
      'Multi-step Reactive Forms with client-side validated resume upload',
      'OnPush change detection + trackBy cut large candidate-list re-render time significantly',
    ],
    tech: ['Angular 12+', 'NgRx', 'RxJS', 'Reactive Forms', 'JWT', 'RBAC'],
  },
  {
    code: 'ITS',
    name: 'Ticketing & Issue Tracking System',
    description: 'A ticketing and issue-tracking platform to manage incidents, service requests, and bug workflows across teams, with real-time status updates and role-based access control.',
    highlights: [
      'Full ticket lifecycle (Open → In Progress → Resolved → Closed) with priority/severity',
      'RBAC-based visibility for Admin, Support, and User roles',
      'Search, filtering, sorting and pagination for large ticket datasets',
      'Improved error-interceptor logging, reducing average issue turnaround time',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'JWT'],
  },
];

export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
