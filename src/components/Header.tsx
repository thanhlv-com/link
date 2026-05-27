import React from 'react';
import { Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-30 flex min-h-[72px] items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 px-6 backdrop-blur-md transition-colors">
      <div className="flex flex-1 items-center justify-between gap-6 md:justify-end">
        {/* Mobile Title (hidden on md) */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <span className="font-bold">L</span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white">LinkHub</span>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-md flex items-center gap-4">
          <div className="relative w-full flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-xl border-0 py-2.5 pl-10 pr-4 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-500 sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-950"
              placeholder="Search applications, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
