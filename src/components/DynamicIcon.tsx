import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const Icon = (LucideIcons as any)[name];
  
  if (!Icon) {
    const Fallback = LucideIcons.Link2;
    return <Fallback {...props} />;
  }

  return <Icon {...props} />;
};
