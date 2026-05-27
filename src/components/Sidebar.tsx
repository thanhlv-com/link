import React from 'react';
import { categories } from '../data';
import { DynamicIcon } from './DynamicIcon';
import { cn } from '../utils';
import { LayoutGrid } from 'lucide-react';

interface SidebarProps {
  activeCategory: string | null;
  onCategoryClick: (categoryId: string | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryClick }) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 md:flex transition-colors">
      <div className="flex h-20 items-center px-6">
        <a href="#" onClick={(e) => { e.preventDefault(); onCategoryClick(null); }} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/20">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">LinkHub</h1>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 transition-colors">Directory Hub</p>
          </div>
        </a>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        <div className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 transition-colors">
          Categories
        </div>
        
        <button
          onClick={() => onCategoryClick(null)}
          className={cn(
            "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
            activeCategory === null
              ? "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-700"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
          )}
        >
          <LayoutGrid className={cn("h-5 w-5", activeCategory === null ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500")} />
          All links
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              activeCategory === category.id
                ? "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-700"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            <DynamicIcon 
              name={category.icon} 
              className={cn("h-5 w-5", activeCategory === category.id ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500")} 
            />
            {category.name}
          </button>
        ))}
      </nav>
      
    </aside>
  );
};
