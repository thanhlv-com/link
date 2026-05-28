import { Category, Resource } from './types';

export const categories: Category[] = [
  {
    id: 'tools',
    name: 'Useful Tools',
    icon: 'Wrench',
    description: 'A collection of software tools to support your work, increase productivity and optimize your workflow.'
  },
  {
    id: 'apps',
    name: 'Mobile Apps',
    icon: 'Smartphone',
    description: 'Useful mobile applications that make daily life easier.'
  },
  {
    id: 'websites',
    name: 'Interesting Websites',
    icon: 'Globe',
    description: 'A directory of useful websites providing knowledge, online tools or entertainment.'
  },
  {
    id: 'learning',
    name: 'Learning Resources',
    icon: 'BookOpen',
    description: 'Courses, documents and educational platforms to help improve skills and professional knowledge.'
  }
];

export const resources: Resource[] = [
  {
    id: '9',
    title: 'JSON Tools',
    description: 'A fast and handy online JSON formatting, validation, and processing tool for developers.',
    url: 'https://json-tools.thanhlv.com',
    categoryId: 'tools',
    tags: ['JSON', 'Developer', 'Format'],
    iconName: 'Braces'
  },
  {
    id: '10',
    title: 'YAML Tools',
    description: 'A website that supports parsing, converting, and manipulating YAML format easily and intuitively.',
    url: 'https://yaml-tools.thanhlv.com',
    categoryId: 'tools',
    tags: ['YAML', 'Developer', 'Format'],
    iconName: 'Code'
  },
  {
    id: '11',
    title: 'Hash Tools',
    description: 'Generate hash values from text or files using popular and widely used hashing algorithms.',
    url: 'https://hash-tools.thanhlv.com',
    categoryId: 'tools',
    tags: ['Hash', 'Developer', 'Security'],
    iconName: 'Fingerprint'
  },
  {
    id: '12',
    title: 'UUID Tools',
    description: 'Generate, validate, and decode UUID values quickly for development workflows.',
    url: 'https://uuid-tools.thanhlv.com/',
    categoryId: 'tools',
    tags: ['UUID', 'Developer', 'Utility'],
    iconName: 'KeyRound'
  }
];
