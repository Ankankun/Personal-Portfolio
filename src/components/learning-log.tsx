'use client';
import React, { useState, useMemo } from 'react';
import LogCard from './log-card';
import { logEntries, logFilters } from '@/lib/data';
import type { LogEntry } from '@/lib/data';
import { cn } from '@/lib/utils';

const LearningLog = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredLogs = useMemo(() => {
    if (activeFilter === 'All') {
      return logEntries;
    }
    return logEntries.filter(
      (entry) => entry.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="learning" className="py-16 sm:py-24 bg-stone-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl [font-size:clamp(2rem,4vw,2.75rem)]">
            Learning Log
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A timeline of concepts I've been exploring.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {logFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150',
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredLogs.map((entry: LogEntry) => (
            <LogCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningLog;
