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
    features: [
      'JSON Editor with Format, Minify, and Validate actions',
      'JSON Diff and Merge workflows',
      'Path Query and Pipeline transformations',
      'Convert, Tree, CSV, Escape, and Patch utilities',
      'Schema Generate, Schema Mock, and Schema Check modules'
    ],
    tags: ['JSON', 'Developer', 'Format'],
    iconName: 'Braces'
  },
  {
    id: '10',
    title: 'YAML Tools',
    description: 'A website that supports parsing, converting, and manipulating YAML format easily and intuitively.',
    url: 'https://yaml-tools.thanhlv.com',
    categoryId: 'tools',
    features: [
      'YAML Editor with Format and Validate actions',
      'YAML Diff and Merge workflows',
      'YAMLPath Query and Pipeline transformations',
      'Convert, Tree, CSV, Escape, and Patch utilities',
      'Schema Generate, Schema Mock, and Schema Check modules'
    ],
    tags: ['YAML', 'Developer', 'Format'],
    iconName: 'Code'
  },
  {
    id: '11',
    title: 'Hash Tools',
    description: 'Generate hash values from text or files using popular and widely used hashing algorithms.',
    url: 'https://hash-tools.thanhlv.com',
    categoryId: 'tools',
    features: [
      'Hash both Text Input and File Input',
      'Support MD5, SHA-2, SHA-3, SHAKE, SM3, GOST, RIPEMD-160, and BLAKE3',
      'Multiple digest encodings: Hex, Base64, Base91, Base85, Base62, Base58, Base8, and Base2',
      'Runs 100% client-side in the browser'
    ],
    tags: ['Hash', 'Developer', 'Security'],
    iconName: 'Fingerprint'
  },
  {
    id: '12',
    title: 'UUID Tools',
    description: 'Generate, validate, and decode UUID values quickly for development workflows.',
    url: 'https://uuid-tools.thanhlv.com/',
    categoryId: 'tools',
    features: [
      'Generator and Decoder modes',
      'Generate UUID v1, v3, v4, v5, v6, v7, ULID, NanoID, CUID2, Snowflake, NIL, and MAX',
      'Bulk generation with quantity control',
      'Output formatting options: hyphens, uppercase, and braces',
      'Export output as TXT or CSV and Copy All'
    ],
    tags: ['UUID', 'Developer', 'Utility'],
    iconName: 'KeyRound'
  },
  {
    id: '13',
    title: 'Encrypt Tools',
    description: 'Encrypt and decrypt text quickly with practical utilities for developers.',
    url: 'https://encrypt-tools.thanhlv.com',
    categoryId: 'tools',
    features: [
      'AES Encrypt and AES Decrypt tools',
      'DES and Triple DES encrypt/decrypt tools',
      'RC4 encrypt/decrypt tools',
      'Key/passphrase-based input with quick swap between encrypt and decrypt',
      'Browser-based cryptography flow without backend dependency'
    ],
    tags: ['Encryption', 'Developer', 'Security'],
    iconName: 'Lock'
  },
  {
    id: '14',
    title: 'Calc Money VN Tools',
    description: 'Công cụ hỗ trợ đếm tiền nhanh và chính xác bằng tiếng Việt.',
    url: 'https://calc-money-vn-tools.thanhlv.com',
    categoryId: 'tools',
    features: [
      'Đếm tiền theo từng mệnh giá tiền Việt Nam',
      'Tự động cộng tổng số tiền theo số lượng từng mệnh giá',
      'Hiển thị kết quả rõ ràng, dễ kiểm tra đối chiếu',
      'Thao tác nhanh, phù hợp cho nhu cầu kiểm đếm hằng ngày'
    ],
    tags: ['Đếm tiền', 'Tiền Việt', 'Tiếng Việt'],
    iconName: 'Calculator'
  }
];
