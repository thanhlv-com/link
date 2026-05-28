export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  categoryId: string;
  iconName?: string;
  features: string[];
  tags: string[];
}
