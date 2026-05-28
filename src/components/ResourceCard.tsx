import React from 'react';
import { Resource } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <article className="group flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          <DynamicIcon name={resource.iconName || 'Link'} className="h-6 w-6" />
        </div>
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          title={`Visit ${resource.title}`}
          className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 -mr-2 bg-transparent rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
          aria-label={`Open ${resource.title} in a new tab`}
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors">
          <a 
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline decoration-blue-500/30 dark:decoration-blue-400/30 underline-offset-4"
          >
            {resource.title}
          </a>
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4 transition-colors">
          {resource.description}
        </p>

        {resource.features.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2 transition-colors">
              Key Features
            </p>
            <ul className="space-y-1.5">
              {resource.features.slice(0, 4).map((feature) => (
                <li key={feature} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50 transition-colors">
        {resource.tags.map(tag => (
          <span 
            key={tag} 
            className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10 dark:ring-slate-400/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
