import React, { useState, useMemo, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ResourceCard } from './components/ResourceCard';
import { categories, resources } from './data';
import { DynamicIcon } from './components/DynamicIcon';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter logic
  const filteredResources = useMemo(() => {
    let filtered = resources;
    
    if (activeCategory) {
      filtered = filtered.filter(r => r.categoryId === activeCategory);
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        r => 
          r.title.toLowerCase().includes(lowerQuery) || 
          r.description.toLowerCase().includes(lowerQuery) ||
          r.tags.some(t => t.toLowerCase().includes(lowerQuery))
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  // SEO
  useEffect(() => {
    if (searchQuery) {
      document.title = `Search results for "${searchQuery}" - LinkHub`;
    } else if (activeCategory) {
      const categoryName = categories.find(c => c.id === activeCategory)?.name;
      document.title = `${categoryName} - LinkHub Directory`;
    } else {
      document.title = 'LinkHub - Developer Tools & Apps Directory';
    }
  }, [searchQuery, activeCategory]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="linkhub-theme">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors flex">
        {/* Sidebar for Desktop */}
        <Sidebar activeCategory={activeCategory} onCategoryClick={setActiveCategory} />

        {/* Main Content Area */}
        <div className="flex-1 md:pl-72 flex flex-col">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
            {searchQuery ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                  Search results for "{searchQuery}"
                </h2>
                <p className="text-slate-600 dark:text-slate-400 transition-colors">
                  Found {filteredResources.length} matching links.
                </p>
              </div>
            ) : (
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
                  {activeCategory 
                    ? categories.find(c => c.id === activeCategory)?.name 
                    : 'Tools & Apps Directory'}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed transition-colors">
                  {activeCategory 
                    ? categories.find(c => c.id === activeCategory)?.description 
                    : 'A curated directory of the best tools, applications, websites, and learning resources.'}
                </p>
              </div>
            )}

            {/* Render Categories and their Resources */}
            <div className="space-y-16">
              {categories
                .filter(c => activeCategory === null || activeCategory === c.id)
                .map((category) => {
                  const categoryResources = filteredResources.filter(r => r.categoryId === category.id);
                  
                  if (categoryResources.length === 0) return null;

                  return (
                    <section key={category.id} id={category.id} className="scroll-mt-24">
                      {!searchQuery && !activeCategory && (
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 transition-colors">
                          <DynamicIcon name={category.icon} className="h-6 w-6 text-blue-600 dark:text-blue-500 transition-colors" />
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors">{category.name}</h3>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryResources.map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                      </div>
                    </section>
                  );
              })}

              {filteredResources.length === 0 && (
                <div className="text-center py-20">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 mb-4 transition-colors">
                    <DynamicIcon name="SearchX" className="h-8 w-8 text-slate-400 dark:text-slate-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors">No results found</h3>
                  <p className="text-slate-500 dark:text-slate-400 transition-colors">
                    No tools or applications match your search keywords. Please try different terms.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
